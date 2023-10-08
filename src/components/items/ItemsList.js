import Item from "./Item";
import './Item.css'

function ItemsList(props) {
  return (
    <ul id="concepts">
      <Item concept={props.concepts[0]}></Item>
      <Item concept={props.concepts[1]}></Item>
      <Item concept={props.concepts[2]}></Item>
    </ul>
  );
}
export default ItemsList;
