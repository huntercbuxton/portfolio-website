import './index.css'


const ContentListItem = ({ title, link_url }) => <li> <a target="_blank" rel="noopener noreferrer" href={link_url}>{title}</a> </li>

export default function DarkCircles() {

    return (
        <>
            <header className="writing">
                <h1>Dark Circles</h1>
            </header>

            <main className="writing">
                <p>'Dark Circles' is my first novel, which I wrote in 2016. I put publishing on the back burner after a few rejections but am now looking for a publisher again. I've decided that the original manuscript could use some revision, so I am currently in the process of altering some themes of the story, one chapter at a time.  I will post links to the revised chapters here as they become available. If you have feedback, I would love to hear it! You can get in touch with me by email at <a href="mailto: hunterbuxton@byu.edu">hunterbuxton@byu.edu</a>.</p>

                <h2 className="writing">Contents:</h2>
                <ol className="writing contents">
                    <ContentListItem title={"Prologue"} link_url={"https://docs.google.com/document/d/1HearLOqVyTU2khalp9cl8pBysqxTdN6mG-mtBY26TJk/edit?usp=sharing"} />
                    <ContentListItem title={"Chapter 1"} link_url={"https://docs.google.com/document/d/1TIdbstOu6lrrnXog0UWIJNeRn_yyUOr8bAXZ3vr96ys/edit?usp=sharing"} />
                    <ContentListItem title={"Chapter 2"} link_url={"https://docs.google.com/document/d/1pKWV5Ac5zzHuRkg7FqpTHoEHzkhxM3F4Mui8oUhHafQ/edit?usp=sharing"} />
                    <ContentListItem title={"Chapter 3"} link_url={"https://docs.google.com/document/d/13WBWhU9e4AlizeOPzQdL7c-eURWD5FdpTxjvCCF6KMY/edit?usp=sharing"} />
                    <ContentListItem title={"Chapter 4"} link_url={"https://docs.google.com/document/d/1PlNApU_Y2F2RLBEAcvyFKxTvvvWMBqvPWOKAspQ4XyA/edit?usp=sharing"} />
                </ol>
            </main>
        </>
    )
}