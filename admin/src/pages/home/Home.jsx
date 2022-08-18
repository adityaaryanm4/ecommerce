import React from 'react'
import FeaturedChart from '../../components/featuredChart/FeaturedChart'
import ListContent from '../../components/listContent/ListContent'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SimpleChart from '../../components/simpleChart/SimpleChart'
import Widget from '../../components/widget/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <SimpleChart aspect={2 / 1} title="Revenue (Last 6 months)" />
        </div>
        <div className="listContainer">

          <div className="listTitle">Latest Transactions</div>
          <ListContent />

        </div>
      </div>
    </div>
  )
}

export default Home