
export const userColumns = [
    { field: "_id", headerName: "ID", width: 230 },

    {
        field: "user", headerName: "User", width: 230, sortable: false,
        renderCell: (params) => {
            return (<div className="cellWithImg">
                <img className="cellImg"
                    src={params.row.img ? params.row.img
                        : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"}
                    alt="avatar" />
                <span>{params.row.username}</span>
            </div>)
        }
    },

    { field: "email", headerName: "Email", width: 230 }, //field name must be exact as mentioned in row data

    {
        field: "status", headerName: "Status", width: 160, sortable: false,
        renderCell: (params) => {
            return (
                <div >
                    <span className={`cellStatus ${params.row.status}`}>
                        {params.row.status}
                    </span>
                </div>
            )
        }
    }

]

export const productColumns = [
    { field: "_id", headerName: "ID", width: 250 },

    {
        field: "product", headerName: "Product", width: 250, sortable: false,
        renderCell: (params) => {
            return (<div className="cellWithImg">
                <img className="cellImg"
                    src={params.row.img}
                    alt="product" />
                <span>{params.row.title}</span>
            </div>)
        }
    },

    {
        field: "inStock", headerName: "Availability", width: 200, sortable: false, //field name must be exact as mentioned in row data
        renderCell: (params) => {                                                   //"renderCell" --- we r modifying the cell as we want
            return (
                <div className={`cellStock ${params.row.inStock}`}>
                    {params.row.inStock ? "In Stock" : "Out Of Stock"}
                </div>
            )
        }
    },

]