import React from "react";
import { Card } from "../card/card.component";
import { CardWrap } from "./card-list.styles";

export const CardList = props => (
  <CardWrap>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </CardWrap>
);
