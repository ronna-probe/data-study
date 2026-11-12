const BIGQUERY_CONFIG = {
  LOCATION: 'US',

  ECOMMERCE_USER: {
    PROJECT_ID: 'public-data-513413',
    DATASET: 'ga4_ecommerce',
    TABLE: 'user_dm'
  }
};

const SHEET_CONFIG = {
  // 실제 스프레드시트 ID는 실행 환경에서 별도 설정
  SPREADSHEET_ID: '',

  SHEETS: {
    ECOMMERCE_USER: 'user'
  },

  INPUT_CELLS: {
    START_DATE: 'C5',
    END_DATE: 'C6'
  },

  OUTPUT_START_ROW: 7
};

const APP_CONFIG = {
  TIMEZONE: 'Asia/Seoul',

  DATA_RANGE: {
    START_DATE: '2020-11-01',
    END_DATE: '2021-01-31'
  }
};
