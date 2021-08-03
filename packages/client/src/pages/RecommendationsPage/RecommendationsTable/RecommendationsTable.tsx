/*
 * © 2021 Thoughtworks, Inc.
 */

import { FunctionComponent, ReactElement } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Container } from '@material-ui/core'
import { RecommendationResult } from '@cloud-carbon-footprint/common'

const columns: GridColDef[] = [
  { field: 'cloudProvider', headerName: 'Cloud Provider', width: 150 },
  {
    field: 'accountName',
    headerName: 'Account Name',
    flex: 1,
  },
  {
    field: 'region',
    headerName: 'Region',
    flex: 1,
  },
  {
    field: 'recommendationType',
    headerName: 'Recommendation Type',
    flex: 1,
  },
  {
    field: 'costSavings',
    headerName: 'Potential Cost Savings',
    type: 'number',
    flex: 1,
  },
  {
    field: 'co2eSavings',
    headerName: 'Potential Carbon Savings',
    type: 'number',
    flex: 1,
  },
]

type RecommendationsTableProps = {
  recommendations?: RecommendationResult[]
}

const RecommendationsTable: FunctionComponent<RecommendationsTableProps> = ({
  recommendations,
}): ReactElement => {
  const rows = recommendations.map((recommendation, index) => ({
    id: index,
    ...recommendation,
  }))

  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <div>Recommendations</div>
        <DataGrid rows={rows} columns={columns} pageSize={5} columnBuffer={6} />
      </div>
    </Container>
  )
}

export default RecommendationsTable
