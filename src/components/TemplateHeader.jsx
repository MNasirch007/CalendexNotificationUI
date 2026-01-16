import React from 'react'
import { Settings, Search, ArrowLeft } from 'lucide-react'
import './TemplateHeader.css'
import header1 from '../assets/header1.png'
// import searchicon from '../assets/searchicon.png'


const TemplateHeader = ({ onBackClick, onAddClick }) => {
  
  return (
    <header className="template-header">
      <div className="template-header-content">
        {/* Left section - Icon and title */}
        <div className="template-header-left">
          <img src={header1} alt="" className="template-header-icon" />
          <h1 className="template-header-title"style={{marginLeft:"2rem"}}>Template list</h1>
        </div>

        {/* Center section - Search box */}
        <div className="template-search-container">
          <Search className="template-search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="template-search-input"
          />
          <svg className="template-search-right-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="8" x2="10" y2="8"></line>
            <circle cx="13" cy="8" r="3"></circle>
            <line x1="16" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="8" y2="16"></line>
            <circle cx="11" cy="16" r="3"></circle>
            <line x1="14" y1="16" x2="20" y2="16"></line>
          </svg>
        </div>

        {/* Right section - Add, Settings */}
        <div className="template-header-right">
          <button className="template-add-button" onClick={onAddClick}>Add</button>
          <button className="template-settings-button">
            <Settings className="template-settings-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default TemplateHeader