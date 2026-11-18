function run() {
  // 1. Google Sheets 연결
  const sheet = getOutputSheet(
    SHEET_CONFIG.SHEETS.ECOMMERCE_USER
  );

  if (!sheet) {
    throw new Error('출력 시트를 찾을 수 없습니다.');
  }

  // 2. 날짜 입력값 가져오기
  const startDate = sheet.getRange(
    SHEET_CONFIG.INPUT_CELLS.START_DATE
  ).getValue();

  const endDate = sheet.getRange(
    SHEET_CONFIG.INPUT_CELLS.END_DATE
  ).getValue();

  // 3. 날짜 유효성 검사
  if (
    !startDate ||
    !endDate ||
    typeof startDate.getTime !== 'function' ||
    typeof endDate.getTime !== 'function' ||
    isNaN(startDate.getTime()) ||
    isNaN(endDate.getTime())
  ) {
    throw new Error('유효한 시작 날짜와 종료 날짜를 입력해 주세요.');
  }

  if (startDate.getTime() > endDate.getTime()) {
    throw new Error('시작 날짜가 종료 날짜보다 늦습니다.');
  }

  // 4. BigQuery 설정
  const projectConfig = BIGQUERY_CONFIG.ECOMMERCE_USER;

  // 5. SQL 생성 및 실행
  const query = buildUserQuery(
    projectConfig,
    startDate,
    endDate
  );

  const result = runBigQuery(query, projectConfig);

  // 6. 분석 결과 반영
  updateMetrics(sheet, result);

  console.log('분석 완료');
  console.log('조회 기간:', startDate, '~', endDate);
  console.log('반환 행 수:', result.values.length);
}
