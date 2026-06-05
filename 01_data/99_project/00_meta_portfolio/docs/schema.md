# Schema

본 프로젝트는 GPT와의 상호작용을 이벤트 단위로 기록한다.

아래 이미지는 현재 사용 중인 Airtable 데이터베이스의 일부 예시이다.

<img width="942" height="543" alt="data_sample" src="https://github.com/user-attachments/assets/978bf1eb-5eb6-4032-adc1-92026f36219f" />

---

## Input

질문에 대한 정보

| Field | Description |
|---------|---------|
| timestamp | 질문이 기록된 시점 |
| question_type | 질문 유형 (definition / comparison / design / critique) |
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
