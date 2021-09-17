import React from 'react';
import ReactFlow from 'react-flow-renderer';

import SendEmail from '../components/SendEmail';

const element = [

    {
        id : 1,
        data: { label: <SendEmail />},
        position: { x: 0, y: 0},
        style: { width: '50%', position: 'relative', left: '45%', background: 'hsl(211, 15%, 21%)'}
    }
]

export const EmailActionNode = () => (
    <div style={{width: '100%'}}>
        <ReactFlow elements={element} style={{height: 700, width: '100%'}}/>
    </div>
)
