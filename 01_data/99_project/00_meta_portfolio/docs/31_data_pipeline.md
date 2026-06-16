# 데이터 파이프라인

Date: 2026-06-16

본 프로젝트는 GPT와의 상호작용 과정에서 생성되는 질문 로그를 수집하고,
이를 상태 변화 기록(State Record)과 결과물(Output)로 구조화하는 로그 기반 시스템이다.

프로젝트 진행 과정에서 데이터 구조가 지속적으로 확장되기 때문에,
정적 데이터셋을 분석하는 방식보다 변경되는 로그를 지속적으로 축적하고 관리할 수 있는 구조가 필요하였다.

이에 따라 Airtable을 원본 저장소로 사용하고,
Google Sheets를 보조 분석 및 관리 레이어로 활용하였다.

---

## Data Architecture

```text
Question Log (Airtable)
        ↓
Google Sheets
        ↓
State Record
        ↓
Version Output
```

- Question Log: 개별 질문 이벤트 기록
- State Record: 의미 있는 상태 변화 기록
- Output: 특정 시점 또는 버전의 결과 정리

---

## Source Layer

원본 데이터는 Airtable에 저장한다.

질문 로그는 이벤트 단위로 기록되며,
프로젝트의 모든 분석은 해당 로그를 기반으로 수행된다.

<img width="942" height="543" alt="question_log_data_sample" src="https://github.com/user-attachments/assets/584d0402-fa74-41f1-a2d2-147440731c40" />

---

## Analysis Layer

Google Sheets는 원본 로그를 조회하고,
State Record를 관리하며,
탐색적 분석을 수행하기 위한 작업 공간으로 사용한다.

저장과 분석의 역할을 분리함으로써
로그 관리와 데이터 해석을 독립적으로 수행할 수 있도록 구성하였다.

<img width="643" height="259" alt="question_log_fetch_GAS" src="https://github.com/user-attachments/assets/d50a63ce-ac69-4355-95a1-48431d45741c" />

---

## Data Ingestion

GAS를 이용해 Airtable 데이터를 Google Sheets로 동기화하도록 구성했다.

초기에는 API 설정 문제 등 몇 가지 이슈가 있었지만,
디버깅을 통해 안정적으로 동작하는 구조를 구축하였다.

<img width="855" height="483" alt="question_log_fetch_success" src="https://github.com/user-attachments/assets/4720ab5e-d6f0-45a5-810f-b39b3d3bf6cf" />

---

## Data Quality

로그 데이터의 탐색성과 가독성을 높이기 위해 다음과 같은 개선을 적용하였다.

- question_id 기준 정렬
- preview + note 구조 적용
- 테이블 기능 활용

이를 통해 단순 저장소가 아닌,
분석 가능한 로그 환경으로 개선하였다.

<img width="1280" height="611" alt="question_log_fetch_result" src="https://github.com/user-attachments/assets/58a00687-cc64-4be0-bf3a-bd281126ff49" />

---

## Scheduling

Google Apps Script Trigger를 사용하여
매일 1회 자동 동기화가 수행되도록 설정하였다.

<img width="751" height="318" alt="question_log_fetch_trigger" src="https://github.com/user-attachments/assets/b98cf635-2107-4912-a526-1561f2699d5d" />
