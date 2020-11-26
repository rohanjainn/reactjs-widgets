import Axios from 'axios';
import React, { useEffect, useState } from 'react';

/*
class SearchBar extends React.Component{


    render(){

        return(
            <div className="ui segment">
                <form className="ui form">
                    Search Wiki<input type="text" />
                </form>
            </div>
        )
    }
}
*/

const SearchBar=(props)=>{

    const [term, setTerm] = useState('reactjs');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
    console.log("results",results);
    

    useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedTerm(term);
        }, 1000);
    
        return () => {
          clearTimeout(timerId);
        };
      }, [term]);

    useEffect(() => {
        const search = async () => {
          const { data } = await Axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedTerm,
            },
          });
    
          setResults(data.query.search);
        };
        search();
      }, [debouncedTerm]);
    
    
    const searchlist=results.map((result)=>{
        return (
            <div key={result.pageid} className="item">
             <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
             </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>)
    })
    
    return(
        <div >
            <div className="ui form" >
                <div className="field">
                    Search Wiki<input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
                <div className="ui celled list">
                    {searchlist}
                </div>
            </div>
            
        </div>
    )
}
export default SearchBar;