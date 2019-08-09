import React from 'react';
import './card.scss';
import { robotProps } from '../robots';

const Card = (props: robotProps) => {
    const {id, name, email} = props;
    return (
        <div key={`${id}`} className="card">
            <img src={`https://robohash.org/${id}?200x200`} alt='card' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;