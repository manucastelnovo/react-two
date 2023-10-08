import Card from "../UI/Card"
import './Item.css'

function Item(props) {
    return <Card className="concept">
    <img src={props.concept.image} alt={props.concept.title} />
    <h2> {props.concept.title}</h2>
    <p>{props.concept.description}</p>
  </Card>
};

export default Item;