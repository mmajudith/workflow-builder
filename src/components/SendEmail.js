import React from 'react'
import { Link } from 'react-router-dom'

import EmailsTextInput from './EmailsTextInput'

const SendEmail = () =>{

  return (
    <div className="send-email-wrapper">
      <h2><Link to="/workflow-builder" style={{color: 'hsl(335, 100%, 69%)', textDecoration: 'none'}}>Back to actions</Link></h2>
      <form >
        <fieldset>
          <legend>Send an email notification</legend>

            <div className="multiple-email-wrapper">
              <label>To<sup>*</sup></label><br></br>
              <EmailsTextInput />
            </div>

            <div className="email">
              <label>From<sup>*</sup></label><br></br>
              <input type="email" placeholder="Enter your own email..." className="email"/>
            </div>

            <div className="subject-wrapper">
              <label>Subject<sup>*</sup></label><br></br>
              <input type="text" placeholder="Subject..." className="subject"/>
            </div>

            <div className="message-body-wrapper">
              <textarea placeholder="Compose a message..." />
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

export default SendEmail
