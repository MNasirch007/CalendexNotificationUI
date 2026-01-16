import React from 'react'
import './TemplateList.css'

const ThirdList = ({ onNext }) => {
  const templates = [
    {
      name: 'Slot Updated Notification',
      triggerType: 'Slot Update',
      channels: 'Push Notification, In App',
      createdBy: 'Admin',
      createdDate: '24 June 2026',
      status: 'Active'
    },
    {
      name: 'Appointment Reminder',
      triggerType: 'Time Based',
      channels: 'Push Notification, In App',
      createdBy: 'Marketing Team',
      createdDate: '24 June 2026',
      status: 'In Active'
    },
    {
      name: 'Slot Unavailable Alert',
      triggerType: 'Slot Unavailable',
      channels: 'Push Notification, In App',
      createdBy: 'Admin',
      createdDate: '24 June 2026',
      status: 'Active'
    },
    {
      name: 'Booking Confirmation',
      triggerType: 'Appointment Booking',
      channels: 'Push Notification',
      createdBy: 'Marketing Team',
      createdDate: '24 June 2026',
      status: 'Active'
    },
    {
      name: 'Slot Updated Notification',
      triggerType: 'Slot Update',
      channels: 'Push Notification',
      createdBy: 'Admin',
      createdDate: '24 June 2026',
      status: 'Active'
    },
    {
      name: 'Appointment Reminder',
      triggerType: 'Time Based',
      channels: 'Push Notification, In App',
      createdBy: 'Marketing Team',
      createdDate: '24 June 2026',
      status: 'Active'
    },
    {
      name: 'Slot Unavailable Alert',
      triggerType: 'Slot Unavailable',
      channels: 'Push Notification, In App',
      createdBy: 'Marketing Team',
      createdDate: '24 June 2026',
      status: 'In Active'
    },
    {
      name: 'Booking Confirmation',
      triggerType: 'Appointment Booking',
      channels: 'Push Notification',
      createdBy: 'Marketing Team',
      createdDate: '24 June 2026',
      status: 'In Active'
    }
  ]

  return (
    <div className="template-list-content">
      {/* Table Section */}
      <div className="template-table-container">
        <table className="template-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Trigger Type</th>
              <th>Channels</th>
              <th>Created By</th>
              <th>Created Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr key={index} className="template-table-row">
                <td className="template-name">
                  <div className="name-with-circle">
<span
                      className={`name-circle ${index === 0 ? 'selected' : ''}`}
                      style={index === 0 ? { backgroundColor: '#FFD705', cursor: 'pointer' } : {}}
                      onClick={index === 0 ? () => console.log('First circle clicked') : undefined}
                    ></span>                    {template.name}
                  </div>
                </td>
                <td className="trigger-type">{template.triggerType}</td>
                <td className="channels">{template.channels}</td>
                <td className="created-by">{template.createdBy}</td>
                <td className="created-date">{template.createdDate}</td>
                <td className="status">
                  <span className={`status-badge ${template.status === 'Active' ? 'active' : 'inactive'}`}>
                    <span className="status-circle"></span>
                    {template.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Next Button */}
      <div className="next-button-container">
        <button className="next-button" onClick={onNext} style={{marginLeft:"30rem",marginTop:"6rem",width:"300px",height:"40px",color:"#ffff",backgroundColor:"#FFD705",borderRadius:"8px"}}>Next</button>
      </div>
    </div>
  )
}

export default ThirdList