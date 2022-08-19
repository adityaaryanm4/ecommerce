import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, userColumns } from "../../dataTable";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { userRequest, publicRequest } from '../../requestMethod'

const DataTable = ({ path }) => {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {

    if (path === "users") {

      const makeReqForUsers = async () => {
        try {
          const res = (await userRequest.get("/api/user")).data
          setUsers(res)
        } catch (error) {
          console.log(error)
        }

      }
      makeReqForUsers()
    }

    else {
      const makeReqForProducts = async () => {
        try {
          const res = (await publicRequest.get("/api/product")).data
          setProducts(res)
        } catch (error) {
          console.log(error)
        }

      }
      makeReqForProducts()
    }
  }, [path])

  const viewLatest = async () => {

    if (path === "users") {
      try {
        const res = (await userRequest.get("/api/user?new=true")).data
        setUsers(res)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        const res = (await publicRequest.get("/api/product?new=true")).data
        setProducts(res)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const actionColumn = [{
    field: "action", headerName: "Actions", width: 200, sortable: false,
    renderCell: (params) => {
      return (
        <div className="cellWithAction">
          <Link to={path === "users" ? `/users/${params.row._id}` : `/products/${params.row._id}`}>
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

        <div className="add-new-btn" onClick={viewLatest}>View Latest</div>

        <Link to="/users/new">
          <div className="add-new-btn">Add New</div>
        </Link>
      </div>
      <div style={{ height: "600px", width: '100%' }}>
        <DataGrid
          getRowId={(row) => row._id} //since row's identifier is not called "id", therefore telling the grid where it's located  
          className="dataGrid"
          rows={path === "users" ? users : products}
          columns={path === "users" ? userColumns.concat(actionColumn) : productColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection

        />
      </div>


    </div>
  )
}

export default DataTable