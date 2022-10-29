import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonType) => {

    const {name, callback} = props

    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
