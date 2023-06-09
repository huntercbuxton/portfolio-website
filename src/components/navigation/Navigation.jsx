import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'

import './index.css'

export default function Navigation(props) {

    const { show, itemClassName, handleNavToggleClick } = props;

    return (
        <>
            <nav className="navigation">
                <div className="navigation-toggle">
                    <FontAwesomeIcon onClick={handleNavToggleClick} icon={faBars} size="2x" className="side-navbar-toggle" />
                </div>
                <div className={"navbar" + itemClassName}>
                    <div className="navigation-item navigation-brand">
                        <a href='/' onClick={handleNavToggleClick} className="navigation-brand">
                            <img src="/img/logo.png" alt="Hunter C Buxton website logo" />
                        </a>
                    </div>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <Link to={`about`} onClick={handleNavToggleClick}>About</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to={`portfolio`} onClick={handleNavToggleClick}>Portfolio</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to={`writing`} onClick={handleNavToggleClick}>Writing</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to={`contact`} onClick={handleNavToggleClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
