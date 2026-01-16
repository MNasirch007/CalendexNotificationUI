import React, { useState } from 'react'
import './Sidebar.css'
import sidebar11 from '../assets/sidebar11.png'
import sidebar2 from '../assets/sidebar2.png'
import sidebar3 from '../assets/sidebar3.png'
import sidebar4 from '../assets/sidebar4.png'
import sidebar5 from '../assets/sidebar5.png'
import sidebar6 from '../assets/sidebar6.png'


const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);

  return (
    <div className="sidebar"style={{height:"683px",width:"54px",borderTop:"2px solid #FFD705",borderRadius:"10px",marginTop:"5px"}}>
      {/* Top yellow section */}
      <div 
        className={`sidebar-icon-container ${selectedIcon === 0 ? 'active' : ''}`} 
        style={{height:"30px",width:"32px", cursor: "pointer"}}
        onClick={() => setSelectedIcon(0)}
      >
        <img src={sidebar11} alt="Icon 1" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
      </div>
      
      {/* White section with icons */}
      <div className="sidebar-bottom"style={{gap:"20px",marginTop:"19px"}}>
        <div 
          className={`sidebar-icon-container ${selectedIcon === 1 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(1)}
        >
          <img src={sidebar2} alt="Icon 2" className="sidebar-img" style={{height:"13px",width:"11px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 2 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(2)}
        >
          <img src={sidebar3} alt="Icon 3" className="sidebar-img" style={{height:"13px",width:"12px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 3 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(3)}
        >
          <img src={sidebar4} alt="Icon 4" className="sidebar-img" style={{height:"13px",width:"12px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 4 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(4)}
        >
          <img src={sidebar5} alt="Icon 5" className="sidebar-img" style={{height:"13px",width:"12px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 5 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(5)}
        >
          <img src={sidebar6} alt="Icon 6" className="sidebar-img" style={{height:"16px",width:"14px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar