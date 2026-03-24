import './template.css'
 
export const copyright = (year, holder) => `${String.fromCharCode(169)} ${year} ${holder}`;

export const Footer = (props) => {
    const cpy = copyright(2023, 'Hunter Buxton')
    return (
        <footer className="page-footer">
            {props.children}
            <div className="stack-right">
                <p className="footnote text-box">{cpy}</p>
            </div>
        </footer>
    )
}