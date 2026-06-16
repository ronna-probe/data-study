# Current State

Date: 2026-06-10

이 문서는 프로젝트의 현재 시점에서의 학습/사고 상태를 요약한 인터페이스이다.

State Records에 축적된 로그를 기반으로 계산된 결과를 단일 뷰로 정리한다.

---

## Dashboard Reference

Live Dashboard:
[https://docs.google.com/spreadsheets/xxxxx](https://docs.google.com/spreadsheets/d/1Ig2BzYYPqsmgUoCn_68OR9zxtaiKpN_VLAsUEQDlVXo/edit?usp=sharing)

---

## 1. Core Metrics

- PUL (Portfolio Understanding Level): {{latest_pul}}
- MMTL (Mental Model Transition Level): {{latest_mmtl}}

---

## 2. Trend Summary

- PUL: {{trend_pul}} (up / stable / down)
- MMTL: {{trend_mmtl}} (up / stable / down)

---

## 3. Key Signal

- 최근 변화 요약:
  - {{recent_change_1}}
  - {{recent_change_2}}

- 해석:
  - 현재 시스템은 {{current_state_interpretation}}

---

## 4. Dashboard Reference

본 상태는 Google Sheets Dashboard의 최신 값을 기준으로 한다.

- Source: Dashboard Sheet (Live View)
- Update Rule: State Records 기반 일 단위 갱신

---

## 5. Notes

- 이 문서는 기록용이 아니라 “현재 상태를 읽기 위한 인터페이스”이다.
- 과거 데이터는 State Records에서 확인한다.
