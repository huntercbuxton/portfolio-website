
import { Footer } from '../Template'

import { useParams } from 'react-router-dom'

import VisAVis from './VisAVis'
import DarkCircles from './DarkCircles'

import './index.css'


const WritingPortfolio = () => {
    return (
        <>
           <header className="writing">
                <h1>Writing</h1>
           </header>
            <main className="writing">
                <ul className="writing">
                    <li>
                        <a href="/writing/vis-a-vis" >Vis à Vis</a>
                    </li>
                    <li>
                        <a href="/writing/dark-circles" >Dark Circles</a>
                    </li>
                </ul>
            </main>
        </>
    )
}


export default function Writing(props) {

    let { title } = useParams();

    if (title === 'vis-a-vis') {
        return (
            <>
                <VisAVis />
                <Footer />
            </>
        )
    } else if (title === 'dark-circles') {
        return (
            <>
                <DarkCircles />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <WritingPortfolio />
                <Footer />
            </>
        )
    }

}