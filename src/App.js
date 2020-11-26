import React from 'react';
import Dropdown from './components/Dropdown'


const options=[
    {
        label:'Color red',
        value:'red'
    },
    {
        label:'Color green',
        value:'green'
    },
    {
        label:'Color blue',
        value:'blue'
    }
];

export default()=>{

    return (
            <div>
                <Dropdown options={options}/>
            </div>
        );
};