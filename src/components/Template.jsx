import './template.css'
 
const copyright = (year, holder) => `${String.fromCharCode(169)} ${year} ${holder}`;

export const Footer = ({ children }) => {
    const cpy = copyright(2023, 'Hunter Buxton')
    return (
        <footer className="page-footer">
            {children}
            <div className="stack-right">
                <p className="footnote text-box">{cpy}</p>
            </div>
        </footer>
    )
}