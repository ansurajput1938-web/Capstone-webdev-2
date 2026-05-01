import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chatbot from '../components/Chatbot'
import TaskManager from '../components/TaskManager'
import Analytics from '../components/Analytics'
import Notes from '../components/Notes'
import WeatherWidget from '../components/WeatherWidget'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
  <div className="main-content">
     
       <Navbar />

        <div className="grid-layout">
          <Chatbot />
          <Analytics />
          <TaskManager />
          <Notes />
          <WeatherWidget />
        </div>
      </div>
    </div>
  )
}

export default Dashboard