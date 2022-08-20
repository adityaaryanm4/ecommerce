import "./simpleChart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const SimpleChart = ({ aspect, title, data }) => {
  return (
    <div className='simpleChart'>
      <div className="title">{title}</div>

      <ResponsiveContainer width="100%" aspect={aspect}>

        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

          <defs>

            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

          </defs>

          <XAxis dataKey="name" stroke="gray" />

          <CartesianGrid strokeDasharray="3 3" className="grid-stroke" />

          <Tooltip />

          {/* main imp is this area */}
          <Area dataKey="TotalSales" type="monotone" stroke="#8884d8" fillOpacity={1} fill="url(#color)" />

        </AreaChart>

      </ResponsiveContainer>
    </div>
  )
}

export default SimpleChart