import React from 'react';
import './Footer.css';
import Copyright from '../copyright/Copyright';

function Footer(props) {

    const elements = ["O nas", "Informacje", "Aktualności", `Kontakt: ${props.companyData.email}`]
    const items = [];

    for (const [index, value] of elements.entries()) {
        items.push(<li>{index+1} - {value}</li>);
    }

    let zmienna = true;

    return(
        <div>
            <footer>
                <ul>
                    {items}
                </ul>
                <ul>
                    {elements.map((value, index) => <li>{index+1} - {value}</li>)}
                </ul>
                
                <Copyright year="2022" />

                {zmienna === true &&
                   <div>Prawda</div>
                }
                {zmienna === true
                   ? <div style={{color: "blue"}}>Prawda</div>
                   : <div style={{color: "red"}}>Fałsz</div>
                }
            </footer>
        </div>
    )
}

export default Footer;
