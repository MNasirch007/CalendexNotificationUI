import React from 'react'
import { Plus } from 'lucide-react'
import './Header.css'
import header1 from '../assets/header1.png'


const Header = ({ onCreateNewClick }) => {
  return (
    <header className="header"style={{height:"51px"}}>
        <img src={header1} alt="" style={{height:"30px",width:"30px",marginLeft:"16px"}}/>
      <div className="header-content">
        {/* Left section - Dashboard title */}
        <div className="header-left">
          <h1 className="dashboard-title"style={{color:"#404145"}}>Dashboard</h1>
        </div>

        {/* Right section - Create New button */}
        <div className="header-right">
          <button className="create-new-btn" onClick={onCreateNewClick}>
            <Plus className="plus-icon" />
            Create New
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header