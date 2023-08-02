import React from "react";
import css from "./Card.module.css";
import { CardProps } from "../../interfaces/CardProps";

function Card<T>({ data, onClick }: CardProps<T>): JSX.Element {
  return (
    <div className={css.card} onClick={() => onClick && onClick(data)}>
      {data.name && <div className={css.cardTitle}>{data.name}</div>}
      {data.age && <div className={css.cardDetails}>{data.age} years old</div>}
      {data.ocupation && (
        <div className={css.cardDetails}>{data.ocupation}</div>
      )}
    </div>
  );
}

export default Card;
