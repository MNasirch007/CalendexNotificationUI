import React, { useState } from 'react'
import './Sidebar.css'
import tsi from '../assets/tsi.png'
import tsi2 from '../assets/tsi2.png'
import tsi3 from '../assets/tsi3.png'
import tsi4 from '../assets/tsi4.png'
import tsi5 from '../assets/tsi5.png'
import tsi6 from '../assets/tsi6.png'
import tsi7 from '../assets/tsi7.png'



const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(2);

  return (
    <div className="sidebar"style={{height:"683px",width:"54px",borderTop:"2px solid #FFD705",borderRadius:"10px",marginTop:"5px"}}>
      {/* Top yellow section */}
      {/* <div className="sidebar-top">
        <img src={sidebar11} alt="Top icon" className="sidebar-img" style={{height:"12px",width:"12px"}}/>
      </div> */}
      
      {/* White section with icons */}
      <div className="sidebar-bottom"style={{gap:"20px"}}>
        <div 
          className={`sidebar-icon-container ${selectedIcon === 0 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(0)}
        >
          <img 
            src={tsi} 
            alt="" 
            className="sidebar-img" 
            style={{height:"20px",width:"20px",marginTop:"1rem"}}
          />
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 1 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(1)}
        >
          <img src={tsi2} alt="Icon 1" className="sidebar-img" style={{height:"15px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 2 ? 'active' : ''}`} 
          style={{height:"34px",width:"37px", cursor: "pointer"}}
          onClick={() => setSelectedIcon(2)}
        >
          <img src={tsi3} alt="Icon 2" className="sidebar-img" style={{height:"18px",width:"18px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 3 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(3)}
        >
          <img src={tsi4} alt="Icon 3" className="sidebar-img" style={{height:"14px",width:"15px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 4 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(4)}
        >
          <img src={tsi5} alt="Icon 4" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 5 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(5)}
        >
          <img src={tsi6} alt="Icon 5" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 6 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(6)}
        >
          <img src={tsi7} alt="Icon 6" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar