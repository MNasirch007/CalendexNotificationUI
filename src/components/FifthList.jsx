import './FifthList.css'

const FifthList = ({ onNext }) => {
  return (
    <div className="notification-campaign">
      <div className="campaign-body">
        <div className="main-content flex flex-col lg:flex-row">
          <div className="left-card w-full lg:w-1/3" style={{marginRight:"0"}}>
            <div className="card">
              <div className="card-label">Template Name</div>
              <div className="card-value">Slot Updated Notification</div>
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>
          
          <div className="cards-grid w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2" style={{marginRight:"0"}}>
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
