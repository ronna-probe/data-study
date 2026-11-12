
/**
 * BigQuery API를 사용하여 SQL 쿼리를 실행하고
 * 조회 결과를 반환한다.
 */
 
function runBigQuery(query, projectConfig) {
  const request = {
    query: query,
    useLegacySql: false,
    location: BIGQUERY_CONFIG.LOCATION
  };

  const result = BigQuery.Jobs.query(
    request,
    projectConfig.PROJECT_ID
  );

  const headers = result.schema.fields.map(field => field.name);

  const values = (result.rows || []).map(row =>
    row.f.map(cell => cell.v)
  );

  return {
    headers: headers,
    values: values
  };
}
