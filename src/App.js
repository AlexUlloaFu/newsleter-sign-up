import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import {
  Navigate,
  Route , Routes
} from "react-router-dom"

import SuccessCard from './components/SuccessCard';
import FormCard from './components/FormCard';


function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Routes>
        <Route path='/'  element={<FormCard/>}/>
        <Route 
          path='/success'  
          element={
            useSelector(({email}) => email) 
            ? <SuccessCard/>
            : <Navigate replace to={'/'} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
