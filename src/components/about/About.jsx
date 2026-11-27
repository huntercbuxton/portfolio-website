import { Footer } from '../Template'
import './index.css'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <main>
                <div className="about-content">
                    <img src="/img/ranier.png" alt="Hiking selfie on Mt. Ranier" />
                    <p>My name is Hunter Buxton.  I&apos;m an entrepreneur, mobile app developer, web developer, and author. I recently graduated from Brigham Young University, where I earned two bachelor&apos;s degrees, one in Mathematics and another in Economics. My hobbies are marathon running, rock climbing, and collecting antique books.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}