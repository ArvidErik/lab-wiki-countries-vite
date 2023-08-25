import {Link} from "react-router-dom"

import "./HomePage.css"

function HomePage(props) {

    console.log(props.countries);

    return (
        <div className="container">
            {props.countries.map((country)=>{
                return <Link key={country.alpha2Code} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>{country.name.common} <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /></Link>
            })}
        </div>
    )
}

export default HomePage;
