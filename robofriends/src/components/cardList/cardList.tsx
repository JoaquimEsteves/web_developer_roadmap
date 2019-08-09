import React from 'react';
import { robotProps } from './robots';
import Card from './card/card';

const CardList = (robot_list: robotProps[]) => {
    const cardComponents = robot_list.map(card_prop => {
        return Card(card_prop);
    });
    return (
        <div id="cardList">
            {cardComponents}
        </div>
    );
}

export default CardList;