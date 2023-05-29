
import {Footer} from '../Template'

import { useParams } from 'react-router-dom'

import VisAVis from './VisAVis'
import DarkCircles from './DarkCircles'

import './index.css'

export default function Writing(props) {

    let { title } = useParams();

    if (title === 'vis-a-vis') {
        return (
            <>
                <VisAVis/>
                <Footer/>
            </>
        )
    } else if (title === 'dark-circles') {
        return (
            <>
                <DarkCircles/>
                <Footer/>
            </>
        )
    } else {
        return (
            <>
                <h1>Writing</h1>
                <main>
                    <ul>
                        <li>    
                            <a href="/writing/vis-a-vis" >Vis à Vis</a>
                        </li>
                        <li>
                            <a href="/writing/dark-circles" >Dark Circles</a>
                        </li>
                    </ul>
                </main>
                <Footer/>
            </>
        )
    }
    
}