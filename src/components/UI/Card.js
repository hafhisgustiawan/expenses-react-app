import "./Card.css";

const Card = (props) => {
  //children ini tidak disetting dan ini adalah perintah bawaan react untuk bisa menjadikan card ini sebagai container dan nantinya bisa menampung custom component lainnya.

  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
