import React from 'react';
import './ComponentsPanel.css';

const ComponentsPanel = ({ onNext }) => {
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
    <div className="page-container">
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
        <div className="notification-container">
          <div className="notification-card">
            <div className="notification-header">
              <span className="notification-label">Notification Name</span>
              <h3 className="notification-title">Slot Updated Notification</h3>
            </div>
          </div>
          
          {/* Appointment Modal */}
          <div className="appointment-modal">
            <div className="modal-content">
              {/* Upload Button Container - Above title */}
              <div className="upload-container">
                <button className="upload-btn">Upload</button>
              </div>
              
              <h2 className="modal-title">Appointment Updated!</h2>
              <p className="modal-subtitle">Your appointment has been successfully rescheduled.</p>
              
              <div className="appointment-details">
                {/* Light grey container for Previous and New appointments */}
                <div className="appointment-container">
                  <div className="appointment-comparison">
                    <div className="appointment-time previous">
                      <div className="time-label">Previous</div>
                      <div className="date-time">
                        <div className="date">
                          <svg className="calendar-icon" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Jan 15, 2025
                        </div>
                        <div className="time">
                          <svg className="clock-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          10:00 AM
                        </div>
                      </div>
                    </div>
                    
                    <div className="arrow">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div className="appointment-time new">
                      <div className="time-label">New</div>
                      <div className="date-time">
                        <div className="date">
                          <svg className="calendar-icon" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Jan 15, 2025
                        </div>
                        <div className="time">
                          <svg className="clock-icon" viewBox="0 0 24 24" fill="none">
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
              
              <button className="ok-button">OK</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Next Button Container - Top Right Corner */}
      <div className="next-button-container">
        <button className="next-button-floating" onClick={onNext}>Next</button>
      </div>
      
      {/* Menu Panel - Below Next Button */}
      <div className="menu-panel">
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

export default ComponentsPanel;