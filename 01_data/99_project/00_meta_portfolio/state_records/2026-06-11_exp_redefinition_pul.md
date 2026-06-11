# PUL Redefinition

Date: 2026-06-11

Type: Experiment

---

## Context

기존 PUL은 아래와 같은 지수 가중 이동평균(EWMA) 기반으로 계산되었다.

```text
PUL(t) = α × PUL(t-1) + (1-α) × QCI(t)
```

이 방식은 QCI를 현재 상태에 대한 관측값으로 취급한다.

그러나 Question Log의 철학에서 QCI는 현재 상태라기보다
개별 질문이 발생시킨 인지적 사건(Event)에 가깝다.

즉,

```text
QCI = State
```

가 아니라

```text
QCI = Event
```

로 해석하는 편이 자연스럽다.

또한 EWMA 구조는 새로운 질문이 추가될 때마다 기존 상태가 희석되는 특성을 가지며,
이는 “질문은 누적되는 학습 자산”이라는 관점과 충돌할 수 있다.

---

## Structural Issue

EWMA 기반 PUL은 다음 문제를 가진다:

- 새로운 질문이 들어올 때 기존 상태가 희석됨
- 순서 기반 업데이트로 인해 상태가 경로에 종속됨
- “학습 = 누적”이라는 직관과 불일치하는 하락 구조 발생

---

## Empirical Observation (Current System Behavior)

현재 K 구조는 다음과 같이 정의되어 있다:

```text
K = Σ(QCI^1.5 × e^{-λ·age})
```

그러나 실제 데이터에서는 다음 현상이 관찰될 수 있다:

- K가 단조 증가하는 경우가 많음
- 경우에 따라 거의 선형 증가처럼 보임
- 비선형성(QCI^1.5, decay)이 시각적으로 약하게 나타남

이는 모델이 실패했다기보다:

> QCI 분포 및 decay 강도가 비선형성을 충분히 드러내지 못하는 상태

일 수 있다.

---

## New Interpretation

PUL은 질문 자체의 품질을 직접 평균내는 지표가 아니다.

질문을 통해 축적된 인지적 자산(Cognitive Asset)을 기반으로
현재 학습 상태를 관측하기 위한 지표로 정의한다.

이를 위해 중간 잠재 변수 K를 도입한다.

```text
QCI
↓
K (Accumulated Cognitive Energy)
↓
PUL (Observed Learning State)
```

---

## K Definition

K는 질문을 통해 축적된 인지적 에너지의 누적 상태로 정의한다.

초기 설계에서는 비선형 누적합을 사용한다.

```text
K = Σ(QCI^1.5)
```

### Rationale

- 선형 누적은 질문 수 중심 모델이 된다
- 제곱은 초기 몇 개 이벤트에 과도하게 지배된다
- 1.5승은 영향력과 안정성의 균형점이다

---

## Temporal Extension (Decay)

학습 상태는 시간에 따라 유지되지 않을 수 있으므로,
K는 시간 감쇠를 포함한 구조로 확장된다.

```text
K = Σ(QCI^1.5 × e^{-λ·age})
```

### Interpretation

- 오래된 질문: 영향 감소
- 최근 질문: 영향 증가
- K는 단순 누적이 아니라 “현재 활성화된 학습 상태”를 의미

---

## PUL Definition

K는 누적 상태이지만 관측 가능한 학습 지표로 직접 사용하기에는 스케일이 크고 비선형적이다.

따라서 PUL은 K를 관측 가능한 형태로 변환하는 스케일 함수로 정의한다.

```text
PUL = f(K)
```

현재는 로그 변환을 사용한다.

```text
PUL = ln(K + 1)
```

### Role Clarification

- K: latent state (hidden accumulation)
- PUL: observable projection (compressed view of state)

---

## Key Insight (Important Update)

현재 시스템에서 K는 종종 다음과 같은 형태로 관찰된다:

- 단조 증가
- 경우에 따라 거의 선형 증가처럼 보임

이는 K가 “비선형 모델”이라기보다
“누적 activity signal”처럼 동작하고 있음을 의미할 수 있다.

따라서 중요한 분석 대상은 K의 값 자체가 아니라:

- 증가율(ΔK)
- QCI 분포 변화
- decay 영향 강도

이다.

---

## Interpretation

기존 PUL

```text
QCI → 상태 추정
```

새로운 PUL

```text
QCI → 인지적 사건(Event)

K → 시간 감쇠된 누적 인지 에너지 (latent state)

PUL → 로그 스케일의 관측 가능한 학습 상태
```

---

## Open Questions

- QCI^1.5는 실제 데이터에서 충분한 비선형성을 제공하는가?
- decay(λ)는 구조적 파라미터인가 경험적 파라미터인가?
- K는 latent state로서 충분히 “비가시적 구조”를 유지하고 있는가,
  아니면 단순 activity counter로 수렴하고 있는가?
- PUL은 상태 변수로 유지되어야 하는가, 아니면 단순 시각화 지표인가?
