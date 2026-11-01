-- =====================================================
-- User Behavior Analysis
-- User DM Validation
-- =====================================================

-- 1. 전체 행 수와 고유 사용자 수 확인
SELECT
  COUNT(*) AS total_rows,
  COUNT(DISTINCT user_pseudo_id) AS unique_users,
  COUNTIF(user_pseudo_id IS NULL) AS null_users
FROM `public-data-513413.ga4_ecommerce.user_dm`;


-- 2. 사용자 ID 중복 확인
SELECT
  user_pseudo_id,
  COUNT(*) AS row_count
FROM `public-data-513413.ga4_ecommerce.user_dm`
GROUP BY user_pseudo_id
HAVING COUNT(*) > 1;


-- 3. 구매 여부와 구매 횟수 일치 확인
SELECT
  COUNTIF(
    (purchase_count > 0 AND purchase_flag != 1)
    OR
    (purchase_count = 0 AND purchase_flag != 0)
  ) AS flag_mismatch_count
FROM `public-data-513413.ga4_ecommerce.user_dm`;


-- 4. 이벤트 집계 값 확인
SELECT
  COUNTIF(total_events < 0) AS negative_event_count,
  COUNTIF(view_item_count > total_events) AS invalid_view_count,
  COUNTIF(add_to_cart_count > total_events) AS invalid_cart_count,
  COUNTIF(purchase_count > total_events) AS invalid_purchase_count
FROM `public-data-513413.ga4_ecommerce.user_dm`;
