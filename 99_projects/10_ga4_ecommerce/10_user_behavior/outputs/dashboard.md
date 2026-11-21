# Google Sheets Dashboard

사용자 행동 분석 결과를 시각화한 대시보드입니다.

---

## 1. 주요 기능

- 시작일 및 종료일 입력을 통한 분석 기간 설정
- BigQuery API를 활용한 SQL 쿼리 실행
- Google Apps Script를 통한 데이터 갱신 자동화
- 조회 결과를 Google Sheets 대시보드에 반영

---

## 2. 데모

<img width="913" height="444" alt="ecommerce_user_dashboard" src="https://github.com/user-attachments/assets/b8bcd2d1-5b50-440d-b2ae-c1c721c644fe" />

Link: [Google Sheets Dashboard Demo](https://docs.google.com/spreadsheets/d/1cpSAsNeNXQ2PnNJjbNjd5bMw9_as4mxUxm9HRPab5ig/edit?gid=0#gid=0)

---

## 3. 구성

### 분석 기간 선택

- 시작일과 종료일을 입력하여 분석 기간 설정
- 선택한 기간에 최초 이벤트가 발생한 사용자 코호트를 기준으로 지표 갱신

### Event Activity

- 상품 조회(View Item) 이벤트 발생 횟수
- 장바구니 추가(Add to Cart) 이벤트 발생 횟수
- 구매(Purchase) 이벤트 발생 횟수
- 선택한 기간에 해당하는 사용자들의 이벤트 활동 수준 확인

### Purchase Distribution

- 구매자(Purchasers) 수
- 비구매자(Non-purchasers) 수
- 구매 여부에 따른 사용자 분포 확인

---

## 4. 분석 기준

- **분석 단위:** 사용자 1명
- **기간 기준:** 선택한 기간에 최초 이벤트가 발생한 사용자
- **이벤트 발생 횟수 및 구매 여부:** 전체 관측 기간 기준 누적값
