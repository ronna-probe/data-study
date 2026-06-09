# PUL & MMTL Definition

---

## 1. Overview

본 프로젝트는 포트폴리오 이해 과정을 상태(state)와 변화(event)의 관계로 모델링한다.

- **PUL (Portfolio Understanding Level)**: 현재 시점에서 관측 가능한 이해 상태 (latent state estimate)
- **MMTL (Mental Model Transition Level)**: 특정 질문이 상태에 유발한 변화량 (state transition signal)

PUL과 MMTL은 직접 관측되는 값이 아니라, Question Log를 기반으로 추정되는 상태 변수이다.

본 프로젝트는 다음 질문을 탐색한다.

- 이해 상태는 질문을 통해 어떻게 업데이트되는가?
- 어떤 질문이 상태 변화를 크게 유발하는가?
- 상태 변화는 장기적인 이해 구조에 어떻게 누적되는가?

---

## 2. Conceptual Model

본 모델은 다음과 같이 정의된다.

- PUL은 현재까지의 질문 이력 기반으로 추정되는 상태이다.
- MMTL은 새로운 질문이 기존 상태를 어떻게 변화시키는지를 나타낸다.

전체 구조는 다음과 같다.

Question (event) + Previous PUL (state)
↓
MMTL (transition function)
↓
Updated PUL (new state)

즉, PUL은 고정값이 아니라 지속적으로 업데이트되는 상태 변수이다.

---

## 3. Portfolio Understanding Level (PUL)

PUL은 다음 feature들의 함수로 정의된다.

- F1: Definition Understanding
- F2: Differentiation Ability
- F3: Application Ability
- F4: Construction Ability

PUL은 다음과 같이 표현된다.

`PUL(t) = PUL(t-1) + (F1 + F2 + F3 + F4)`

각 feature는 Question Log에서 추출된 신호를 기반으로 업데이트된다.

- 정의/이해 → F1 증가
- 비교/구조 → F2 증가
- 적용/생성 → F3 증가
- 평가/개선 → F4 증가

---

## 4. Mental Model Transition Level (MMTL)

MMTL은 단일 질문이 PUL 상태를 얼마나 변화시키는지를 나타낸다.

MMTL은 다음과 같이 정의된다.

`MMTL(t) = ΔF1 + ΔF2 + ΔF3 + ΔF4`

이는 `MMTL(t) = PUL(t) - PUL(t-1)`과 동일하게 해석된다.

MMTL은 질문 단독이 아니라, 질문이 현재 PUL 상태에 적용된 결과로 정의된다.

---

## 5. Observable Signals

PUL과 MMTL은 Question Log에서 관측 가능한 신호를 기반으로 추정된다.

- question_type
- question_topic
- thinking_mode
- reasoning pattern
- decision trace
- implicit concept state

---

## 6. Example

질문:

이 프로젝트는 포트폴리오를 만드는 것인가, 연구하는 것인가?

이전 상태:

F3 중심 상태 (application 중심 이해)

질문 이후 상태:

F3 + F4 구조로 확장

해석:

- MMTL: 구조적 전환 발생
- PUL: construction dimension 증가
- 상태 업데이트 발생

---

## 7. Notes

본 모델은 고정된 평가 체계가 아니라 state-transition 기반 분석 구조이다.

PUL은 상태 변수이며, MMTL은 상태 변화 함수이다.

모든 값은 Question Log 기반으로 추정되며, 데이터 축적에 따라 함수 형태는 조정될 수 있다.
