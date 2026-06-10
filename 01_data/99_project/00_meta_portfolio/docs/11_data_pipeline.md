# 데이터 파이프라인

본 프로젝트는 진행 과정에서 데이터 구조가 지속적으로 확장되는 로그 기반 시스템이다.

SQL 기반 분석도 고려했지만, 본 데이터는 단일 스냅샷이 아니라 지속적으로 갱신되는 구조이기 때문에 고정된 테이블을 전제로 하는 방식보다는, 변경되는 데이터를 주기적으로 수집해 처리하는 구조가 더 적합하다고 판단하였다.

이에 따라 기존 경험이 있는 GAS를 활용하여 Google Sheets 기반 파이프라인으로 구성하였다.

---

## DW

원본 데이터는 Airtable에 저장한다.

규모는 작지만, 구조적으로 원본 저장소 역할을 하기 때문에 DW로 정의하였다.

<img width="942" height="543" alt="question_log_data_sample" src="https://github.com/user-attachments/assets/584d0402-fa74-41f1-a2d2-147440731c40" />

---

## DM

Airtable만으로는 분석이 불편하여,
Google Sheets로 데이터를 가져와 분석하는 구조를 사용했다.

이 과정에서 저장과 분석은 도구 성격이 다르다는 점을 체감했다.
이는 OLTP / OLAP 구조에서의 역할 분리와 유사한 개념으로 이해할 수 있었다.

<img width="643" height="259" alt="question_log_fetch_GAS" src="https://github.com/user-attachments/assets/d50a63ce-ac69-4355-95a1-48431d45741c" />

---

## 데이터 적재 및 자동화

GAS를 이용해 Airtable 데이터를 Google Sheets로 가져오도록 구성했다.

초기에는 API 설정 문제 등 몇 가지 이슈가 있었지만, 디버깅을 통해 정상 동작하는 구조를 만들었다.

<img width="855" height="483" alt="question_log_fetch_success" src="https://github.com/user-attachments/assets/4720ab5e-d6f0-45a5-810f-b39b3d3bf6cf" />

---

## 데이터 품질 및 UI 개선

데이터를 다루면서 다음과 같은 개선이 필요했다.

- 데이터 순서가 보장되지 않음 → question_id 기준 정렬로 해결
- 셀 높이가 일정하지 않음 → preview + note 구조로 개선

이를 통해 단순 적재가 아니라 읽기 좋은 형태의 로그로 개선하였다.
또한 스프레드시트의 테이블 기능을 활용하여 데이터 탐색 경험을 개선하였다.

<img width="1280" height="611" alt="question_log_fetch_result" src="https://github.com/user-attachments/assets/58a00687-cc64-4be0-bf3a-bd281126ff49" />

---

## 스케줄링

Google Apps Script Trigger를 사용해, 매일 1회 자동으로 데이터를 동기화하도록 설정하였다.

<img width="751" height="318" alt="question_log_fetch_trigger" src="https://github.com/user-attachments/assets/b98cf635-2107-4912-a526-1561f2699d5d" />
