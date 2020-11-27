import React, { useState } from 'react';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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


const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App =() => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    /*
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          labelName='Select color'
        />
      ) : null}
      <Accordion items={items}/> 
      <br/>
      <br/>
      <SearchBar />
      <br/>
      <br/>
      <h2 style={{fontSize:'25px',color:'rebeccapurple'}}>Language Translator</h2>
      <Translate />
    </div>*/

    <div>
        <Header />
        <Route path="/">
          <Accordion items={items}/> 
        </Route>

        <Route path="/wiki">
          <SearchBar />
        </Route>

        <Route path="/dropdown">
          <Dropdown 
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          labelName='Select color'
          />
        </Route>

        <Route path="/translate">
          <Translate />
        </Route>
    </div>
  );
};

export default App;