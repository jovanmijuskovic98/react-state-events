import './Card.css';

// const Card = (props) => {} Alternative Arrow function syntax
function Card(props){
    const classes = 'card' + props.className;
    
    return <div className= {classes}>{props.children}</div>;
}
export default Card;