
import * as StringTemplates from '../util/StringTemplates.js';
import './template.css'

export const Footer = (props) => {
    const cpy = StringTemplates.copyright(2023, 'Hunter Buxton')
    return (
        <footer className="page-footer">
              {props.children}
            <div className="stack-right">
                <p className="footnote text-box">{cpy}</p>
            </div>
        </footer>
    )
}