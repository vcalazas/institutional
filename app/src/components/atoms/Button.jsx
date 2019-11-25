import styled from "styled-components";
import { Colors } from "../Config";

export const Btn = styled.button`
  border: none;
  border-radius: 0.1em;
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

export const Btnprimay = styled(Btn)`
  color: #fff;
  background-color: ${Colors().primay};
  :hover {
    background-color: ${Colors().primayDark};
  }
`;

export const Btnsecondary = styled(Btn)`
  color: #fff;
  background-color: ${Colors().secondary};
  :hover {
    background-color: ${Colors().secondaryDark};
  }
`;

export const Btnsuccess = styled(Btn)`
  color: #fff;
  background-color: ${Colors().success};
  :hover {
    background-color: ${Colors().successDark};
  }
`;

export const Btndanger = styled(Btn)`
  color: #fff;
  background-color: ${Colors().danger};
  :hover {
    background-color: ${Colors().dangerDark};
  }
`;

export const Btnwarning = styled(Btn)`
  color: #fff;
  background-color: ${Colors().warning};
  :hover {
    background-color: ${Colors().warningDark};
  }
`;

export const Btninfo = styled(Btn)`
  color: #fff;
  background-color: ${Colors().info};
  :hover {
    background-color: ${Colors().infoDark};
  }
`;
