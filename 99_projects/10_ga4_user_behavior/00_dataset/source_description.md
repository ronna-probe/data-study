# Source Description

---

## 1. 데이터 개요

- **데이터셋:** GA4 E-commerce Sample Dataset
- **데이터 출처:** Google BigQuery Public Dataset
- **서비스:** Google Merchandise Store
- **데이터 유형:** 웹 사용자 행동 이벤트 로그
- **수집 기간:** 2020년 11월 ~ 2021년 1월
- **저장 위치:** `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_*`

---

## 2. 데이터 설명

Google Merchandise Store에서 수집된 GA4 이벤트 로그 데이터다.  
사용자의 웹사이트 방문 및 상품 조회, 장바구니 추가, 구매 등의 행동이 이벤트 단위로 기록되어 있다.

주요 이벤트는 다음과 같다.

- `page_view`: 페이지 조회
- `view_item`: 상품 조회
- `add_to_cart`: 장바구니 추가
- `begin_checkout`: 결제 시작
- `purchase`: 구매

---

## 3. 참고 자료

- [GA4 BigQuery Sample Dataset 공식 문서](https://developers.google.com/analytics/bigquery/web-ecommerce-demo-dataset)
- [BigQuery Public Dataset](https://console.cloud.google.com/marketplace/product/obfuscated-ga360-data/obfuscated-ga360-data)