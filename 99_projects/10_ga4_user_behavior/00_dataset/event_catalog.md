# Event Catalog

---

## 1. 개요

GA4 이벤트 로그는 사용자의 웹사이트 내 행동을 이벤트 단위로 기록한다.

하나의 사용자는 여러 이벤트를 발생시킬 수 있으며,  
이벤트 이름(`event_name`)을 기준으로 행동 유형을 구분할 수 있다.

---

## 2. 주요 이벤트

| 이벤트명 | 설명 | 분석 활용 |
|---|---|---|
| **`page_view`** | 페이지 조회 | 페이지 방문 행동 |
| `session_start` | 세션 시작 | 세션 분석 |
| `first_visit` | 최초 방문 | 신규 방문자 분석 |
| **`view_item`** | 상품 상세 조회 | 상품 관심도 분석 |
| `view_item_list` | 상품 목록 조회 | 상품 탐색 행동 |
| `select_item` | 상품 선택 | 상품 선택 행동 |
| **`add_to_cart`** | 장바구니 추가 | 구매 의도 분석 |
| `remove_from_cart` | 장바구니 상품 제거 | 장바구니 이탈 행동 |
| `begin_checkout` | 결제 시작 | 구매 퍼널 분석 |
| `add_shipping_info` | 배송 정보 입력 | 결제 진행 단계 분석 |
| `add_payment_info` | 결제 정보 입력 | 결제 진행 단계 분석 |
| **`purchase`** | 구매 완료 | 구매 행동 분석 |

---

## 3. 분석 대상 이벤트

이번 프로젝트에서는 다음 이벤트를 중심으로 분석한다.

| 이벤트명 | 활용 목적 |
|---|---|
| `page_view` | 전체 페이지 조회 행동 파악 |
| `view_item` | 상품 조회 횟수 집계 |
| `add_to_cart` | 장바구니 추가 횟수 집계 |
| `purchase` | 구매 이벤트 횟수 집계 |

---

## 4. 이벤트 활용 시 참고사항

- 이벤트 발생 횟수와 사용자 수는 구분해야 한다.
- 동일 사용자가 같은 이벤트를 여러 번 발생시킬 수 있다.
- `purchase` 이벤트 횟수가 실제 주문 건수와 반드시 일치하는 것은 아니다.
- 이벤트 발생 순서와 횟수만으로 사용자의 구매 의도를 단정할 수 없다.
- 이벤트별 추가 정보는 `event_params` 등의 중첩 컬럼에 저장될 수 있다.

---

## 5. 참고 자료

- [GA4 Recommended Events](https://support.google.com/analytics/answer/9267735)
- [GA4 BigQuery Export Schema](https://support.google.com/analytics/answer/7029846)