import React, { useEffect, useState } from 'react';
import axios from 'axios';
const key='AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert=({lang,text})=>{

    const[outputText,SetOutputText]=useState('');
    const[debouncedText,setDebouncedText]=useState(text);


    useEffect(()=>{

        const timeout=setTimeout(()=>{
            setDebouncedText(text);
        },500)

        return ()=>{

            clearTimeout(timeout);
        }
    },[text]);


    useEffect(()=>{
        
    const googleTranslateApi= async()=>{
      
       const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',{},{

            params:{
                q:debouncedText,
                target:lang.value,
                key:key
            }
            });

     SetOutputText(data.data.translations[0]);

    } ;

    googleTranslateApi();

    },[lang,debouncedText]);



    return(
        <div>
        <h2 style={{fontSize:'20px'}}>Detected language in : {outputText.detectedSourceLanguage}</h2>
        <hr/>
            <h2 style={{color:'blue',fontSize:'40px'}}>{outputText.translatedText}</h2>
        </div>
    );

};

export default Convert;