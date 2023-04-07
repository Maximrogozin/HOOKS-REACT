import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="" className="form-label">
                Email
            </label>
            <input
                type="email"
                ref={inputRef}
                className="form-control mb-3"
                id="email"
            />
            <button className="btn btn-primary mx-2" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary mx-2"
                onClick={handleClickWidth}
            >
                Изменить ширину обьекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
