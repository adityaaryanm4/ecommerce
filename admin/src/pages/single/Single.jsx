import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { users } from "../../users"
import SimpleChart from "../../components/simpleChart/SimpleChart"
import ListContent from "../../components/listContent/ListContent"
import { useEffect } from "react"
import { publicRequest, userRequest } from "../../requestMethod"
import { useParams } from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({ itemKey, itemValue }) => {
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

    const { id } = useParams()

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
    }, [])

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
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt="avatar" />
                            <div className="item-details">
                                <h1 className="item-title">{users[0].name}</h1>
                                <ItemDetail itemKey="Email:" itemValue={users[0].email} />
                                <ItemDetail itemKey="Phone:" itemValue={users[0].phone} />
                                <ItemDetail itemKey="Address:" itemValue={users[0].address} />
                                <ItemDetail itemKey="Country:" itemValue={users[0].country} />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <SimpleChart aspect={3 / 1} title="user spending (Last 6 months)" />
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


