# Analysis Framework

Date: 2026-06-06

본 프로젝트는 포트폴리오 이해 형성 과정을 다음 네 단계로 분석한다.

## Stage 1. Question Evolution

질문 유형이 어떻게 변화하는지 분석한다.

- question_type 변화
- 질문 패턴 변화

## Stage 2. Concept Transition

질문 전후 개념 상태 변화를 분석한다.

```text
concept_state_before
→
concept_state_after
```

- state transition 분석
- transition matrix 생성

## Stage 3. Decision Formation

이해가 행동으로 연결되는 과정을 분석한다.

- decision 분포 분석
- apply 발생 조건 탐색

## Stage 4. PUL Modeling

행동 로그를 기반으로 PUL(Portfolio Understanding Level)을 추정한다.

```text
PUL = f(
    engagement_level,
    clarification_depth,
    concept_state_change,
    decision,
    reasoning
)
```
