import { Settings } from 'lucide-react'
import './TemplateHeader.css'
import header1 from '../assets/header1.png'

const SixthHeader = () => {
  return (
    <header className="template-header">
      <div className="template-header-content">
        <img src={header1} alt="" style={{height:"30px",width:"30px"}}/>
        
        <div className="template-header-left">
          <h1 className="template-header-title">Template Header Notification</h1>
        </div>

        <div className="template-header-right" style={{marginLeft:"auto"}}>
          <button className="template-add-button">Add</button>
          <button className="template-settings-button">
            <Settings className="template-settings-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default SixthHeader
