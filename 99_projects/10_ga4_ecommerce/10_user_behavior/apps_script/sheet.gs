function getOutputSheet(sheetName) {
  return SpreadsheetApp
    .openById(SHEET_CONFIG.SPREADSHEET_ID)
    .getSheetByName(sheetName);
}


function updateMetrics(sheet, result) {
  if (!result.values || result.values.length === 0) {
    throw new Error('BigQuery 조회 결과가 없습니다.');
  }

  const headers = result.headers;
  const values = result.values[0];

  // 컬럼명으로 결과값 조회
  const getValue = (columnName) => {
    const index = headers.indexOf(columnName);

    if (index === -1) {
      throw new Error(`컬럼을 찾을 수 없습니다: ${columnName}`);
    }

    return Number(values[index]) || 0;
  };

  // Event Activity
  const behaviorData = [
    ['Event Type', 'Event Count'],
    ['View Item', getValue('total_view_item')],
    ['Add to Cart', getValue('total_add_to_cart')],
    ['Purchase', getValue('total_purchase')]
  ];

  sheet.getRange('F4:G7').setValues(behaviorData);
  sheet.getRange('G5:G7').setNumberFormat('#,##0');

  // Purchase Distribution
  const purchaseData = [
    ['Purchase Status', 'Users'],
    ['Purchasers', getValue('purchase_users')],
    ['Non-purchasers', getValue('non_purchase_users')]
  ];

  sheet.getRange('I4:J6').setValues(purchaseData);
  sheet.getRange('J5:J6').setNumberFormat('#,##0');
}
