
import {Footer} from '../Template'
import './index.css'

export default function Portfolio(props) {
    return (
        <>
            <h1>Portfolio</h1>
            <section>
                <h2>Mobile Apps:</h2>
                <ul class="portfolio">
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/personalkanban_favicon.ico" alt="personalkanban logo" />
                                <h3 class="portfolio">PersonalKanban (iOS application)</h3>
                        </header>
                        <p>An implementation of the Kanban Method for personal workflows, currently available on the App Store. You can visit the <a rel="noopener" href="https://personalkanban.huntercbuxton.com">support site</a> or view the public <a target="_blank" rel="noopener" href="https:github.com/huntercbuxton/PersonalKanbanApp">GitHub repo</a> to learn more.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/patzer-icon.png" alt="patzer logo" />
                                <h3 class="portfolio">Patzer (iOS application)</h3>
                        </header>
                        <p>This is my current project: an augmented-reality chess application. Coming to the App store in April 2023.</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Websites:</h2>
                <ul class="portfolio">
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon"  src="/img/transparent-MURCH_LOGO-TrianglesOnly.png" alt="MURCH logo"/>
                                <h3 class="portfolio"><a target="_blank" rel="noopener" href="https://murch.club">murch.club (beta version)</a></h3>
                        </header>
                        <p>Finding clothes with a fit you like can be frustrating, especially when shopping online.  On MURCH, you can find clothes which match your preferred fit easily.  Just tell us what clothing you're already wearing, and MURCH will find items which match the exact cut and size in any brand you like. This site is an ongoing collaboration with some of my friends from BYU: Hikaru Purba, Ethan Elliot, and Colton Swenson.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img  src="https://katherynstottbuxton.com/images/favicon_io/favicon.ico" alt="Katheryn Stott Buxton Artist Logo"/>
                                <h3 class="portfolio"><a target="_blank" rel="noopener" href="https://katherynstottbuxton.com">katherynstottbuxton.com</a></h3>
                        </header>
                        <p>This site showcases the amazing expressionist artwork of my wonderful mother. It is updated regularly with her latest gallery exhibits and other work.  It also includes a blog, where she shares her creative process and the inspiration for her current work.</p>
                    </li>
                    <li>
                        <header class="portfolio-item">
                            <img class="portfolio-icon" src="/img/logo.png" alt="Hunter Buxton Logo"/>
                                <h3 class="portfolio"><a target="_blank" rel="noopener" href="https://huntercbuxton.com">huntercbuxton.com</a></h3>
                        </header>
                        <p>This site, and the various subdomains set up as support pages, etc.</p>
                    </li>
                    {/* <li>
                        <header class="portfolio-item">
                            <img src="/img/lindastaker_favicon.ico" alt="Linda Staker Favicon" />
                                <h3 class="portfolio"><a target="_blank" rel="noopener" href="http://lindastakerart.com">lindastakerart.com</a></h3>
                        </header>
                        <p>This website was commissioned by an artist who lives near me and wanted a place to showcase her work. It is the first website I created after graduating in April 2020. (The final touches have been slightly delayed, due to covid-related precautions, but will be finished soon). Have a look at this artist's wonderful creative work!</p>
                    </li> */}
                </ul>
            </section>
            {/* <section>
                <h2>Scientific/Mathematics Tools</h2>
                <ul>
                    <li>
                        <header class="portfolio-item">
                            <h3>Kinetic Monte Carlo Simulations of Crystal Growth Behavior</h3>
                        </header>
                        <p>An ongoing project which I started during my research assistant position at Brigham Yound University, under the instruction of Dr. Tim Krumwiede. This project simulates the growth of crystalline structures at an atomic scale, by utilizing a Kinetic Monte Carlo implementation to predict bonding based on initial conditions such as temperature, position, and initial structure. The original purpose of this research was to provide a firmare solution to the problem of unpredictable behavior of materials applied with 3D printing hardware.</p>
                    </li>
                </ul>
            </section> */}
            <Footer/>
        </>
    )
}