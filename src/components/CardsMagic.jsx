const CardsMagic = function(props){
    return(
        <div className={"cards"+ props.magic?.types[0].type.name}>
        <span className={"id " + props.magic?.types[0].type.name}>{props.magic?.id}</span>
        <span className={"name " + props.magic?.types[0].type.name}>{props.magic?.name}</span>
        <ul className="list_types">
            {props.magic?.types.map(tipo => {
                return <li className={tipo.type.name}>{tipo.type.name}</li>
            })}
        </ul>
    </div>
);
}

export default CardsMagic