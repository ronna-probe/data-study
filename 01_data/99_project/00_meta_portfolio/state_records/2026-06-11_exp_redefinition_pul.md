# PUL Redefinition

Date: 2026-06-11

Type: Experiment

---

## Context

기존 PUL은 아래와 같은 지수 가중 이동평균(EWMA) 기반으로 계산되었다.

```text
PUL(t) = 0.9 × PUL(t-1) + 0.1 × QCI(t)
```

이 방식은 QCI를 현재 상태에 대한 관측값으로 취급한다.

그러나 Question Log의 철학에서 QCI는 현재 상태를 측정하는 값이라기보다,
개별 질문이 발생시킨 인지적 충격(Cognitive Impact)에 가깝다.

즉,

```text
QCI = State
```

가 아니라

```text
QCI = Event
```

로 해석하는 편이 자연스럽다.

또한 기존 방식은 새로운 질문이 추가될 때마다 PUL이 하락할 수 있다는 구조적 특성을 가진다.

이는 "질문은 성장 사건"이라는 해석과 충돌할 수 있다.

---

## New Interpretation

PUL은 질문 자체의 품질을 직접 평균내는 지표가 아니다.

질문을 통해 축적된 인지적 자산(Cognitive Asset)을 기반으로
현재 학습 상태를 관측하기 위한 지표로 정의한다.

이를 위해 중간 잠재 변수(Latent Variable)인 K를 도입하였다.

```text
QCI
↓
K (Accumulated Cognitive Energy)
↓
PUL
```

---

## K Definition

K는 질문을 통해 축적된 인지적 에너지의 총량으로 정의한다.

단순 누적합 대신 제곱합을 사용한다.

```text
K = Σ(QCI²)
```

이 정의는

- 질문 수보다 질문의 영향력을 강조한다.
- 높은 QCI 질문이 더 큰 기여를 갖는다.
- "질문 10개"보다 "사고를 전환시킨 질문 1개"를 더 크게 반영한다.

예시

```text
QCI = 2 → Contribution = 4
QCI = 5 → Contribution = 25
QCI = 8 → Contribution = 64
QCI = 10 → Contribution = 100
```

---

## PUL Definition

K는 지속적으로 증가하는 누적값이다.

그러나 학습 상태를 표현할 때는 성장 체감(Diminishing Returns)을 고려할 필요가 있다.

따라서 PUL은 K에 로그 변환을 적용하여 계산한다.

```text
PUL = ln(K + 1)
```

특징

- 질문이 누적될수록 성장률은 점차 감소한다.
- 완전한 이해(100%)를 가정하지 않는다.
- 학습은 끝없이 확장될 수 있지만 성장 속도는 둔화된다.
- 절대적인 이해도보다 현재까지 축적된 인지적 자산의 규모를 표현한다.

---

## Interpretation

기존 PUL

```text
QCI → 상태 추정
```

새로운 PUL

```text
QCI → 인지적 사건(Event)

K → 누적 인지 에너지

PUL → 누적 인지 에너지의 로그 스케일 표현
```

즉,

PUL은 "얼마나 이해했는가"를 측정하기보다

"얼마나 많은 인지적 전환이 축적되었는가"

를 관측하는 지표로 재정의된다.

---

## Implementation (K)

```text
=ARRAYFORMULA(
 IF(
  question_log!B2:B="",
  "",
  SCAN(
   0,
   D2:D,
   LAMBDA(acc, qci,
    acc + IF(qci="",0,qci^2)
   )
  )
 )
)
```

---

## Implementation (PUL)

```text
=ARRAYFORMULA(
 IF(
  question_log!B2:B="",
  "",
  ROUND(
   LN(E2:E+1),
   2
  )
 )
)
```

---

## Open Questions

- QCI²가 적절한 영향력 함수인가?
- 제곱 대신 1.5승 또는 다른 함수가 더 적절한가?
- 로그 변환이 실제 체감 성장 곡선과 일치하는가?
- 특정 시점 이후 decay(망각)를 반영할 필요가 있는가?
- K를 단순 누적이 아닌 주제별로 분리해야 하는가?
