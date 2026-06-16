# PUL Tuning

Question ID: 45

---

## Context

PUL은 누적 이해도를 표현하기 위한 지표이다.

현재 데이터 규모가 작고 적절한 decay 계수를 판단할 근거가 부족하여, 초기 실험값으로 아래 식을 적용하였다.

```text
PUL(t) = 0.9 × PUL(t-1) + 0.1 × QCI(t)
```

---

## Note

현재 계수(0.9 / 0.1)는 이론적 근거보다는 초기 가정에 가깝다.

데이터가 누적되면 실제 체감과 비교하여 조정할 예정이다.

---

## Implementation (Sheet Logic)

```text
=LET(
  sorted,
    SORT(FILTER({B2:B,D2:D}, B2:B<>""), 1, TRUE),

  qci, INDEX(sorted,,2),

  SCAN(
    INDEX(qci,1),
    qci,
    LAMBDA(prev, x,
      ROUND(0.9*prev + 0.1*x, 2)
    )
  )
)
```
