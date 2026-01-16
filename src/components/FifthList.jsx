import './FifthList.css'

const FifthList = ({ onNext }) => {
  return (
    <div className="notification-campaign">
      <div className="campaign-body">
        <div className="main-content">
          <div className="left-card"style={{marginRight:"3px"}}>
            <div className="card">
              <div className="card-label">Template Name</div>
              <div className="card-value">Slot Updated Notification</div>
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>
          
          <div className="cards-grid"style={{marginRight:"6rem"}}>
            <div className="card">
              <div className="card-label">Campaign Name</div>
              <div className="card-value">Slot Updated Notification</div>
              <div className="dropdown-arrow">▼</div>
            </div>
            
            <div className="card">
              <div className="card-label">Trigger</div>
              <div className="card-value">Appointment Booked</div>
              <div className="dropdown-arrow">▼</div>
            </div>
            
            <div className="card">
              <div className="card-label">Notification Purpose</div>
              <div className="card-value">Slot Updated</div>
              <div className="dropdown-arrow">▼</div>
            </div>
            
            <div className="card">
              <div className="card-label">Repeat Pattern</div>
              <div className="card-value">Once</div>
              <div className="dropdown-arrow">▼</div>
            </div>
            
            <div className="card">
              <div className="card-label">Channel</div>
              <div className="card-value">Both (Push Notification, In App)</div>
              <div className="dropdown-arrow">▼</div>
            </div>
            
            <div className="card">
              <div className="card-label">Group1</div>
              <div className="card-value">Group 1 (256 people)</div>
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>
        </div>
        
        <div className="next-button5-container">
          <button className="next-btn5" onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FifthList;
