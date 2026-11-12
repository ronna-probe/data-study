// BigQuery 설정
const BIGQUERY_CONFIG = {
  LOCATION: 'US',

  ECOMMERCE_USER: {
    PROJECT_ID: 'public-data-513413',
    DATASET: 'ga4_ecommerce',
    TABLE: 'user_dm'
  }
};

// Google Sheets 설정
const SHEET_CONFIG = {
  // 실제 사용 시 스프레드시트 ID 설정
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',

  SHEETS: {
    ECOMMERCE_USER: 'user'
  },

  INPUT_CELLS: {
    START_DATE: 'C5',
    END_DATE: 'C6'
  },

  OUTPUT_START_ROW: 7
};

// 애플리케이션 공통 설정
const APP_CONFIG = {
  TIMEZONE: 'Asia/Seoul',

  DATA_RANGE: {
    START_DATE: '2020-11-01',
    END_DATE: '2021-01-31'
  }
};
