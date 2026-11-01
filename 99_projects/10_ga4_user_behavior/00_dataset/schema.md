# Schema

---

## 1. 테이블 구조

- **Project:** `bigquery-public-data`
- **Dataset:** `ga4_obfuscated_sample_ecommerce`
- **Table:** `events_*`
- **테이블 유형:** 날짜별 이벤트 로그 테이블

날짜별 테이블이 생성되어 있으며, `events_*` 와일드카드 테이블을 사용해 여러 날짜의 데이터를 조회할 수 있다.

각 행은 하나의 이벤트를 의미한다.

---

## 2. 주요 컬럼

| 컬럼명 | 데이터 유형 | 설명 |
|---|---|---|
| event_date | STRING | 이벤트 발생 날짜 (YYYYMMDD) |
| event_timestamp | INTEGER | 이벤트 수집 시각 (마이크로초 단위) |
| event_name | STRING | 이벤트 이름 |
| user_pseudo_id | STRING | 익명 사용자 식별자 |
| user_id | STRING | 사용자 식별자 |
| platform | STRING | 이벤트 발생 플랫폼 |
| stream_id | STRING | 데이터 스트림 식별자 |

---

## 3. 주요 중첩 컬럼

일부 컬럼은 하나의 행 안에 여러 값을 포함하는 배열 또는 중첩 구조로 구성되어 있다.

| 컬럼명 | 구조 | 설명 |
|---|---|---|
| event_params | ARRAY<STRUCT> | 이벤트별 추가 매개변수 |
| user_properties | ARRAY<STRUCT> | 사용자별 속성 정보 |
| items | ARRAY<STRUCT> | 이벤트에 포함된 상품 정보 |
| device | STRUCT | 기기 관련 정보 |
| geo | STRUCT | 지역 관련 정보 |
| traffic_source | STRUCT | 유입 경로 정보 |
| ecommerce | STRUCT | 구매 및 거래 관련 정보 |

### 주요 중첩 컬럼 설명

- `event_params`: 페이지 URL, 세션 ID 등 이벤트별 추가 정보
- `user_properties`: 사용자와 관련된 속성 정보
- `items`: 상품 ID, 상품명, 수량 등 상품 정보
- `device`: 기기 종류, 운영체제, 브라우저 정보
- `geo`: 국가, 지역, 도시 정보
- `traffic_source`: 사용자 최초 유입 경로 정보
- `ecommerce`: 거래 ID, 구매 수익, 상품 수량 등 전자상거래 정보

---

## 4. 데이터 구조 특징

- 이벤트 단위로 데이터가 저장된다.
- 동일한 사용자가 여러 이벤트를 발생시킬 수 있다.
- `user_pseudo_id`를 기준으로 사용자별 이벤트를 집계할 수 있다.
- `event_params`, `items` 등 일부 컬럼은 중첩 및 반복 구조로 구성되어 있다.
- 중첩 데이터 조회 시 BigQuery의 `UNNEST()`를 활용할 수 있다.

---

## 5. 분석 시 참고사항

- `user_pseudo_id`는 로그인 계정이 아닌 익명 사용자 식별자일 수 있다.
- `event_timestamp`는 마이크로초 단위이므로 날짜 및 시간 변환 시 주의가 필요하다.
- `event_params`와 `items`는 일반 컬럼처럼 바로 조회하기 어려울 수 있다.
- 샘플 데이터는 일부 값이 난독화되어 있으며, 데이터의 내부 일관성이 제한될 수 있다.

---

## 6. 참고 자료

- [GA4 BigQuery Export Schema](https://support.google.com/analytics/answer/7029846)
- [GA4 E-commerce Sample Dataset](https://developers.google.com/analytics/bigquery/web-ecommerce-demo-dataset)