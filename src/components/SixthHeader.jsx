import { Settings } from 'lucide-react'
import './TemplateHeader.css'
import header1 from '../assets/header1.png'

const SixthHeader = () => {
  return (
    <header className="template-header h-auto py-2 sm:h-[60px] sm:py-0">
      <div className="template-header-content flex-col sm:flex-row gap-2 sm:gap-0">
        <div className="flex items-center gap-4">
          <img src={header1} alt="" className="hidden sm:block" style={{height:"30px",width:"30px"}}/>

          <div className="template-header-left">
            <h1 className="template-header-title">Template Header Notification</h1>
          </div>
        </div>

        <div className="template-header-right w-full sm:w-auto justify-end" style={{marginLeft:"auto"}}>
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
