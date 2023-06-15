import React from 'react';

import { Footer } from '../Template'

import './index.css'


const ProfileLink = props => <a href={props.url} className="profile-link"> {props.children} </a>

export default function Contact(props) {

    const linkedProfiles = [
        {
            platform: 'Github',
            url: 'https://www.github.com/huntercbuxton',
            handle: 'huntercbuxton'
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/huntercbuxton',
            handle: 'huntercbuxton'
        },
        {
            platform: 'Twitter',
            url: 'https://www.twitter.com/HCBuxton',
            handle: 'HCBuxton'
        },
        {
            platform: 'Instagram',
            url: 'https://www.instagram.com/huntercbuxton',
            handle: 'huntercbuxton'
        }
    ];

    return (
        <>
            <h1>Contact</h1>
            <main>
                <ul className="contact">
                    {linkedProfiles.map((profile, i) => {
                        return (
                            <li key={i} className="profile-link">
                                <ProfileLink url={profile.url}> 
                                    <i class={`fa fa-${profile.platform.toLowerCase()} link-icon`} ></i>
                                </ProfileLink>
                                <a className="linked-text text-box" href={profile.url}>{`@${profile.handle}`}</a>
                            </li>
                        );
                    })}
                </ul>
                <p>If you are looking for support regarding one of my apps or websites, please email <a target="_blank" href="mailto: huntercbuxton@icloud.com">huntercbuxton@icloud.com</a> instead for a faster reply.</p >
            </main>
            <Footer />
        </>
    )
}