import styled from "styled-components";
import { Colors } from "../Config";

export const Input = styled.input`
    outline: none;
    border-color: ${Colors().text};
    border: 1px solid;
    padding: 0.5em;
    border-radius: 0.3em;
    font-size: ${props => {
        let size = `1.0em`;
        if (props.sm === true) {
            size = `0.5em`;
        }
        if (props.md === true) {
            size = `1.0em`;
        }
        if (props.lg === true) {
            size = `1.5em`;
        }
        if (props.xl === true) {
            size = `2.0em`;
        }
        return size;
    }};
`;

export const Inputprimay = styled(Input)`
  border-color: ${Colors().primay};
  :hover {
    border-color: ${Colors().primayDark};
  }
`;

export const Inputsecondary = styled(Input)`
  color: #fff;
  border-color: ${Colors().secondary};
  :hover {
    border-color: ${Colors().secondaryDark};
  }
`;

export const Inputsuccess = styled(Input)`
  color: #fff;
  border-color: ${Colors().success};
  :hover {
    border-color: ${Colors().successDark};
  }
`;

export const Inputdanger = styled(Input)`
  color: #fff;
  border-color: ${Colors().danger};
  :hover {
    border-color: ${Colors().dangerDark};
  }
`;

export const Inputwarning = styled(Input)`
  color: #fff;
  border-color: ${Colors().warning};
  :hover {
    border-color: ${Colors().warningDark};
  }
`;

export const Inputinfo = styled(Input)`
  color: #fff;
  border-color: ${Colors().info};
  :hover {
    border-color: ${Colors().infoDark};
  }
`;
