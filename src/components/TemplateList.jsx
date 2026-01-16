import React from 'react'
import './TemplateList.css'

const TemplateList = () => {
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
    <div className="template-list-content"style={{height:"523px"}}>
      {/* Table Section */}
      <div className="template-table-container"style={{height:"523px"}}>
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
                    <span className="name-circle"></span>
                    {template.name}
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
    </div>
  )
}

export default TemplateList