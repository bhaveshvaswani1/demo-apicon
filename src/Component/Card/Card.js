import "./Card.css"
import img from "../../Images/users.png"
function Card(props){
    return (
        <div className="card" >
            <h4>{props.name}</h4>
            <img className="img"  src={img} ></img>
        </div>
    );
}
export default Card;