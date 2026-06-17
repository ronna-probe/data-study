# 상태 정리

이 폴더는 프로젝트의 주요 해석 결과와 마일스톤을 저장한다.

State Records가 변화 과정을 기록하는 로그라면,  
State Snapshots는 여러 기록을 종합하여 도출한 현재 상태, 버전, 분석 결과를 정리하는 공간이다.

---

## Scope

- Current State
- Version Snapshot (v1, v2, ...)
- 주요 분석 결과
- 프로젝트 상태 요약
- 마일스톤 기록

---

## Rule

- 변화 과정은 State Records에 기록한다.
- State Snapshot은 변화 과정을 직접 기록하지 않는다.
- State Snapshot은 여러 기록을 종합하여 도출한 해석 결과를 저장한다.
- 하나의 State Snapshot은 여러 State Record를 참조할 수 있다.

---

## Relationship

```text
Question Log
    ↓
State Records
    ↓
State Snapshots
```

Outputs는 프로젝트가 현재 어디에 도달했는지를 설명하는 계층이다.
