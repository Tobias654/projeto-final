import React from "react";

export default Lista = ({ items, onClick }) => {
    return items.map((item, i) => <MtgCard key={i} item={item} onClick={onClick} />);
  };
  