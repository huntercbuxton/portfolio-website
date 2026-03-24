
import { Footer } from '../Template'

import { useParams } from 'react-router-dom'

import VisAVis from './VisAVis'
import DarkCircles from './DarkCircles'

import './index.css'


const WritingPortfolioPreview = ({ title, link, genre }) => {
    return (<li>
        <a href={link} >{title}</a>
        {genre && <span >{`    (${genre})`}</span>}
    </li>)
}


const WritingPortfolio = () => {
    return (
        <>
            <header className="writing">
                <h1>Writing</h1>
            </header>
            <main className="writing">
                <ul className="writing">
                    <WritingPortfolioPreview
                        title={"Vis à Vis"}
                        link={"/writing/vis-a-vis"}
                        genre={"nonfiction essay"} />
                    <WritingPortfolioPreview
                        title={"Dark Circles"}
                        link={"/writing/dark-circles"}
                        genre={"novel"} />

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