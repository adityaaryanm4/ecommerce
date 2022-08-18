import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../dataTable";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { userRequest } from '../../requestMethod'

const DataTable = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = (await userRequest.get("/api/user")).data
        setUsers(res)
      } catch (error) {
        console.log(error)
      }

    }
    makeReq()
  }, [users])

  const actionColumn = [{
    field: "action", headerName: "Actions", width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithAction">
          <Link to={`/users/${params.row._id}`}>
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
          getRowId={(row) => row._id} //since row's identifier is not called "id", therefore telling the grid where it's located  
          className="dataGrid"
          rows={users}
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