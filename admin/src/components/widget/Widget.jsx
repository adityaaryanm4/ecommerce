import "./widget.scss"
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom"

const Widget = ({ type, stat }) => {
  const [amount, setAmount] = useState(0)
  const [perc, setPerc] = useState(0)
  const [cName, setCname] = useState("")
  const [lastM, thisM] = stat

  useEffect(() => {

    setAmount(stat[1].TotalSales)
    setPerc(
      Math.floor(((thisM.TotalSales - lastM.TotalSales) * 100) / lastM.TotalSales)
    )
    perc < 0 ? setCname("negative") : setCname("positive")

  }, [stat,thisM,lastM,perc])

  let data
  switch (type) {

    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: <Link to="/users">See all users</Link>,
        icon: <PersonOutlineOutlinedIcon className="icon"
          style={{ backgroundColor: "rgba(255, 0, 0, 0.2)", color: "crimson" }} />
      }
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon"
          style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />
      }
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />
      }
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"
          style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />
      }
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className={`percentage ${cName}`}>{cName === "positive" ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}{perc}%</span>
        <span className="icon-span">{data.icon}</span>
      </div>
    </div>
  )
}

export default Widget