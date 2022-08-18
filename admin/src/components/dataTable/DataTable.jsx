import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dataTable";
import { Link } from 'react-router-dom'

const DataTable = () => {

  const actionColumn = [{
    field: "action", headerName: "Actions", width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithAction">
          <Link to={`/users/${params.row.id}`}>
            <span className="view-button">View</span>
          </Link>
          <span className="del-button">Delete</span>
        </div>
      )
    }
  }]

  return (

    <div className="dataTable">
      <div className="add-btn-outer">
        <Link to="/users/new">
          <div className="add-new-btn">Add New</div>
        </Link>
      </div>
      <div style={{ height: "600px", width: '100%' }}>
        <DataGrid
          className="dataGrid"
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>


    </div>
  )
}

export default DataTable