# User Behavior Analysis

---

## 1. 분석 목적

사용자별 행동 데이터를 집계하고, 기본적인 사용자 행동 패턴을 파악한다.

---

## 2. 분석 질문

- 사용자별 이벤트 발생 횟수는 어떻게 분포하는가?
- 상품 조회, 장바구니 추가, 구매 행동은 사용자별로 어떤 차이가 있는가?
- 구매 경험이 있는 사용자와 없는 사용자의 행동에는 어떤 차이가 있는가?

---

## 3. 분석 데이터

- **원천 데이터:** `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_*`
- **데이터 유형:** GA4 웹 이벤트 로그
- **분석 단위:** 사용자 1명당 1행
- **사용자 식별자:** `user_pseudo_id`

---

## 4. 데이터 마트 설계

사용자별 행동 정보를 집계한 User DM을 생성한다.

| 컬럼명 | 설명 |
|---|---|
| user_pseudo_id | 사용자 식별자 |
| total_events | 총 이벤트 발생 횟수 |
| view_item_count | 상품 조회 횟수 |
| add_to_cart_count | 장바구니 추가 횟수 |
| purchase_count | 구매 이벤트 발생 횟수 |
| purchase_flag | 구매 이벤트 발생 여부 |
| first_event_date | 최초 관측일 |

---

## 5. 분석 방법

### SQL
- 원천 데이터 조회
- 사용자별 이벤트 집계
- User DM 생성
- 데이터 검증

### Python
- BigQuery 데이터 조회
- Pandas를 활용한 데이터 처리
- 기술통계 및 그룹별 비교
- Matplotlib을 활용한 시각화

### Tableau
- 사용자 행동 분석 대시보드 제작
- 주요 지표 및 분석 결과 시각화

---

## 6. 분석 진행 순서

1. 원천 데이터 탐색
2. User DM 설계 및 생성
3. 데이터 품질 검증
4. 사용자 행동 데이터 탐색
5. 기초 통계 및 그룹 비교
6. 시각화 및 대시보드 제작
7. 분석 결과 정리

---

## 7. 분석 시 참고사항

- `user_pseudo_id`는 익명 사용자 식별자로 실제 개인이나 로그인 계정을 의미하지 않을 수 있다.
- `purchase_count`는 구매 이벤트 발생 횟수이며 실제 주문 건수와 다를 수 있다.
- `purchase_flag`는 관측 기간 내 구매 이벤트 발생 여부를 의미한다.
- `first_event_date`는 관측 기간 내 최초 이벤트 발생일이며 실제 가입일을 의미하지 않는다.
- 관측된 행동 간 연관성을 인과관계로 해석하지 않는다.

---

## 8. 프로젝트 산출물

- `user_dm.sql`: 사용자별 데이터 집계 SQL
- `validation.sql`: 데이터 검증 SQL
- `user_analysis.ipynb`: Python 기반 데이터 분석
- `outputs/`: 분석 결과 및 시각화 자료