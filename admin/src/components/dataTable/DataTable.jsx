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

    const makeReq = async () => {

      try {
        if (path === "users") {
          const res = (await userRequest.get("/api/user")).data
          setUsers(res)
        }
        else {
          const res = (await publicRequest.get("/api/product")).data
          setProducts(res)
        }
      } catch (error) {
        console.log(error)
      }
    }
    makeReq()
  }, [path])

  const viewLatest = async () => {

    try {
      if (path === "users") {
        const res = (await userRequest.get("/api/user?new=true")).data
        setUsers(res)
      }
      else {
        const res = (await publicRequest.get("/api/product?new=true")).data
        setProducts(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (_id) => {
    const res = (await userRequest.delete(`/api/product/${_id}`)).data
    console.log(res)
    setProducts(products.filter(product => product._id !== _id))
    console.log('We hv only few products. So did not "actually" delete !')
  }

  const actionColumn = [{
    field: "action", headerName: "Actions", width: 200, sortable: false,
    renderCell: (params) => {
      return (
        <div className="cellWithAction">
          <Link to={path === "users" ? `/users/${params.row._id}` : `/products/${params.row._id}`}>
            <span className="view-button">View</span>
          </Link>
          <span className="del-button" onClick={() => handleDelete(params.row._id)}>Delete</span>
        </div>
      )
    }
  }]

  return (

    <div className="dataTable">
      <div className="add-btn-outer">

        <div className="add-new-btn" onClick={viewLatest}>View Latest</div>

        <Link to={`/${path}/new`}>
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