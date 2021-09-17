import React from 'react';
import { Route, Link } from 'react-router-dom';

import { ActionsNode } from './reactFlow/ActionsNode';
import { EmailActionNode } from './reactFlow/EmailActionNode';
import { ScheduleActionNode } from './reactFlow/ScheduleActionNode';
import { ReminderActionNode } from './reactFlow/ReminderActionNode';

function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <div>
          <ul className="items-wrapper">
              <li>Home</li>
              <li style={{borderBottom: '5px solid hsl(335, 100%, 69%)'}}>
                <Link to="/workflow-builder" style={{color: 'hsl(217, 19%, 81%)', textDecoration: 'none'}}>Actions</Link>
              </li>
              <li>Performance</li>
              <li>History</li>
          </ul>
        </div>
      </header>

      <Route exact path="/workflow-builder" component={ActionsNode}/>
      <Route exact path="/workflow-builder/email" component={EmailActionNode}/>
      <Route exact path="/workflow-builder/schedule" component={ScheduleActionNode}/>
      <Route exact path="/workflow-builder/reminder" component={ReminderActionNode}/>
    </div>
  );
}

export default App;
