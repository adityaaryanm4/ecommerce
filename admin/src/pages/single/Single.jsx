import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SimpleChart from "../../components/simpleChart/SimpleChart"
import ListContent from "../../components/listContent/ListContent"
import { useEffect } from "react"
import { publicRequest, userRequest } from "../../requestMethod"
import { useParams } from "react-router-dom"
import { useState, useMemo } from "react"

const ItemDetail = ({ itemKey, itemValue }) => {      //for rendering details field
    return (
        <div className="item-detail">
            <div className="item-key">{itemKey}</div>
            <div className="item-value">{itemValue}</div>
        </div>
    )
}

const Single = ({ path }) => {

    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})
    const [pStat, setPStat] = useState([])

    const { id } = useParams()
    const months = useMemo(() => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], [])

    useEffect(() => {

        try {
            const makeReq = async () => {
                if (path === "users") {
                    const res = (await userRequest.get(`/api/user/find/${id}`)).data
                    setUser(res)
                }

                else {
                    const res = (await publicRequest.get(`/api/product/find/${id}`)).data
                    setProduct(res)
                }
            }
            makeReq()

        } catch (error) {
            console.log(error)
        }
    }, [path, id])

    useEffect(() => {

        try {
            const makeReq = async () => {
                if (path === "users") {
                    const res = (await userRequest.get(`/api/user/find/${id}`)).data
                    setUser(res)
                }

                else {
                    const res = (await userRequest.get(`/api/order/income?pid=${id}`)).data
                    res.map(item => setPStat(prev => [...prev, { name: months[item._id - 1], TotalSales: item.totalSales }]))
                }
            }
            makeReq()

        } catch (error) {
            console.log(error)
        }
    }, [path, id, months])

    return (
        <div className="single">
            <Sidebar />

            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">information</h1>
                        <span className="edit-button">edit</span>

                        <div className="item">
                            <img className="item-img"
                                src={path === "users" ? user.img : product.img}
                                alt="avatar" />
                            {path === "users" ?                   
                                <div className="item-details">   
                                    <h1 className="item-title">{user.username}</h1>
                                    <ItemDetail itemKey="Email:" itemValue={user.email} />
                                    <ItemDetail itemKey="Status:" itemValue={user.status} />
                                    <ItemDetail itemKey="Admin:" itemValue={user.isAdmin ? "Yes" : "No"} />
                                    <ItemDetail itemKey="Id:" itemValue={user._id} />
                                </div>
                                :
                                <div className="item-details">  
                                    <h1 className="item-title">{product.title}</h1>
                                    <ItemDetail itemKey="Price:" itemValue={`$ ${product.price}`} />
                                    <ItemDetail itemKey="Availability:" itemValue={product.inStock ? "In Stock" : "Out Of Stock"} />
                                    <ItemDetail itemKey="Id:" itemValue={`${product._id}`} />
                                </div>
                            }
                        </div>

                    </div>
                    <div className="right">
                        <SimpleChart data={pStat} dataKey={path === "users" ? "Spent" : "TotalSales"} aspect={3 / 1} title={path === "users" ? "user spending (Last 2 months)" : "product performance (Last 2 months)"} />
                    </div>
                </div>
                <div className="bottom">
                    <ListContent />
                </div>

            </div>
        </div >
    )
}


export default Single


