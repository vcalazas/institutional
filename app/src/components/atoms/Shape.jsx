import React from "react";
import styled from "styled-components";
import { Colors } from "../Config";

export const Shape = styled.div`
  border: none;
  border-radius: 0.3em;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
console.log(Shape)

export const Shapeprimay = styled(Shape)`
  color: #fff;
  background-color: ${Colors().primay};
  :hover {
    background-color: ${Colors().primayDark};
  }
`;

export const Shapesecondary = styled(Shape)`
  color: #fff;
  background-color: ${Colors().secondary};
  :hover {
    background-color: ${Colors().secondaryDark};
  }
`;

export const Shapesuccess = styled(Shape)`
  color: #fff;
  background-color: ${Colors().success};
  :hover {
    background-color: ${Colors().successDark};
  }
`;

export const Shapedanger = styled(Shape)`
  color: #fff;
  background-color: ${Colors().danger};
  :hover {
    background-color: ${Colors().dangerDark};
  }
`;

export const Shapewarning = styled(Shape)`
  color: #fff;
  background-color: ${Colors().warning};
  :hover {
    background-color: ${Colors().warningDark};
  }
`;

export const Shapeinfo = styled(Shape)`
  color: #fff;
  background-color: ${Colors().info};
  :hover {
    background-color: ${Colors().infoDark};
  }
`;