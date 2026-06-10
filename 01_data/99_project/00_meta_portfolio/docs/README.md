# Docs

본 프로젝트는 질문 로그를 데이터로 수집하고, 이를 분석 가능한 구조로 변환한 뒤, 학습 상태를 추정하는 것을 목표로 한다.

전체 문서는 다음과 같은 흐름으로 구성된다.

```text
Analysis Framework
    ↓
Data Architecture
    ↓
Learning State Modeling
```

---

## 1. Analysis Framework

질문을 데이터로 해석하기 위한 관점과 가설을 정의한다.

### Documents

#### analysis_framework.md

- 프로젝트의 분석 관점
- 질문을 데이터로 바라보는 기준
- 질문 → 이해 → 상태 변화 구조 정의

#### hypothesis.md

- 프로젝트에서 검증하고자 하는 가설
- 질문과 학습 상태의 관계 정의

---

## 2. Data Architecture

데이터 저장 구조와 수집 파이프라인을 정의한다.

### Documents

#### schema.md

- Airtable 스키마

#### data_pipeline.md

- Airtable → Google Sheets 적재
- GAS 자동화
- 스케줄링 및 동기화

---

## 3. Learning State Modeling

질문 데이터를 정량화하고 상태 지표로 변환하는 과정을 정의한다.

### Documents

#### indicator_definition.md

- Feature 정의
- row_score 정의
- QCI 정의
- PUL 정의
- MMTL 정의

#### learning_state_modeling.md

- Feature Engineering
- 상태 모델링
- Dashboard 설계
- 모델 개선 방향
