import React from "react";
import {FaArrowDown} from "react-icons/fa";
import styled from "styled-components";

const Summary = styled.summary`
	display: flex;
	color: #ffffff;
	font-size: 130%;
    height: 64px;
    
`
const Details = styled.details`
	display: flex;
	color: #ffffff;
	font-size: 130%;
`


export const CollapsibleFAQ = ({ summary, children }) => {
    return (
        <Details>
            <Summary>{summary}</Summary>
            {children}
        </Details>
    )
}