
const CardsMagic = function(props) {
  return (
      <div className={"cards " + props.MTGCards?.types[0].type.name}>
          <span className={"id " + props.MTGCards?.types[0].type.name}>{props.MTGCards?.id}</span>
          <span className={"name " + props.MTGCards?.types[0].type.name}>{props.MTGCards?.name}</span>
          <span className={"coloridentity" + props.MTGCards?.types[0].type.name}>{props.MTGCards?.ci}</span>
          <ul className="list_types">
              {props.MTGCards?.types.map(tipo => {
                  return <li className={tipo.type.name}>{tipo.type.name}</li>
              })}
          </ul>
      </div>
  );
}

export default CardsMagic