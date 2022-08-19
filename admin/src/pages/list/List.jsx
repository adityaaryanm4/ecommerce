import "./list.scss"
import DataTable from "../../components/dataTable/DataTable"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const List = () => { //"list" page is for all. like list of users. list of products
  //when we visit "/users", we ll show this "list" page

  const path = (window.location.href).split("/")[3]

  return (

    <div className="list">

      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <DataTable path={path}/>
      </div>

    </div>
  )
}

export default List