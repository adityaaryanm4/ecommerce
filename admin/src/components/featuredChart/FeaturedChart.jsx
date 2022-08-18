import "./featuredChart.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Item = ({ title, icon, amount }) => {
  return (
    <div className="item">
      <span className="title">{title}</span>
      <div className="info positive">
        <span className="arrow-icon">{icon}</span>
        <span className="amount">${amount}</span>
      </div>
    </div>
  )
}

const FeaturedChart = () => {
  return (
    <div className='featuredChart'>
      <div className="top">
        <span className="title">Total Revenue</span>
        <MoreVertOutlinedIcon className="more-icon" />
      </div>
      <div className="bottom">
        <div>
          <CircularProgressbar className="bar" value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="items">
            <Item title="Target" icon={<KeyboardArrowUpIcon />} amount="12.4k" />
            <Item title="Last Week" icon={<KeyboardArrowDownIcon />} amount="12.4k" />
            <Item title="Last Month" icon={<KeyboardArrowUpIcon />} amount="12.4k" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart