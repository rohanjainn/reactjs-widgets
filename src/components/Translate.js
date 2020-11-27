import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options=[
    {
        label:'French',
        value:'fr'
    },
    {
        label:'Kannada',
        value:'kn'
    },
    {
        label:'Hindi',
        value:'hi'
    }
];

const Translate=()=>{

    const[lang,setLang]=useState(options[0]);
    const[text,setText]=useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label style={{fontSize:'20px'}}>Enter text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown options={options} selected={lang} onSelectedChange={setLang} labelName='Select language to Translate'/>
            <br/>
            <Convert lang={lang} text={text} />
            <h2 style={{fontSize:'20px'}}>Output in :{lang.label}</h2>
        </div>
    );
};

export default Translate;