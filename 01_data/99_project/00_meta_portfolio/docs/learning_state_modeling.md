# Question Analytics & Learning State Modeling

원본 로그를 수집한 이후에는, 질문 데이터를 분석 가능한 형태로 변환하고 상태 지표를 계산하는 과정이 필요했다.

이를 위해 Google Sheets 상에서 가상 테이블(Virtual Table)을 구성하고,

질문 → 특징 → 상태 → 대시보드로 이어지는 분석 레이어를 설계하였다.

---

## 데이터 모델링

분석을 위해 원본 데이터를 그대로 사용하는 대신, 질문의 특성을 수치화하는 Feature Engineering 과정을 거쳤다.

question_type, thinking_mode, clarification_depth 등을 기준으로 여러 Feature를 생성하였으며,

이를 바탕으로 row_score(질문 단위 점수)를 계산하였다.

```text
Question
  ↓
Feature Engineering
  ↓
row_score
```

<img width="756" height="569" alt="question_metrics" src="https://github.com/user-attachments/assets/bac10508-4f42-4b93-bf6a-1cb26e6931ca" />

---

## 상태 지표 설계

질문 단위 점수만으로는 학습 상태의 변화를 설명하기 어렵다고 판단하였다.

이를 보완하기 위해 두 개의 상태 지표를 설계하였다.

### 1. PUL (Persistent Understanding Level)

질문이 누적되면서 형성되는 현재 이해 상태를 나타낸다.

PUL은 질문별 점수를 기반으로 계산되며, 최근 질문에 더 높은 가중치를 부여하는 지수 이동 평균(Exponential Moving Average) 구조를 사용하였다.

```text
PUL(t) = α·PUL(t-1) + (1-α)·row_score(t)
```

### 2. MMTL (Meta Memory Transition Level)

현재 상태와 이전 상태의 차이를 의미한다.

```text
MMTL(t) = PUL(t) - PUL(t-1)
```

이를 통해 단순 점수뿐 아니라 상태 변화의 방향과 크기를 함께 관찰할 수 있도록 하였다.

<img width="653" height="720" alt="pul_mmtl_state" src="https://github.com/user-attachments/assets/7ce52f71-7764-40c5-99c8-755ee2d29c3c" />

---

## Dashboard

계산된 지표를 바탕으로 Google Sheets 대시보드를 구성하였다.

대시보드는 다음 세 가지 관점에 초점을 두었다.

- 현재 학습 상태 (PUL)
- 상태 변화량 (MMTL)
- 질문 구조 분포 (question_type, thinking_mode)

이를 통해 단순 로그 조회가 아닌, 질문 과정 자체를 하나의 데이터로 해석할 수 있는 환경을 만들었다.

<img width="1156" height="400" alt="dashboard" src="https://github.com/user-attachments/assets/b1c8766b-7a4a-4820-8ea7-7b5dff97a9e8" />

---

## 배운 점

처음에는 질문 로그를 단순히 저장하는 것에 집중했지만, 분석 가능한 형태로 변환하는 과정에서 데이터 모델링의 중요성을 체감할 수 있었다.

특히 동일한 원본 데이터라도 어떤 Feature를 정의하고 어떤 상태 지표를 설계하느냐에 따라 전혀 다른 해석이 가능하다는 점이 인상적이었다.

또한 SQL 없이도 스프레드시트의 ARRAYFORMULA, QUERY, SCAN 등의 함수를 활용하여 작은 규모의 분석 파이프라인을 구축할 수 있다는 점을 경험할 수 있었다.

---

## 개선할 점

<img width="308" height="477" alt="pul" src="https://github.com/user-attachments/assets/390cee83-debc-4c9f-9015-7cf1ff2a74fc" />

현재 PUL(Persistent Understanding Level)은 질문 단위 점수(row_score)를 기반으로 계산되는 지수 이동 평균 구조를 사용하고 있다.

다만 실제 학습 과정에서의 이해 상태를 얼마나 잘 반영하는지는 지속적인 검증이 필요하다.

특히 최근 질문에 부여하는 가중치와 상태 변화의 민감도는 현재 경험적으로 설정되어 있으며,

데이터가 더 축적되면 파라미터를 조정하여 지표의 설명력을 개선할 계획이다.
