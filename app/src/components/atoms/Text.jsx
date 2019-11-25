import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Font } from "../Config";

const Base = `
    font-family: ${Font().title};
    color: #000;
`;

const BaseLink = `
    font-family: ${Font().title};
    text-decoration: none;
`;

const styleH1 = `font-size: 3.0em;`
const styleH2 = `font-size: 2.5em;`
const styleH3 = `font-size: 2.0em;`
const styleH4 = `font-size: 1.5em;`
const styleH5 = `font-size: 1.3em;`
const styleH6 = `font-size: 1.0em;`

export const H1 = styled.h1` ${Base} ${styleH1}`;
export const H2 = styled.h2` ${Base} ${styleH2}`;
export const H3 = styled.h3` ${Base} ${styleH3}`;
export const H4 = styled.h4` ${Base} ${styleH4}`;
export const H5 = styled.h5` ${Base} ${styleH5}`;
export const H6 = styled.h6` ${Base} ${styleH6}`;

export const AH1 = styled(Link)` ${BaseLink} ${styleH1} `;
export const AH2 = styled(Link)` ${BaseLink} ${styleH2} `;
export const AH3 = styled(Link)` ${BaseLink} ${styleH3} `;
export const AH4 = styled(Link)` ${BaseLink} ${styleH4} `;
export const AH5 = styled(Link)` ${BaseLink} ${styleH5} `;
export const AH6 = styled(Link)` ${BaseLink} ${styleH6} `;
export const P = styled.p`
  font-family: ${Font().flowingText};
  font-size: 1.3em;
`;
