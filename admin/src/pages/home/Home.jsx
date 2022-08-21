import { useEffect, useState } from "react";
import FeaturedChart from '../../components/featuredChart/FeaturedChart'
import ListContent from '../../components/listContent/ListContent'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SimpleChart from '../../components/simpleChart/SimpleChart'
import Widget from '../../components/widget/Widget'
import { userRequest } from '../../requestMethod'
import "./home.scss"

const Home = () => {

  const [income, setIncome] = useState([])

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  useEffect(() => {
    try {
      const makeReq = async () => {
        const res = (await userRequest.get("/api/order/income")).data
        res.map((item) =>
          setIncome((prevValue) => [...prevValue, { name: months[item._id - 1], TotalSales: item.totalSales }])
        )
      }
      makeReq()
    }
    catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className='home'>
      
      <Sidebar />
      {income.length>0 && <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" stat={income}/>
          <Widget type="order" stat={income}/>
          <Widget type="earning" stat={income}/>
          <Widget type="balance" stat={income}/>
        </div>
        <div className="charts">
          <FeaturedChart />
          <SimpleChart data={income} aspect={2 / 1} title="Revenue (Last 2 months)" />
        </div>
        <div className="listContainer">

          <div className="listTitle">Latest Transactions</div>
          <ListContent />

        </div>
      </div>}
    </div>
  )
}

export default Home