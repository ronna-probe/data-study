# Outputs

이 폴더는 프로젝트의 분석 결과를 저장하는 공간이 아니라,
현재 시점에서의 학습/사고 상태를 해석하기 위한 인터페이스 레이어이다.

State Records가 시간에 따른 변화 로그라면,
Outputs는 그 변화를 기반으로 계산된 현재 상태를 표현한다.

---

## Scope

- 현재 상태 요약 (PUL / QCI / MMTL)
- 분석 결과 리포트
- 대시보드 스냅샷 (현재 기준 상태)
- 지표 계산 결과

---

## Rule

- State Records의 “과정”은 포함하지 않는다
- Outputs는 항상 “현재 상태 기준 결과”만 가진다
- 필요 시 과거 snapshot은 보조적으로만 저장한다

---

## Live State Definition

Outputs의 핵심은 “현재 상태(Current State)”이다.

- State Records를 기반으로 계산된 최신 값이 기준이 된다
- 대시보드는 이 Current State를 시각적으로 표현하는 인터페이스이다
- Outputs는 결과 저장소가 아니라 상태 조회 계층이다
