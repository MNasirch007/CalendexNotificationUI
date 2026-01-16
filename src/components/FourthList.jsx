import './FourthList.css'

const FourthList = ({ onNext }) => {
  const components = [
    { icon: '⬜', name: 'Icon', type: 'icon' },
    { icon: '⬜', name: 'Card', type: 'card' },
    { icon: 'H', name: 'Heading + Text + Image', type: 'heading' },
    { icon: 'T', name: 'Text', type: 'text' },
    { icon: '↗', name: 'Button', type: 'button' },
    { icon: '—', name: 'Divider', type: 'divider' },
    { icon: '⌐', name: 'Spacer', type: 'spacer' }
  ];

  return (
    <div className="page-container"style={{height:"50rem"}}>
      {/* Side Components Panel */}
      <div className="components-panel">
        {components.map((component, index) => (
          <div key={index} className="component-item">
            <div className="component-left">
              <div className="component-icon">
                {component.icon}
              </div>
              <span className="component-name">{component.name}</span>
            </div>
            <div className="component-add">
              +
            </div>
          </div>
        ))}
      </div>

      {/* Main content area with appointment modal */}
      <div className="main-content">
        {/* Notification Header Card */}
        <div className="fourth-notification-container">
          <div className="fourth-notification-card">
            <div className="fourth-notification-header">
              <span className="fourth-notification-label">Notification Name</span>
              <h3 className="fourth-notification-title">Slot Updated Notification</h3>
            </div>
          </div>
          
          {/* Appointment Modal */}
          <div className="fourth-appointment-modal">
            <div className="fourth-modal-content">
              {/* Upload Button Container - Above title */}
              <div className="fourth-upload-container">
                <button className="fourth-upload-btn">Upload</button>
              </div>
              
              <h2 className="fourth-modal-title">Appointment Updated!</h2>
              <p className="fourth-modal-subtitle">Your appointment has been successfully rescheduled.</p>
              
              <div className="fourth-appointment-details">
                {/* Light grey container for Previous and New appointments */}
                <div className="fourth-appointment-container">
                  <div className="fourth-appointment-comparison">
                    <div className="fourth-appointment-time previous">
                      <div className="fourth-time-label">Previous</div>
                      <div className="fourth-date-time">
                        <div className="fourth-date">
                          <svg className="fourth-calendar-icon" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Jan 15, 2025
                        </div>
                        <div className="fourth-time">
                          <svg className="fourth-clock-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          10:00 AM
                        </div>
                      </div>
                    </div>
                    
                    <div className="fourth-arrow">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div className="fourth-appointment-time new">
                      <div className="fourth-time-label">New</div>
                      <div className="fourth-date-time">
                        <div className="fourth-date">
                          <svg className="fourth-calendar-icon" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Jan 15, 2025
                        </div>
                        <div className="fourth-time">
                          <svg className="fourth-clock-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          2:30 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="fourth-ok-button">OK</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Next Button Container - Top Right Corner */}
      <div className="next-button-container"style={{marginRight:"2rem",marginbottom:"8rem"}}>
        <button className="next-button-floating" onClick={onNext}>Next</button>
      </div>
      
      {/* Menu Panel - Below Next Button */}
      <div className="menu-panel"style={{marginbottom:"8rem",marginRight:"2rem"}}>
        <div className="menu-item">
          <span className="menu-text">Preview</span>
          <div className="menu-arrow">▶</div>
        </div>
        <div className="menu-item">
          <span className="menu-text">Content</span>
          <div className="menu-arrow">▶</div>
        </div>
        <div className="menu-item">
          <span className="menu-text">Style</span>
          <div className="menu-arrow">▶</div>
        </div>
        <div className="menu-item">
          <span className="menu-text">Advanced</span>
          <div className="menu-arrow">▶</div>
        </div>
      </div>
    </div>
  );
};

export default FourthList;
