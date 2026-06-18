# Schema - State Record

Date: 2026-06-18

<img width="366" height="593" alt="state_record_repo" src="https://github.com/user-attachments/assets/2fb74f04-a339-4a29-a98f-23a5049d9281" />

<img width="940" height="384" alt="state_record_table" src="https://github.com/user-attachments/assets/c9dd3ced-1e5a-49a0-ba68-d5bae2e91771" />

본 테이블은 프로젝트 진행 과정에서 발생한 상태 변화(State Change)를 기록한다.

Question Log가 변화의 원인을 기록한다면,

State는 질문과 의사결정의 결과로 나타난  
개념, 관점, 모델 구조의 변화를 기록한다.

---

## Fields

| Field | Description |
|---------|---------|
| date | 상태 변화가 기록된 날짜 |
| type | 변화 유형 (exp / rfl / def / evo) |
| label | 상태 식별자 |
| title | 상태 변화 제목 |
| subtitle | 상태 변화 부제 |
| question_ids | 관련 Question Log |
| anchor | 상태를 대표하는 핵심 문장 |
| context | 변화 이전 상태 |
| shift | 발생한 변화 |
| implication | 변화의 영향 |
| notes | 보충 메모 |

---

## Type

| Value | Description |
|---------|---------|
| exp | 지표 및 모델 실험 |
| rfl | 프로젝트 내부 객체에 대한 해석 변화 |
| def | 핵심 개념의 정의 변화 |
| evo | 프로젝트 관점 및 문제 구조의 변화 |

---

## Context

변화가 발생하기 직전 상태를 1~3개의 핵심 사실로 요약한다.

---

## Shift

무엇이 어떻게 달라졌는지를 이전 상태와 비교하여 기록한다.

---

## Implication

해당 변화가 이후 모델, 분석 관점 또는 기록 구조에 미치는 영향을 기록한다.

---

## Notes

핵심 변화에 포함되지 않은 보충 아이디어, 예외, 후속 질문을 기록한다.

---

## Anchor

해당 상태를 가장 잘 압축하여 표현하는 핵심 문장이다.  
질문, 응답, 메모, 통찰 등 출처와 관계없이 사용할 수 있다.

예시:

"포트폴리오를 만들어 가는 과정 자체를 데이터분석 포트폴리오로 만들어볼 수 있을까."

"무한한 세상을 유한으로 제한해서 생각하는거구나."
