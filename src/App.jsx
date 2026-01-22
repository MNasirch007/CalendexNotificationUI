import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import TemplateNavbar from './components/TemplateNavbar'
import TemplateHeader from './components/TemplateHeader'
import TemplateSidebar from './components/TemplateSidebar'
import TemplateList from './components/TemplateList'
import ThirdNavbar from './components/ThirdNavbar'
import ThirdHeader from './components/ThirdHeader'
import ThirdSidebar from './components/ThirdSidebar'
import ThirdList from './components/ThirdList'
import FourthNavbar from './components/FourthNavbar'
import FourthHeader from './components/FourthHeader'
import FourthSidebar from './components/FourthSidebar'
import FourthList from './components/FourthList'
import FifthNavbar from './components/FifthNavbar'
import FifthHeader from './components/FifthHeader'
import FifthSidebar from './components/FifthSidebar'
import FifthList from './components/FifthList'
import SixthNavbar from './components/SixthNavbar'
import SixthHeader from './components/SixthHeader'
import SixthSidebar from './components/SixthSidebar'
import SixthList from './components/SixthList'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleCreateNewClick = () => {
    setCurrentPage('templateList')
  }

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard')
  }

  const handleCircleClick = () => {
    setCurrentPage('thirdPage')
  }

  const handleBackToTemplateList = () => {
    setCurrentPage('templateList')
  }

  const handleNextToFourth = () => {
    setCurrentPage('fourthPage')
  }

  const handleBackToThird = () => {
    setCurrentPage('thirdPage')
  }

  const handleNextToFifth = () => {
    setCurrentPage('fifthPage')
  }

  const handleBackToFourth = () => {
    setCurrentPage('fourthPage')
  }

  const handleNextToSixth = () => {
    setCurrentPage('sixthPage')
  }

  const handleBackToFifth = () => {
    setCurrentPage('fifthPage')
  }

  if (currentPage === 'dashboard') {
    return (
      <Layout
        Navbar={Navbar}
        Header={Header}
        Sidebar={Sidebar}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onCreateNewClick={handleCreateNewClick}
      >
        <Dashboard />
      </Layout>
    )
  }

  if (currentPage === 'thirdPage') {
    return (
      <Layout
        Navbar={ThirdNavbar}
        Header={ThirdHeader}
        Sidebar={ThirdSidebar}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onBackClick={handleBackToTemplateList}
      >
        <ThirdList onNext={handleNextToFourth} />
      </Layout>
    )
  }

  if (currentPage === 'fourthPage') {
    return (
      <Layout
        Navbar={FourthNavbar}
        Header={FourthHeader}
        Sidebar={FourthSidebar}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onBackClick={handleBackToThird}
      >
        <FourthList onNext={handleNextToFifth} />
      </Layout>
    )
  }

  if (currentPage === 'fifthPage') {
    return (
      <Layout
        Navbar={FifthNavbar}
        Header={FifthHeader}
        Sidebar={FifthSidebar}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onBackClick={handleBackToFourth}
      >
        <FifthList onNext={handleNextToSixth} />
      </Layout>
    )
  }

  if (currentPage === 'sixthPage') {
    return (
      <Layout
        Navbar={SixthNavbar}
        Header={SixthHeader}
        Sidebar={SixthSidebar}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onBackClick={handleBackToFifth}
      >
        <SixthList />
      </Layout>
    )
  }

  return (
    <Layout
      Navbar={TemplateNavbar}
      Header={TemplateHeader}
      Sidebar={TemplateSidebar}
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      onBackClick={handleBackToDashboard}
      onAddClick={handleCircleClick}
    >
      <TemplateList />
    </Layout>
  )
}

export default App