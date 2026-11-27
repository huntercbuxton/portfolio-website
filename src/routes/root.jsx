import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import './index.css'

export default function Root() {

  const [show, setShow] = useState(false); 

  const mapItemClass = (show) => `${show ? " visible" : " hidden"}`
 
  function handleNavToggleClick() {
    console.log('handleNavToggleClick entered')
    setShow(!show);
  } 

  return (
    <>
      <div className="nav-content-wrapper">
        <Navigation
          show={show}
          itemClassName={mapItemClass(show)}
          handleNavToggleClick={handleNavToggleClick} />
        <div className={`nav-outlet-wrapper  ${mapItemClass(show)}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}