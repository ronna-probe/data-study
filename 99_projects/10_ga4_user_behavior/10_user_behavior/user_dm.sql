
-- =====================================================
-- User Behavior Analysis
-- User Data Mart
--
-- 목적: 사용자별 이벤트 행동 데이터 집계
-- Grain: 사용자 1명당 1행
-- 데이터 기간: 2020-11-01 ~ 2021-01-31
-- =====================================================

CREATE OR REPLACE TABLE
  `public-data-513413.ga4_ecommerce.user_dm` AS

WITH base AS (
  -- 1. 원천 이벤트 데이터 조회
  SELECT
    user_pseudo_id,
    event_name,
    event_date
  FROM
    `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_*`
  WHERE
    _TABLE_SUFFIX BETWEEN '20201101' AND '20210131'
    AND user_pseudo_id IS NOT NULL
),

user_aggregation AS (
  -- 2. 사용자별 이벤트 집계
  SELECT
    user_pseudo_id,

    COUNT(*) AS total_events,

    COUNTIF(event_name = 'view_item')
      AS view_item_count,

    COUNTIF(event_name = 'add_to_cart')
      AS add_to_cart_count,

    COUNTIF(event_name = 'purchase')
      AS purchase_count,

    MIN(PARSE_DATE('%Y%m%d', event_date))
      AS first_event_date

  FROM base
  GROUP BY user_pseudo_id
)

-- 3. 최종 사용자 데이터 마트 생성
SELECT
  user_pseudo_id,
  total_events,
  view_item_count,
  add_to_cart_count,
  purchase_count,

  CASE
    WHEN purchase_count > 0 THEN 1
    ELSE 0
  END AS purchase_flag,

  first_event_date

FROM user_aggregation;
