import React, { useState } from 'react';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';

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

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      <Accordion items={items}/> 
      <br/>
      <br/>
      <SearchBar />
    </div>
  );
};
