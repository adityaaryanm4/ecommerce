import "./listContent.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { userRequest } from '../../requestMethod'
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ListContent = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const makeReq = async () => {
      const res = (await userRequest.get("/api/order")).data
      setOrders(res)
    }
    makeReq()
  }, [])

  return (
    <TableContainer component={Paper} className="table">

      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>

          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Country</TableCell>
            <TableCell className="tableCell">Amount </TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="tableCell">{order._id} </TableCell>
              <TableCell className="tableCell">{dayjs(order.createdAt).fromNow()}</TableCell>
              <TableCell className="tableCell">${order.address.country}</TableCell>
              <TableCell className="tableCell">${order.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${order.status}`}>
                  {order.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  )
}

export default ListContent