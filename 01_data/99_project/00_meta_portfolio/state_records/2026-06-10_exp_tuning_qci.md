# QCI Tuning

Question ID: 48
---

## Context

QCI (Question Complexity Index)는 질문의 복잡도와 사고 구조의 깊이를 수치화하기 위한 지표이다.

현재 단계에서는 데이터 기반 학습이 아닌 초기 가중치 설계 단계이며,
질문의 유형과 사고 방식의 조합을 통해 복잡도를 근사적으로 계산한다.

---

## Definition

QCI는 다음 요소들의 가중합으로 정의된다.

### 1. Clarification Depth

### 2. Engagement Level Weight
- copy: 1
- select: 2
- reframe: 4
- independent:5

### 3. Question Type Weight
- definition: 1
- comparison: 2
- design: 3
- critique: 5

### 4. Thinking Mode Weight
- linear: 1
- iterative: 2
- recursive: 4
- fragmented: 5

### 5. Decision Weight
- hold: 0
- move_on: 2
- apply: 5

---

## Formula

```text
QCI =
+ clarification_depth
+ engagement_level_weight
+ question_type_weight
+ thinking_mode_weight
+ decision_weight
```

---

## Implementation (Sheet Logic)

```text
=ARRAYFORMULA(
  IF(question_metrics!B2:B="","",
    + question_metrics!M2:M
    + SWITCH(question_metrics!H2:H,
        "copy", 1,
        "select", 2,
        "reframe", 4,
        "independent", 5,
        0
      )
    + SWITCH(question_metrics!D2:D,
        "definition", 1,
        "comparison", 2,
        "design", 3,
        "critique", 5,
        0
      )
    + SWITCH(question_metrics!N2:N,
        "linear", 1,
        "iterative", 2,
        "recursive", 4,
        "fragmented", 5,
        0
      )
    + SWITCH(question_log!M2:M,
        "hold", 0,
        "move_on", 2,
        "apply", 5,
        0
      )
  )
)
```

---

## Note

현재 QCI는 절대적인 평가 지표가 아니라 상대적 complexity proxy이다.
데이터가 누적되면 weight 재조정 및 normalization이 필요하다.
PUL과 결합하여 “input complexity → understanding transition” 구조를 분석하는 데 사용한다.
