import Bot from './screens/Form/bot';
import Landing from './screens/Landing/landing';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  useEffect(() => {
    document.title = "This is a title"
  }, [])
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path = "/bot" element={<Bot/>}/>
          <Route path = "/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
  
}

export default App;
