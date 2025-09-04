
import { Footer } from '../Template'
import './index.css'

export default function Portfolio(props) {
    return (
        <>
            <h1>Portfolio</h1>
            <section>
                <h2>Web Design:</h2>
                <ul class="portfolio">
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="https://olivetreesolidarity.com/logo_fullsize.png" alt="olive tree solidarity logo" />
                            <h3 class="portfolio">Olive Tree Solidarity (website)</h3>
                        </header>
                        <p>A resource of educational material and community events organized by the great people of Olive Tree Solidarity Coalition in Provo, UT.  </p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="https://crochetedly.com/img/crochetedly_thumbnail_logo.PNG" alt="crochetedly logo" />
                            <h3 class="portfolio">Crochetedly</h3>
                        </header>
                        <p>A portfolio of the beautiful crocheted creations made by my wonderful partner, Tori (happy birthday!) Go to <a href="https://crochetedly.com">crochetedly.com</a>  to check out the designs currently available for purchase on her shop, or <a href="https://crochetedly.com/socials">request to commission</a> your own unique idea.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img src="https://katherynstottbuxton.com/images/favicon_io/favicon.ico" alt="Katheryn Stott Buxton Artist Logo" />
                            <h3 class="portfolio"><a target="_blank" rel="noopener" href="https://katherynstottbuxton.com">katherynstottbuxton.com</a></h3>
                        </header>
                        <p>This site showcases the amazing expressionist artwork of my wonderful mother. It is updated regularly with her latest gallery exhibits and other work.  It also includes a blog, where she shares her creative process and the inspiration for her current work.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/logo.png" alt="Hunter Buxton Logo" />
                            <h3 class="portfolio"><a target="_blank" rel="noopener" href="https://huntercbuxton.com">huntercbuxton.com</a></h3>
                        </header>
                        <p>This site, and the various subdomains set up as support pages, etc.</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Apps & Web Services</h2>
                <ul class="portfolio">
                    {/* 
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="https://shoop.fashion" alt="shoop logo" />
                                <h3 class="portfolio">Shoop</h3>
                        </header>
                        <p>An AI driven shopping assistant which helps you search out your unique fit by unconventional means.  Shoop provides detailed measurement analysis so you never have to visit a fitting room or have to return a wrong size.  Even better, you'll finally escape the repetitive, off-topic search pool of search sponsored or trending content repetitive, incomplete search results composed </p>
                    </li>
                     <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="https://koficopy.io" alt="shoop logo" />
                                <h3 class="portfolio">Kofi Copy</h3>
                        </header>
                        <p>A suite of services and libraries you can use to copy data and views from your kofi shop, and integrate your shop into custome web applications.</p>
                    </li>  
                    */}
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/patzer-icon.png" alt="patzer logo" />
                            <h3 class="portfolio">Patzer (iOS application)</h3>
                        </header>
                        <p>This is my current passion project: an augmented-reality chess application. Launching on the Apple App Store August 2026.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/personalkanban_favicon.ico" alt="personalkanban logo" />
                            <h3 class="portfolio">PersonalKanban Productivity app for iOS+iPadOS (discontinued)</h3>
                        </header>
                        <p>An implementation of the Kanban Method for personal workflows, currently available on the App Store. You can visit the <a rel="noopener" href="https://personalkanban.huntercbuxton.com">support site</a> or view the public <a target="_blank" rel="noopener" href="https:github.com/huntercbuxton/PersonalKanbanApp">GitHub repo</a> to learn more.</p>
                    </li> 
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/transparent-MURCH_LOGO-TrianglesOnly.png" alt="MURCH logo" />
                            <h3 class="portfolio"><a target="_blank" rel="noopener" href="#">'Murch' fit-matching tool (discontinued)</a></h3>
                        </header>
                        <p>Finding clothes with a fit you like can be frustrating, especially when shopping online.  On MURCH, you can find clothes which match your preferred fit easily.  Just tell us what clothing you're already wearing, and MURCH will find items which match the exact cut and size in any brand you like. This site is an ongoing collaboration with some of my friends from BYU: Hikaru Purba, Ethan Elliot, and Colton Swenson.</p>
                    </li>
                </ul>
            </section>
            <Footer />
        </>
    )
}