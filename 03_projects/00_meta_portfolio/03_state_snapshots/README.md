# 상태 정리

이 폴더는 프로젝트의 주요 해석 결과와 마일스톤을 저장한다.

State Records가 변화 과정을 기록하는 로그라면,  
State Snapshots는 여러 기록을 종합하여 도출한 현재 상태, 버전, 분석 결과를 정리하는 공간이다.

---

## Scope

- Current State
- Version Snapshot (v1, v2, ...)
- 프로젝트 상태 요약

---

## Rule

- 변화 과정은 State Records에 기록한다.
- `State Snapshot`은 여러 기록을 종합하여 도출한 해석 결과를 저장한다.
- 하나의 `State Snapshot`은 여러 State Record를 참조할 수 있다.

---

## Future Versions

v1은 포트폴리오를 이해하기 위한 단계였다.  
v2는 포트폴리오를 정의하는 과정을 관찰하기 위한 단계이다.

그 이후의 변화가 존재한다면,  
그것은 새로운 버전이라기보다  
이미 정의된 구조 안에서 발생하는 또 하나의 상태 전이일 수 있다.
