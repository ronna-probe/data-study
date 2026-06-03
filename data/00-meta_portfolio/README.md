# 🧠 Data Analyst Portfolio Learning Experiment  
## (Modeling how the concept of a portfolio is formed through behavioral data logging with GPT)

---

## 1. 문제 정의

'데이터 분석 포트폴리오'가 무엇인지 명확히 이해하지 못한 상태에서 시작했다.
포트폴리오를 직접 만들어가는 과정 자체를 데이터로 기록하고 분석해보기로 했다.

일반적인 데이터 분석 포트폴리오가 문제 해결 결과를 보여준다면,
본 프로젝트는 포트폴리오가 형성되는 과정 자체를 분석 대상으로 삼는다.

질문, 의사결정, 상태 변화와 같은 과정을 기록하고 구조화함으로써,
개념이 형성되는 과정을 데이터로 관측하고자 한다.

이러한 의미에서 본 프로젝트는 '포트폴리오에 대한 포트폴리오',
즉 하나의 메타 포트폴리오(meta-portfolio)이다.

따라서 프로젝트명은 `00_meta_portfolio`로 정의하였다.

---

## 2. 분석 설계

본 프로젝트는 포트폴리오 개념을 중심으로  
이해 및 의사결정 과정을 **이벤트 기반 데이터 구조(event-based logging)**로 변환하여 분석한다.

### 2.1 데이터 수집 (Airtable Logging)

본 프로젝트의 데이터는 GPT와의 상호작용 과정에서 생성된다.

각 상호작용은 하나의 이벤트 단위로 기록되며,
이벤트는 분석의 최소 관측 단위로 사용된다.

각 이벤트는 다음 요소를 포함한다:
- 질문 (Prompt)
- GPT 응답 요약
- 의사결정 (Decision)
- 상태 변화 (State Transition)

### 2.2 데이터 구조 (Schema)

각 로그는 하나의 의사결정과 상태 변화가 결합된 단일 이벤트로 정의된다.

- `timestamp`
- `question`
- `gpt_response_summary`
- `decision` (move on / hold / apply)
- `concept_state_before`
- `concept_state_after`

### 2.3 핵심 지표 정의

📌 Portfolio Understanding Level (PUL)

PUL은 직접 측정되는 값이 아니라,  
행동 로그에서 관측되는 여러 신호를 기반으로 추정되는 latent indicator이다.

PUL은 다음 요소들의 결합으로 해석된다:

- 질문 구조 변화 (definition → critique)
- GPT 의존도 변화 (copy → independent)

---

## 3. 가설

본 프로젝트에서 탐색하고자 하는 가설은 다음과 같다.

### H1
Engagement Level이 높을수록 상태 전이가 발생할 가능성이 높다.

### H2
Apply 결정은 다른 의사결정보다 상태 변화를 더 자주 유도한다.

### H3
포트폴리오 이해 과정은 선형적으로 진행되지 않으며,
특정 상태에서 반복적인 정체 구간(Hold Loop)이 발생한다.

### H4
Move On 또는 Apply는 개념 이해의 완료를 의미하지 않는다.
