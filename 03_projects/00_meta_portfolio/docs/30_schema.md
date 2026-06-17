# Schema

Date: 2026-06-05

본 프로젝트는 GPT와의 상호작용을 이벤트 단위로 기록한다.

아래 이미지는 현재 사용 중인 데이터베이스의 일부 예시이다.

<img width="942" height="543" alt="question_log_sample" src="https://github.com/user-attachments/assets/b88b6f10-7344-4791-a301-e8d931d4ed9c" />

---

## Input

질문에 대한 정보

| Field | Description |
|---------|---------|
| timestamp | 질문이 기록된 시점 |
| question_type | 질문 유형 (definition / comparison / design / critique) |
| topic | 질문이 주로 다루는 학습 영역 (portfolio_architecture / analytics_thinking / hard_skills / soft_skills) |
| question_text | 실제 질문 내용 |

---

## Response

GPT 응답에 대한 정보

| Field | Description |
|---------|---------|
| gpt_response_summary | GPT 응답 요약 |

---

## Behavior

이해 과정에서 나타난 행동 신호

| Field | Description |
|---------|---------|
| engagement_level | GPT 응답을 어떻게 활용했는지 나타내는 행동 수준 |
| clarification_depth | 이해 과정에서 발생한 추가 질문 및 사고 반복의 깊이 |
| thinking_mode | 질문을 처리하는 사고 구조 패턴 |

### engagement_level

| Value | Description |
|---------|---------|
| copy | 응답을 그대로 수용 |
| select | 일부 내용만 선택적으로 수용 |
| reframe | 자신의 언어로 재구성 |
| independent | 독립적인 판단 또는 해석 수행 |

### clarification_depth

이해 과정에서 발생한 반복적 질문 및 사고 재구성의 정도를 0~4로 나타낸다.

- 0 : 즉시 이해
- 값 증가 : 반복적인 질문 또는 사고 재구성이 발생

본 값은 사고 과정의 난이도 또는 마찰 정도를 간접적으로 나타내는 신호로 해석한다.

### thinking_mode

| Value | Description |
|---------|---------|
| linear | 단일 흐름으로 이해 진행 |
| iterative | 반복적인 수정 및 검토를 통해 이해 진행 |
| recursive | 기존 개념을 재정의하거나 상위 수준에서 재구성 |
| fragmented | 여러 방향으로 분산된 사고 진행 |

---

## State Change

개념 상태 변화 정보

| Field | Description |
|---------|---------|
| concept_state_before | 질문 이전 상태 |
| concept_state_after | 질문 이후 상태 |

본 프로젝트에서 상태 변화는 객관적 측정값이 아닌 기록 시점의 주관적 판단을 포함한다.

---

## Decision

질문 이후의 행동 결정

| Field | Description |
|---------|---------|
| decision | move on / apply |
| reasoning | 해당 결정을 내린 이유 |

### decision

| Value | Description |
|---------|---------|
| move on | 추가 적용 없이 다음 탐색으로 이동 |
| apply | 실제 프로젝트 또는 사고 과정에 적용 |

의사결정은 특정 시점의 행동 선택을 의미하며, 개념 이해 수준과 반드시 일치하지 않는다.

---

## History

---

### 2026-06-02

#### Note

질문–응답–행동–의사결정 흐름을 재현하기 위한 최소 이벤트 구조로 설계하였다.

---

### 2026-06-05

hold는 데이터 내에서 거의 사용되지 않는 패턴으로 확인되었다.
질문 하나에 대해 즉각적인 결정보다는, 이해가 충분히 정리될 때까지 반복적으로 질문을 확장한 뒤 최종 요약으로 수렴하는 흐름이 주를 이루고 있다.
이 구조에서는 hold 상태가 발생할 여지가 상대적으로 낮다.

#### Added

- clarification_depth: 이해 과정의 반복 질문 및 사고 깊이 기록
- thinking_mode: 질문 생성 시 사고 구조 구분
  
#### Deferred

- decision.hold: move on / hold / apply 중 hold는 데이터에서 거의 관측되지 않음  
  삭제도 검토했으나, 아직 충분히 관측되지 않은 상태로 판단하여 유지 보류

#### Backfill Decision

- 기존 데이터 전체 혹은 일부에 신규 컬럼은 적용하지 않음  
- 해당 시점 데이터는 신규 변수를 전제로 작성되지 않아 사후 추정 시 왜곡 가능성이 있음
- 신규 컬럼은 추가 시점 이후 데이터부터 적용

---

### 2026-06-08

질문 로그를 검토한 결과, question_type만으로는 질문이 다루는 학습 대상의 성격을 충분히 구분하기 어려운 경우가 확인되었다.

동일한 definition 또는 design 질문이라도 포트폴리오 설계, 분석적 사고, 기술 학습 등 서로 다른 맥락을 가질 수 있었으며,
학습 영역별 질문 패턴을 관찰하기 위한 추가 축이 필요하다고 판단하였다.

이에 따라 질문의 주요 학습 영역을 기록하는 topic 필드를 추가하였다.

#### Added

- topic: 질문이 주로 다루는 학습 영역 분류
  - portfolio_architecture: 포트폴리오와 학습 시스템 자체를 이해하고 설계하는 질문
  - analytics_thinking: 문제를 구조화하고 가설을 검증하는 분석적 사고에 관한 질문
  - hard_skills: 분석 기술과 도구 활용에 관한 질문
  - soft_skills: 분석 결과를 전달하고 활용하는 역량에 관한 질문

#### Rationale

- question_type은 질문의 형태(How)를 설명
- topic은 질문의 대상(What)을 설명
- 두 변수는 서로 독립적으로 조합 가능
- 학습 영역별 질문 패턴 및 성장 경향을 관찰하기 위한 최소 분류 체계로 판단

#### Backfill Decision

- 기존 데이터 전체에 topic을 소급 적용함
- topic은 질문의 주요 대상에 대한 분류로 해석 여지가 상대적으로 적고, 사후 분류에 따른 왜곡 위험이 낮다고 판단
- 분류 기준은 추가 시점 이후 데이터와 동일하게 적용
