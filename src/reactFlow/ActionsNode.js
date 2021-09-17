import React from 'react'
import ReactFlow from 'react-flow-renderer'
import { Link } from 'react-router-dom'

const elements = [
    {
        id : 1,
        data: { label: 
            <Link to="/workflow-builder/email" style={{textDecoration: 'none', color:'#0f1624'}}>
                <p className="padding">Send email</p>
                <p style={{paddingTop: '5px '}}>Click to compose an email</p>
            </Link>
        },
        position: { x: 430, y: 50},
        style: { width: '30%', margin: '20px auto', border: '2px solid hsl(211, 15%, 21%)' }
    },

    {
        id : 2,
        data: { label: 
            <Link to="/workflow-builder/schedule" style={{textDecoration: 'none', color:'#0f1624'}}>    
                <p className="padding">Schedule a meeting</p>
                <p style={{paddingTop: '5px '}}>Click to schedule a meeting</p>
            </Link>
        },
        position: { x: 430, y: 200},
        style: { width: '30%', margin: '20px auto', border: '2px solid hsl(211, 15%, 21%)'}
    },

    {
        id : 3,
        data: { label: 
            <Link to="/workflow-builder/reminder" style={{textDecoration: 'none', color:'#0f1624'}}>
                <p className="padding">Send reminder</p>
                <p style={{paddingTop: '5px '}}>Click to compose a reminder</p>
            </Link>
        },
        position: { x: 430, y: 350},
        style: { width: '30%', margin: '20px auto', border: '2px solid hsl(211, 15%, 21%)'}
    },

    { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrowclosed',style: {stroke: '#0f1624'},animated: true},
    { id: 'e1-3', source: '2', target: '3', arrowHeadType: 'arrowclosed',style: {stroke: '#0f1624'},animated: true}
]

export const ActionsNode = () => (
    <div style={{width: '100%', margin: 'auto auto', textAlign: 'center'}}>
        <ReactFlow elements={elements} style={{height: 500, width: '100%', margin: 'auto auto'}}/>
    </div>
)