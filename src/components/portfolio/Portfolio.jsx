import React from 'react'
import { Footer } from '../Template'
import './index.css'

const PortfolioListItem = ({ title, link_url, thumbnail, thumbnail_desc, description, technologies, children }) => {
    return (
        <li>
            <header class="portfolio-item">
                <img class="portfolio-icon" src={thumbnail} alt={thumbnail_desc} />
                <h3 class="portfolio">
                    {link_url ? <a target="_blank" rel="noopener" href={link_url}>{title}</a> : <>{title}</>}
                </h3>
            </header>
            {description && (<p>{description} </p>)}
            {children}
            {technologies && <p>Technologies: {technologies.join(', ')}</p>}
        </li>
    )
}


export default function Portfolio(props) {
    return (
        <>
            <h1>Portfolio</h1>
            <section>
                <h2>Web Design:</h2>
                <ul class="portfolio">
                    <PortfolioListItem
                        title={"Tootles-kofi (react library)"}
                        thumbnail={"/img/npm_logo.png"}
                        thumbnail_desc={"npm logo"}
                        link_url={"https://www.npmjs.com/package/tootles-kofi"}
                        description={"A react library to help web developers clone a kofi shop page in their own website (since kofi does not support embedding)."}
                        technologies={['React', 'TypeScript', 'css']} />
                    <PortfolioListItem
                        title={"Olive Tree Solidarity Coalition Website"}
                        link_url={"https://www.npmjs.com/package/tootles-kofi"}
                        thumbnail={"https://olivetreesolidarity.com/logo_fullsize.png"}
                        thumbnail_desc={"Olive Tree Solidarity Coalition logo"}
                        description={"A resource of educational material and community events organized by the great people of Olive Tree Solidarity Coalition in Provo, UT. Created with "}
                        technologies={['React', 'JavaScript', 'css']} />
                    <PortfolioListItem
                        title={"Crochetedly Artist Portfolio & Store"}
                        link_url={"https://www.npmjs.com/package/tootles-kofi"}
                        thumbnail={"https://crochetedly.com/img/crochetedly_thumbnail_logo.PNG"}
                        thumbnail_desc={"Crochetedly logo"}
                        description={''}
                        technologies={['React', 'JavaScript', 'css']} >
                        <p>A portfolio of the beautiful crocheted creations made by my wonderful partner, Tori (happy birthday!) Go to <a href="https://crochetedly.com">crochetedly.com</a>  to check out the designs currently available for purchase on her shop, or <a href="https://crochetedly.com/socials">request to commission</a> your own unique idea.</p>
                    </PortfolioListItem>
                    <PortfolioListItem
                        title={"Katheryn Stott Buxton Artist Portfolio"}
                        link_url={"https://katherynstottbuxton.com"}
                        thumbnail={"https://katherynstottbuxton.com/images/favicon_io/favicon.ico"}
                        thumbnail_desc={"Katheryn Stott Buxton Artist Logo"}
                        description={"This site showcases the amazing expressionist artwork of my wonderful mother. It is updated regularly with her latest gallery exhibits and other work.  It also includes a blog, where she shares her creative process and the inspiration for her current work."}
                        technologies={['PHP', 'JavaScript', 'JQuery', 'css']} />
                    <PortfolioListItem
                        title={"Personal Website"}
                        link_url={"https://huntercbuxton.com"}
                        thumbnail={"/img/logo.png"}
                        thumbnail_desc={"Hunter C Buxton Logo"}
                        description={"This site, and the various subdomains set up as support pages, etc."}
                        technologies={['React', 'JavaScript', 'css']} />
                </ul>
            </section>
            <section>
                <h2>Apps & Services</h2>
                <ul class="portfolio">
                    {/* 
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="https://shoop.fashion" alt="shoop logo" />
                                <h3 class="portfolio">Shoop</h3>
                        </header>
                        <p>An AI driven shopping assistant which helps you search out your unique fit by unconventional means.  Shoop provides detailed measurement analysis so you never have to visit a fitting room or have to return a wrong size.  Even better, you'll finally escape the repetitive, off-topic search pool of search sponsored or trending content repetitive, incomplete search results composed </p>
                    </li> 
                    */}
                    <PortfolioListItem
                        title={"Patzer (iOS application)"}
                        link_url={""}
                        thumbnail={"/img/patzer-icon.png"}
                        thumbnail_desc={"Patzer logo"}
                        description={"This is my current passion project: an augmented-reality chess application. Launching on the Apple App Store August 2026."}
                        technologies={['Swift', 'ARKit', 'Unity', 'Firebase']} />
                    <PortfolioListItem
                        title={"PersonalKanban Productivity app for iOS+iPadOS (discontinued)"}
                        link_url={""}
                        thumbnail={"/img/personalkanban_favicon.ico"}
                        thumbnail_desc={"PersonalKanban logo"}
                        description={""}
                        technologies={['Swift', 'CoreData', 'Firebase RTDB']} >
                        <p>An implementation of the Kanban Method for personal workflows, currently available on the App Store. You can visit the <a rel="noopener" href="https://personalkanban.huntercbuxton.com">support site</a> or view the public <a target="_blank" rel="noopener" href="https:github.com/huntercbuxton/PersonalKanbanApp">GitHub repo</a> to learn more.</p>
                    </PortfolioListItem>
                    <PortfolioListItem
                        title={"MURCH fit-matching tool (discontinued)"}
                        link_url={""}
                        thumbnail={"/img/transparent-MURCH_LOGO-TrianglesOnly.png"}
                        thumbnail_desc={"MURCH logo"}
                        description={"Finding clothes with a fit you like can be frustrating, especially when shopping online.  On MURCH, you can find clothes which match your preferred fit easily.  Just tell us what clothing you're already wearing, and MURCH will find items which match the exact cut and size in any brand you like. This site is an ongoing collaboration with some of my friends from BYU: Hikaru Purba, Ethan Elliot, and Colton Swenson."}
                        technologies={['React', 'Python', 'Selenium', 'AWS Amplify/S3/Lambdas', 'DynamoDB', 'GraphQL']} />
                </ul>
            </section>
            <Footer />
        </>
    )
}