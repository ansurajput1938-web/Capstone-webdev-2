import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Mon', tasks: 2 },
  { name: 'Tue', tasks: 5 },
  { name: 'Wed', tasks: 3 },
  { name: 'Thu', tasks: 7 },
  { name: 'Fri', tasks: 4 },
]

function Analytics() {
  return (
    <div className="card analytics-card">
      <h2>Analytics</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#00bcd4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Analytics