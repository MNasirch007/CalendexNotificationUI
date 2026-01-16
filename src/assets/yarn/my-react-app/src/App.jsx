
import { useState } from 'react'
import CustomNavbar from './components/Navbar/Navbar'
import ComponentsPanel from './components/ComponentsPanel/ComponentsPanel'
import NotificationCampaign from './components/NotificationCampaign/NotificationCampaign'
import PreviewPage from './components/PreviewPage/PreviewPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('components')

  return (
    <div>
      <CustomNavbar />
      {currentPage === 'components' && <ComponentsPanel onNext={() => setCurrentPage('notification')} />}
      {currentPage === 'notification' && <NotificationCampaign onNext={() => setCurrentPage('preview')} />}
      {currentPage === 'preview' && <PreviewPage />}
    </div>
  )
}

export default App
