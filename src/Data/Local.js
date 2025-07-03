import React from 'react'
import { useState,useEffect } from 'react';
import SignupPage from '../Component/SignupPage/SignupPage';

 export function Local() {
   const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('SignupData');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

}

export default Local
