import { FaHome, FaTasks, FaRobot, FaChartBar } from 'react-icons/fa'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>AI Dashboard</h2>

      <ul>
        <li><FaHome /> Dashboard</li>
        <li><FaTasks /> Tasks</li>
        <li><FaRobot /> AI Assistant</li>
        <li><FaChartBar /> Analytics</li>
      </ul>
    </div>
  )
}

export default Sidebar