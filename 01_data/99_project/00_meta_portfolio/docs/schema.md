# Schema

본 프로젝트는 GPT와의 상호작용을 이벤트 단위로 기록한다.

아래 이미지는 현재 사용 중인 데이터베이스의 일부 예시이다.

<img width="942" height="543" alt="question_log_sample" src="https://github.com/user-attachments/assets/b88b6f10-7344-4791-a301-e8d931d4ed9c" />

## Data Source

본 프로젝트의 원천 데이터는 Airtable에서 관리한다.

질문 로그는 프로젝트 진행 과정에서 지속적으로 추가될 수 있으며,
데이터 구조 또한 필요에 따라 수정될 수 있다.

따라서 현재 저장소에는 데이터셋 csv 원본을 포함하지 않으며,
본 문서는 현재 사용 중인 데이터 구조를 설명한다.

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

---

## History

### 2026-06-05

#### Added

- clarification_depth: 이해 과정에서 반복되는 질문과 사고 깊이를 기록하기 위해 추가하였다.
- thinking_mode: 질문이 생성된 사고 구조를 구분하기 위해 추가하였다.

#### Deferred

- decision.hold: 
기존 선택지는 move on / hold / apply로 구성되어 있었으나,
hold는 실제 데이터에서 거의 관측되지 않았다.

삭제도 고려했으나 아직 충분히 관측되지 않은 상태로 보고 보류하기로 하였다.

#### Backfill Decision

기존 데이터 전체 혹은 일부에 신규 컬럼을 적용하는 방안은 채택하지 않았다.

당시 기록은 해당 변수를 전제로 작성된 것이 아니므로,
사후 추정값을 입력할 경우 데이터 해석이 왜곡될 가능성이 있기 때문이다.

신규 컬럼은 추가 시점 이후 데이터부터 적용한다.
