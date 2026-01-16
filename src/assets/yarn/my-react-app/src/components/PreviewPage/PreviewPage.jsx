import React from 'react';
import './PreviewPage.css';

const PreviewPage = () => {
  return (
    <div className="preview-page">
      <div className="preview-container">
        {/* Left Side Panel */}
        <div className="left-panel">
          <div className="info-item">
            <div className="info-label">Template Name</div>
            <div className="info-value">Slot Updated Notification</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Notification Purpose</div>
            <div className="info-value">Slot Updated</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Repeat Pattern</div>
            <div className="info-value">Onces</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Group</div>
            <div className="info-value">Group 1 (256 people)</div>
          </div>
        </div>

        {/* Center Preview Card */}
        <div className="center-preview">
          <div className="campaign-name-header">
            <div className="campaign-label">Campaign Name</div>
            <div className="campaign-value">Slot Updated Notification</div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-inner">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h2 className="preview-title">Appointment Updated!</h2>
              <p className="preview-subtitle">Your appointment has been successfully rescheduled.</p>
              
              <div className="appointment-comparison-wrapper">
              <div className="appointment-comparison-box">
                <div className="appointment-box-container">
                  <div className="appointments-inner-container">
                    <div className="appointment-column">
                      <div className="column-label">Previous</div>
                      <div className="appointment-side previous-side"style={{width:"100px",marginLeft:"4.5rem"}}>
                        <div className="datetime-info">
                          <div className="date-row">
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>Jan 15, 2025</span>
                          </div>
                          <div className="time-row">
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>10:00 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="arrow-icon"style={{marginTop:"55px"}}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7 7 7-7 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div className="appointment-column"style={{width:"100px",marginRight:"133px"}}>
                      <div className="column-label new-column-label">New</div>
                      <div className="appointment-side new-side"style={{width:"100px"}}>
                        <div className="datetime-info new-datetime"style={{width:"110px"}}>
                          <div className="date-row">
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>Jan 15, 2025</span>
                          </div>
                          <div className="time-row">
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>2:30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="ok-btn">OK</button>
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="right-panel">
          <div className="send-btn-container">
            <button className="send-btn">Send</button>
          </div>
          
          <div className="action-menu">
            <div className="action-item">
              <span>Modify</span>
              <span className="arrow">▶</span>
            </div>
            <div className="action-item">
              <span>Delete</span>
              <span className="arrow">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
