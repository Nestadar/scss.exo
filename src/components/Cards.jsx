import table from "./table"
import "./Cards.scss"


const Cards = () => {
    return (
        <div className="Cards">
            {table.map((weapon, index) => (
                <div className ="Card" key={index}>
                    <h1>{weapon.name}</h1>
                <div className ="images">
                    <img src={weapon.imgSrc} alt={weapon.name}/>
                </div>
                    <p>{weapon.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards;