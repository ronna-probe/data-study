# Schema - State Record

Date: 2026-06-18

<img width="366" height="593" alt="state_record_repo" src="https://github.com/user-attachments/assets/2fb74f04-a339-4a29-a98f-23a5049d9281" />

프로젝트 진행 과정에서 발생한 주요 상태 변화를 GitHub에 원본 로그로 기록한다.

<img width="940" height="384" alt="state_record_table" src="https://github.com/user-attachments/assets/c9dd3ced-1e5a-49a0-ba68-d5bae2e91771" />

본 테이블은 GitHub에 저장된 상태 기록을 구조화하여 분석 가능한 형태로 변환한다.

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

## Question IDs

해당 상태 변화를 유발하거나 직접적으로 연결된 Question Log의 ID 목록이다.

---

## Anchor

해당 상태를 가장 잘 압축하여 표현하는 핵심 문장이다.  
질문, 응답, 메모, 통찰 등 출처와 관계없이 사용할 수 있다.

예시:

"포트폴리오를 만들어 가는 과정 자체를 데이터분석 포트폴리오로 만들어볼 수 있을까."

"무한한 세상을 유한으로 제한해서 생각하는거구나."

---

## Recording Structure

| Value | Description |
|---------|---------|
| Context | 상태 |
| Shift | 변화 |
| Implication | 영향 |
| Notes | 메모 |
