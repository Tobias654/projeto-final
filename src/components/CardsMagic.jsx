
const CardsMagic = function(props) {
    return (
        <div className={"cards "}>
              <img src={props.cardmtg?.card.imageUrl}/>
        </div>
    );
  }
  
  export default CardsMagic