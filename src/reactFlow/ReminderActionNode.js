import React from 'react';
import ReactFlow from 'react-flow-renderer';

import SendReminder from '../components/SendReminder';

const element = [

    {
        id : 1,
        data: { label: <SendReminder />},
        position: { x: 0, y: 0},
        style: { width: '50%', position: 'relative', left: '45%', background: 'hsl(211, 15%, 21%)' }
    }

]

export const ReminderActionNode = () => (
    <div style={{width: '100%'}}>
        <ReactFlow elements={element} style={{height: 600, width: '100%'}}/>
    </div>
)
