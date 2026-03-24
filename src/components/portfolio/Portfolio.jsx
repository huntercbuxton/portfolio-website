import React from 'react'
import { Footer } from '../Template'
import './index.css'

const PortfolioListItem = ({ title, link_url, thumbnail, thumbnail_desc, description, technologies, children }) => {
    return (
        <li>
            <header class="portfolio-item">
                <img class="portfolio-icon" src={thumbnail} alt={thumbnail_desc} />
                <h3 class="portfolio">
                    {link_url ? <a target="_blank" rel="noopener noreferrer" href={link_url}>{title}</a> : <>{title}</>}
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
                        link_url={"https://www.olivetreesolidarity.com"}
                        thumbnail={"https://olivetreesolidarity.com/logo_fullsize.png"}
                        thumbnail_desc={"Olive Tree Solidarity Coalition logo"}
                        description={"A resource of educational material and community events organized by the great people of Olive Tree Solidarity Coalition in Provo, UT. Created with "}
                        technologies={['React', 'JavaScript', 'css']} />
                    <PortfolioListItem
                        title={"Crochetedly Portfolio & Shop"}
                        link_url={"https://www.crochetedly.com"}
                        thumbnail={"https://crochetedly.com/img/crochetedly_thumbnail_logo.PNG"}
                        thumbnail_desc={"Crochetedly logo"}
                        description={''}
                        technologies={['React', 'JavaScript', 'css']} >
                        <p>A portfolio of the beautiful crocheted creations made by my wonderful partner, Tori (happy birthday!) Go to <a href="https://crochetedly.com/shop">crochetedly.com/shop</a>  to check out the designs currently available for purchase on her shop, or <a href="https://crochetedly.com/socials">request to commission</a> your own unique idea.</p>
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
                    <PortfolioListItem
                        title={"Patzer (iOS application)"}
                        link_url={""}
                        thumbnail={"/img/patzer-icon.png"}
                        thumbnail_desc={"Patzer logo"}
                        description={"This is my current passion project: an augmented-reality chess application. Launching on the Apple App Store August 2026."}
                        technologies={['Swift', 'ARKit', 'Unity', 'Firebase']} />
                    <PortfolioListItem
                        title={"PersonalKanban Productivity app for iOS+iPadOS (discontinued)"}
                        link_url={"https://github.com/huntercbuxton/PersonalKanbanApp"}
                        thumbnail={"/img/personalkanban_favicon.ico"}
                        thumbnail_desc={"PersonalKanban logo"}
                        description={""}
                        technologies={['Swift', 'CoreData', 'Firebase RTDB']} >
                        <p>An implementation of the Kanban Method for personal workflows, currently available on the App Store. You can view the public <a target="_blank" rel="noopener noreferrer" href="https://github.com/huntercbuxton/PersonalKanbanApp">GitHub repo</a>  {/* or visit the <a rel="noopener" href="https://personalkanban.huntercbuxton.com">support site</a> or */} to learn more.</p>
                    </PortfolioListItem>
                    <PortfolioListItem
                        title={"SHOOP AI fit-matching tool (discontinued)"}
                        link_url={"https://shoop.fashion"}
                        thumbnail={"/img/shoop_icon.png"}
                        thumbnail_desc={"SHOOP logo"}
                        description={"Finding clothes with a fit you like can be frustrating, especially when shopping online. With SHOOP, your own AI personal shopper, you can find clothes which match your preferred fit easily. Shoop uses an extensive database of clothing measurements and other metadata, to run an AI driven search algorithm which matches the fit of your favorite clothes with new designs from other brands."}
                        technologies={['Python', 'OpenAi API', 'AWS Amplify/S3/Lambdas', 'DynamoDB', 'GraphQL', 'Selenium', 'React']} />
                </ul>
            </section>
            <Footer />
        </>
    )
}