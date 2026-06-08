# Hypothesis

본 문서는 현재 프로젝트에서 탐색하고자 하는 가설을 기록한다.

가설은 고정된 결론이 아니며,
데이터가 누적됨에 따라 수정, 추가 또는 제거될 수 있다.

---

## H1

Engagement Level이 높을수록 상태 전이 발생 가능성이 높다.

### Background

GPT 응답을 단순 수용하는 경우보다,
재구성하거나 독립적으로 해석하는 경우에
개념 상태 변화가 더 자주 발생할 것으로 예상한다.

### Measurement

state_transition = (concept_state_before != concept_state_after)

engagement_level:
copy=0 / select=1 / reframe=2 / independent=3

---

## H2

question_topic에 따라 clarification_depth와 Apply 결정 간의 관계 강도가 달라진다.

### Background

실제 적용은 단순 이해보다 더 많은 검토와 질문 과정을 요구할 수 있다.
그러나 이 관계는 질문의 성격(question_topic)에 따라 다르게 나타날 수 있다.

따라서 clarification_depth가 높을수록 Apply가 증가하는 경향이 존재하더라도
그 강도는 topic별로 차이를 가질 것으로 예상한다.

### Measurement

decision = apply / move_on

clarification_depth = 0~4

group_by = question_topic
→ topic별로 P(apply | clarification_depth) 비교

---

## H3

question_topic에 따라 thinking_mode와 개념 변화(state change) 간의 관계가 달라진다.

### Background

개념 이해는 단순 누적이 아니라 재해석과 재구성을 통해 변화하며,
이 재구성 방식은 thinking_mode로 관측될 수 있다.

그러나 이러한 재구성 패턴은 질문의 영역(question_topic)에 따라 구조적으로 다르게 나타날 수 있다.

따라서 thinking_mode가 state change와 연결되는 방식은 topic에 따라 달라질 것으로 예상한다.

### Measurement

state_change_rate by thinking_mode

thinking_mode:
linear / iterative / recursive / fragmented

group_by = question_topic
→ topic별 thinking_mode 분포 및 state_change rate 비교
