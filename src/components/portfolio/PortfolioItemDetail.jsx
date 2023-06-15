import React, { useState, useEffect } from 'react';


const DownloadLink = ({link, downloadSource }) => {
    const [downloadSrcTxt, setDownloadSrcTxt] = useState(downloadSource);

    useEffect(()=>{
        let tempDownloadSource = downloadSource.trim().length === 0 ? downloadSource.trim() : 'here';
        setDownloadSrcTxt(tempDownloadSource);
    }, [downloadSource, setDownloadSrcTxt]);

    return <p>download <a href={link} rel='noopener'>{downloadSrcTxt}</a></p>;
}

const PortfolioItemDetail = (props) => {

    const { 
        name, 
        logo, 
        category, 
        platforms, 
        supportPageLink, 
        downloadLink, 
        downloadSource, 
        repoLink,
        description } = { ...props };

    return (
       <>
            <header>
                <h1>{name}</h1>
                <h2>{`${category} for ${platforms.join(', ')}`}</h2>
                { downloadLink && <DownloadLink link={downloadLink} downloadSource={downloadSource} /> }
                { supportPageLink && <p>Visit the <a href={supportPageLink} rel='noopener'>Support Page</a></p> }
                { repoLink && <p>View source code <a href={repoLink} rel='noopener'>here</a></p> }
            </header>
            <main>
                {description.map(par => <p>{par}</p>)}
            </main>
       </> 
    )
}