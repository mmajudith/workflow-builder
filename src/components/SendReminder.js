import React from 'react'
import { Link } from 'react-router-dom'

import EmailsTextInput from './EmailsTextInput'

const SendReminder = () =>{
  return (
    <div className="reminder-wrapper">
       <h2><Link to="/workflow-builder" style={{color: 'hsl(335, 100%, 69%)', textDecoration: 'none'}}>Back to actions</Link></h2>
      <form>
          <fieldset>
            <legend>Send reminder</legend>

            <div className="emails-wrapper">
              <label>To<sup>*</sup></label><br></br>
              <EmailsTextInput />
            </div>

            <div className="reminder-text">
              <textarea placeholder="Compose a Text..." className="reminder"/>
            </div>

            <div className="time-date-wrapper">
              <div className="date-wrapper">
                <label>Date<sup>*</sup></label><br></br>
                <input type="date" className="date"/>
              </div>
              <div className="time-wrapper">
                <label>Time<sup>*</sup></label><br></br>
                <input type="time" className="time"/>
              </div>
            </div>
            
            <div className="btn-wrapper">
              <button><Link to="/workflow-builder" style={{color: 'hsl(217, 19%, 81%)', textDecoration: 'none'}}>Save</Link></button>
              <button><Link to="/workflow-builder" style={{color: 'hsl(217, 19%, 81%)', textDecoration: 'none'}}>Cancel</Link></button>
              <button><Link to="/workflow-builder" style={{color: 'hsl(217, 19%, 81%)', textDecoration: 'none'}}>Send</Link></button>
            </div>
          </fieldset>
      </form>
    </div>
  )
}

export default SendReminder
