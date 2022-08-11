import React from "react";
import styled from "styled-components";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<>
        <Button>
            {options.map(e=><Btn type="button" onClick={onLeaveFeedback} name={e} key={e}>{e}</Btn>)}
        </Button>
    </>)
}

const Button = styled.div`
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
    gap: 6px;
`
const Btn = styled.button`
    background: grey;
    border: none;
    padding: 5px;
    border-radius: 2px;
    &:hover{
        scale: 1.1;
    }
`