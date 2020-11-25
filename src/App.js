import React from 'react';
import Accordion from './components/Accordion'

const items=[
{
    title:'What is react?',
    content:'Front end JS lib'
},
{
    title:'why react?',
    content:`it's cool`
},
{
    title:'How do you use React',
    content:'createing components'
}
];

export default()=>{

    return (
       <div>
            <h1>Widget app</h1>
            <br/>
        <Accordion items={items}/> 
        
        </div>
        )
};