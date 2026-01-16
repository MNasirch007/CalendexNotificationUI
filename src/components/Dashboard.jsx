import React, { useState } from 'react'
import './Dashboard.css'

// Import dashboard icons
import dashboard11 from '../assets/dashboard11.png'
import dashboard2 from '../assets/dashboard2.png'
import dashboard3 from '../assets/dashboard3.png'
import dashboard4 from '../assets/dashboard4.png'
import erro from '../assets/erro.png'
import bigcardicon from '../assets/bigcardicon.png'
import bigcardicon2 from '../assets/bigcardicon2.png'
import bigcardicon3 from '../assets/bigcardicon3.png'
import erro2 from '../assets/erro2.png'
import bigcardicon4 from '../assets/bigcardicon4.png'
import bigcardicon6 from '../assets/bigcardicon6.png'
import senterro from '../assets/senterro.png'


const Dashboard = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const statsCards = [
    {
      icon: dashboard11,
      value: '2,156',
      label: 'Total Campaigns Sent',
      percentage: '+12.5%',
      trend: 'up'
    },
    {
      icon: dashboard2,
      value: '2,143',
      label: 'Total Delivered',
      percentage: '+99.9%',
      trend: 'up'
    },
    {
      icon: dashboard3,
      value: '1,987',
      label: 'Avg. Open Rate',
      percentage: '+92.7%',
      trend: 'up'
    },
    {
      icon: dashboard4,
      value: '1,432',
      label: 'Avg. Click Rate',
      percentage: '+72.1%',
      trend: 'up',
    }
  ]

  // Data for each date point
  const chartData = [
    { date: 'Dec 24', sent: 520, delivered: 518, opened: 450, clicked: 380 },
    { date: 'Dec 25', sent: 480, delivered: 475, opened: 420, clicked: 360 },
    { date: 'Dec 26', sent: 540, delivered: 538, opened: 470, clicked: 400 },
    { date: 'Dec 27', sent: 520, delivered: 515, opened: 450, clicked: 380 },
    { date: 'Dec 28', sent: 570, delivered: 568, opened: 490, clicked: 420 },
    { date: 'Dec 29', sent: 580, delivered: 575, opened: 500, clicked: 430 },
    { date: 'Dec 30', sent: 590, delivered: 585, opened: 510, clicked: 440 }
  ];

  const handlePointHover = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    setHoveredPoint(index);
    setTooltipPosition({ x: rect.left, y: rect.top });
  };

  const handlePointLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div className="dashboard">
      {/* Stats Cards */}
      <div className="stats-grid">
        {statsCards.map((card, index) => {
          return (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <img 
                  src={card.icon} 
                  alt={`Dashboard icon ${index + 1}`}
                  className="dashboard-icon"
                />
                <div 
                  className="stat-percentage up"
                  style={index === 3 ? {backgroundColor: '#EF44441A'} : {}}
                >
                  <img 
                    src={erro}
                    alt="Arrow up"
                    className="arrow-icon"
                    style={index === 3 ? {filter: 'brightness(0) saturate(100%) invert(36%) sepia(93%) saturate(4841%) hue-rotate(347deg) brightness(97%) contrast(92%)'} : {}}
                  />
                  <span 
                    className="percentage-text"
                    style={index === 3 ? {color: '#EF4444'} : {}}
                  >
                    {card.percentage}
                  </span>
                </div>
              </div>
              <div className="stat-content">
                <h3 className="stat-value">{card.value}</h3>
                <p className="stat-label">{card.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Performance Chart Section */}
      <div className="chart-section"style={{backgroundColor:"#ffff"}}>
        <h2 className="chart-title"style={{backgroundColor:"#ffff"}}>Performance Over Time</h2>
        <div className="chart-container"style={{backgroundColor:"#ffff"}}>
          <div className="chart-placeholder"style={{backgroundColor:"#ffff"}}>
            <div className="chart-legend"style={{backgroundColor:"#ffff"}}>
              <div className="legend-item"style={{backgroundColor:"#ffff"}}>
              
              </div>
            </div>
            
            {/* Chart Lines Simulation */}
            <div className="chart-lines">
              <svg width="100%" height="348" viewBox="0 0 900 348" preserveAspectRatio="none">
                {/* Grid lines - horizontal (aligned with Y-axis numbers) */}
                <line x1="50" y1="18" x2="850" y2="18" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="50" y1="88.5" x2="850" y2="88.5" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="50" y1="159" x2="850" y2="159" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="50" y1="229.5" x2="850" y2="229.5" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="50" y1="303" x2="850" y2="303" stroke="#f0f0f0" strokeWidth="1"/>
                
                {/* Vertical dotted lines at each date position */}
                <line x1="80" y1="18" x2="80" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="210" y1="18" x2="210" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="340" y1="18" x2="340" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="470" y1="18" x2="470" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="600" y1="18" x2="600" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="730" y1="18" x2="730" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="840" y1="18" x2="840" y2="303" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
                
                {/* Axis lines - Left, Bottom, Right */}
                <line x1="50" y1="18" x2="50" y2="303" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="50" y1="303" x2="850" y2="303" stroke="#6b7280" strokeWidth="1.5"/>
                
                {/* Y-axis tick marks */}
                <line x1="45" y1="18" x2="50" y2="18" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="45" y1="88.5" x2="50" y2="88.5" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="45" y1="159" x2="50" y2="159" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="45" y1="229.5" x2="50" y2="229.5" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="45" y1="303" x2="50" y2="303" stroke="#6b7280" strokeWidth="1.5"/>
                
                {/* X-axis tick marks */}
                <line x1="80" y1="303" x2="80" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="210" y1="303" x2="210" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="340" y1="303" x2="340" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="470" y1="303" x2="470" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="600" y1="303" x2="600" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="730" y1="303" x2="730" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="840" y1="303" x2="840" y2="308" stroke="#6b7280" strokeWidth="1.5"/>
                
                {/* Y-axis labels - equal spacing from top to bottom */}
                <text x="25" y="18" fontSize="11" fill="#374151">600</text>
                <text x="25" y="88.5" fontSize="11" fill="#374151">450</text>
                <text x="25" y="159" fontSize="11" fill="#374151">300</text>
                <text x="25" y="229.5" fontSize="11" fill="#374151">150</text>
                <text x="38" y="303" fontSize="11" fill="#374151">0</text>
                
                {/* X-axis labels */}
                <text x="50" y="317" fontSize="11" fill="#374151">Dec 24</text>
                <text x="200" y="317" fontSize="11" fill="#374151">Dec 25</text>
                <text x="330" y="317" fontSize="11" fill="#374151">Dec 26</text>
                <text x="460" y="317" fontSize="11" fill="#374151">Dec 27</text>
                <text x="590" y="317" fontSize="11" fill="#374151">Dec 28</text>
                <text x="720" y="317" fontSize="11" fill="#374151">Dec 29</text>
                <text x="830" y="317" fontSize="11" fill="#374151">Dec 30</text>
                
                {/* Sent line (cyan) - Top line */}
                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  points="49,135 204,145 334,130 464,135 594,120 724,115 834,110"
                />
                
                {/* Delivered line (green) - Second line with 1px gap from left */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  points="50,137 204,146 334,131 464,139 594,125 724,121 834,117"
                />
                
                {/* Opened line (purple) - Third line */}
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2.5"
                  points="49,170 204,180 334,165 464,170 594,155 724,150 834,145"
                />
                
                {/* Clicked line (orange) - Bottom line */}
                <polyline
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  points="49,185 204,195 334,180 464,185 594,170 724,165 834,160"
                />
                
                
                {/* Data points for Sent (cyan) */}
                <circle cx="49" cy="135" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(0, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="204" cy="145" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(1, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="334" cy="130" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(2, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="464" cy="135" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(3, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="594" cy="120" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(4, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="724" cy="115" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(5, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="834" cy="110" r="4" fill="white" stroke="#06b6d4" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(6, e)} onMouseLeave={handlePointLeave}/>
                
                {/* Data points for Delivered (green) with 1px gap from left */}
                <circle cx="50" cy="137" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(0, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="204" cy="146" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(1, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="334" cy="131" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(2, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="464" cy="139" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(3, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="594" cy="125" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(4, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="724" cy="121" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(5, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="834" cy="117" r="4" fill="white" stroke="#10b981" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(6, e)} onMouseLeave={handlePointLeave}/>
                
                {/* Data points for Opened (purple) */}
                <circle cx="49" cy="170" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(0, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="204" cy="180" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(1, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="334" cy="165" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(2, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="464" cy="170" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(3, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="594" cy="155" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(4, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="724" cy="150" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(5, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="834" cy="145" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(6, e)} onMouseLeave={handlePointLeave}/>
                
                {/* Data points for Clicked (orange) */}
                <circle cx="49" cy="185" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(0, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="204" cy="195" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(1, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="334" cy="180" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(2, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="464" cy="185" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(3, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="594" cy="170" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(4, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="724" cy="165" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(5, e)} onMouseLeave={handlePointLeave}/>
                <circle cx="834" cy="160" r="4" fill="white" stroke="#f59e0b" strokeWidth="2" style={{cursor: 'pointer'}} onMouseEnter={(e) => handlePointHover(6, e)} onMouseLeave={handlePointLeave}/>
              </svg>
              
              {/* Tooltip Card */}
              {hoveredPoint !== null && (
                <div style={{
                  position: 'fixed',
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y - 140}px`,
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  zIndex: 1000,
                  minWidth: '160px',
                  pointerEvents: 'none'
                }}>
                  <div style={{fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px', fontFamily: 'Roboto'}}>
                    {chartData[hoveredPoint].date}
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4'}}></div>
                        <span style={{fontSize: '11px', color: '#6b7280', fontFamily: 'Roboto'}}>Sent</span>
                      </div>
                      <span style={{fontSize: '12px', fontWeight: '600', color: '#374151', fontFamily: 'Roboto'}}>{chartData[hoveredPoint].sent}</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                        <span style={{fontSize: '11px', color: '#6b7280', fontFamily: 'Roboto'}}>Delivered</span>
                      </div>
                      <span style={{fontSize: '12px', fontWeight: '600', color: '#374151', fontFamily: 'Roboto'}}>{chartData[hoveredPoint].delivered}</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b5cf6'}}></div>
                        <span style={{fontSize: '11px', color: '#6b7280', fontFamily: 'Roboto'}}>Opened</span>
                      </div>
                      <span style={{fontSize: '12px', fontWeight: '600', color: '#374151', fontFamily: 'Roboto'}}>{chartData[hoveredPoint].opened}</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b'}}></div>
                        <span style={{fontSize: '11px', color: '#6b7280', fontFamily: 'Roboto'}}>Clicked</span>
                      </div>
                      <span style={{fontSize: '12px', fontWeight: '600', color: '#374151', fontFamily: 'Roboto'}}>{chartData[hoveredPoint].clicked}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Legend with icons */}
              <div style={{position: 'absolute', bottom: '0px', left: 'calc(50% - 20px)', transform: 'translateX(-50%)', display: 'flex', gap: '20px', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <img src={senterro} alt="" style={{height: '12px', width: '12px'}} />
                  <span style={{fontSize: '14px', color: '#06b6d4', fontWeight: '500'}}>Sent</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <img src={senterro} alt="" style={{height: '12px', width: '12px'}} />
                  <span style={{fontSize: '14px', color: '#10b981', fontWeight: '500'}}>Delivered</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <img src={senterro} alt="" style={{height: '12px', width: '12px'}} />
                  <span style={{fontSize: '14px', color: '#8b5cf6', fontWeight: '500'}}>Opened</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <img src={senterro} alt="" style={{height: '12px', width: '12px'}} />
                  <span style={{fontSize: '14px', color: '#f59e0b', fontWeight: '500'}}>Clicked</span>
                </div>
              </div>
            </div>
            
            {/* X-axis labels */}
          
          </div>
        </div>
      </div>

      {/* Preview Cards Section */}
      <div className="preview-cards-section">
        <div className="preview-cards-grid">
          {/* Push Notification Preview Card */}
          <div className="preview-card">
            <h3 className="preview-card-title">Push Notification Preview</h3>
            <div className="notification-preview">
              <div className="notification-time"style={{marginRight:"15rem"}}>9:41</div>
              <div className="notification-content"style={{height:"129px",width:"328px",borderRadius:"14px",marginTop:"1rem"}}>
                <div className="notification-header">
                  <div className="notification-icon">
                    <div className="app-icon"style={{height:"40px",width:"40px"}}> <img src={bigcardicon} alt="" style={{height:"20px",width:"20px"}}/></div>
                  </div>
                  <div className="notification-text">
                    <div className="notification-title"style={{fontFamily:"roboto",fontSize:"20px",fontWeight:"700",marginBottom:"8px"}}>Appointment Updated</div>
                    <div className="notification-message"style={{fontFamily:"roboto",fontSize:"14px",fontWeight:"400",color:"#9ca3af",lineHeight:"1.5"}}>Your appointment has been rescheduled to 2:30 PM on Jan 15.</div>
                  </div>
                  <div className="notification-arrow">›</div>
                </div>
                <div className="notification-action"style={{marginLeft:"4.5rem",marginTop:"3.5rem"}}>
                  <div className='dot'style={{color:"#155DFC",paddingLeft:"10px",paddingBottom:"3rem",marginBottom:"2px"}}>● </div>
                  <span className="tap-to-view"style={{paddingLeft:"9px"}}>Tap to view details</span>
                </div>
              </div>
            </div>
          </div>

          {/* In-App Message Preview Card */}
          <div className="preview-card">
            <h3 className="preview-card-title">In-App Message Preview</h3>
              <div className="in-app-content"style={{height:"472px",width:"360px",marginLeft:"115px"}}>
                <img src={dashboard2} alt="" style={{height:"80px",width:"80px",borderRadius:"26843500px",marginTop:"16px",marginLeft:"110px"}}/>
                <h4 className="in-app-title"style={{fontSize:"24px",fontFamily:"roboto",fontWeight:"700,bold",marginTop:"10px"}}>Appointment Updated!</h4>
                <p className="in-app-message"style={{fontSize:"12px",fontFamily:"roboto",fontWeight:"400"}}>Your appointment has been successfully rescheduled</p>
                
                <div className="time-change">
                  <div className="time-section">
                    <span className="time-label">Previous</span>
                    <div className="time-box">

                      <span className="date"style={{display:"flex",gap:"7px"}}><img src={bigcardicon2} alt="" style={{height:"16px",width:"16px",marginTop:"3px"}}/> Jan 15, 2025</span>
                      <span className="time"style={{display:"flex",gap:"7px",marginTop:"5px"}}><img src={bigcardicon3} alt="" style={{height:"16px",width:"16px",marginTop:"3px"}}/> 12:00 AM</span>
                    </div>
                  </div>
                  
                  <div className="arrow-right"> <img src={erro2} alt="" style={{marginTop:"22px"}}/> </div>
                  
                  <div className="time-section">
                    <span className="time-label new">New</span>
                    <div className="time-box new">
                      <span className="date" style={{display:"flex",gap:"9px"}}> <img src={bigcardicon4} alt="" style={{height:"16px",width:"16px",marginTop:"3px"}}/>Jan 15, 2025</span>
                      <span className="time"style={{display:"flex",gap:"9px",color:"#00A63E",marginTop:"5px"}}> <img src={bigcardicon6} alt="" style={{height:"16px",width:"16px",marginTop:"3px"}}/> 2:30 PM</span>
                    </div>
                  </div>
                </div>
                
                <button className="ok-button">OK</button>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard