function buildUserQuery(projectConfig, startDate, endDate) {
  const start = Utilities.formatDate(
    startDate,
    APP_CONFIG.TIMEZONE,
    'yyyy-MM-dd'
  );

  const end = Utilities.formatDate(
    endDate,
    APP_CONFIG.TIMEZONE,
    'yyyy-MM-dd'
  );

  return `
    SELECT
      COUNT(*) AS total_users,

      COALESCE(SUM(view_item_count), 0)
        AS total_view_item,

      COALESCE(SUM(add_to_cart_count), 0)
        AS total_add_to_cart,

      COALESCE(SUM(purchase_count), 0)
        AS total_purchase,

      COUNTIF(SAFE_CAST(purchase_flag AS INT64) = 1)
        AS purchase_users,

      COUNTIF(SAFE_CAST(purchase_flag AS INT64) = 0)
        AS non_purchase_users,

      COUNTIF(view_item_count > 0) AS view_users,

      COUNTIF(add_to_cart_count > 0) AS cart_users

    FROM \`${projectConfig.PROJECT_ID}.${projectConfig.DATASET}.${projectConfig.TABLE}\`

    WHERE first_event_date BETWEEN '${start}' AND '${end}'
  `;
}


function build_XXX_Query(projectConfig) {
  return `
    SELECT

    FROM \`${projectConfig.PROJECT_ID}.${projectConfig.DATASET}.${projectConfig.TABLE}\`
  `;
}
