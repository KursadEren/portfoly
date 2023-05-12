import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';

const Content = () => {
  const [data, setData] = useState([
    { id: 1, title: 'Öğe 1' },
    { id: 2, title: 'Öğe 2' },
    { id: 3, title: 'Öğe 3' },
  ]);

  const handleAddItem = () => {
    const newItem = { id: data.length + 1, title: `Öğe ${data.length + 1}` };
    setData([...data, newItem]);
  };

  return (
    <div className='w-full flex-row flex justify-center' >
   
        {data.map((item) => (
          
            <div className=' flex-1 mx-4  bg-pink-400 '>
            <div key={item.id}>{item.title}</div>
            </div>
      ))}
     
      <button variant="contained" className='text-black' onClick={handleAddItem}>
        Öğe Ekle
      </button>
   
    </div>
  );
};

export default Content;
