import React, { useState, useEffect } from 'react'

import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation/Navigation";
import './index.css'

export default function Root() {

  const [show, setShow] = useState(false);
  const [itemClassName, setItemClassName] = useState(' visible');

  function handleNavToggleClick() {
      console.log('handleNavToggleClick entered')
      setShow(!show);
  }

  useEffect(() => {
    setItemClassName(show ? " visible" : " hidden")
}, [show]);

    return (
     <>
        
          <div className="nav-content-wrapper">
            <Navigation 
            show={show} 
            itemClassName={itemClassName} 
            handleNavToggleClick={handleNavToggleClick} />
            <div className={"nav-outlet-wrapper" + itemClassName}>
              <Outlet />
            </div>
          </div>
       
     </>
    );
  }