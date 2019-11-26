import React from "react";
import {
  Btn,
  Btnprimay,
  Btnsecondary,
  Btnsuccess,
  Btndanger,
  Btnwarning,
  Btninfo
} from "../atoms/Button";
import {
  H1, H2, H3, H4, H5, H6, P,
  AH1,
  AH2,
  AH3,
  AH4,
  AH5,
  AH6
} from "../atoms/Text";
import { Input, Inputprimay, Inputsecondary, Inputsuccess, Inputdanger, Inputwarning, Inputinfo } from "../atoms/TextBox";

import GridLayout from 'react-grid-layout';
import { Shapeprimay, Shapesecondary, Shapesuccess } from "../atoms/Shape";

function TestPage() {
  let layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];
  try {
    layout = JSON.parse(localStorage.getItem("layout"))
  } catch (e) {
    layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];
  }
  return (
    <>
      <div>
        <GridLayout
          className="layout"
          layout={layout} cols={12} rowHeight={30} width={1200}
          onLayoutChange={(mLayout) => {
            console.log(mLayout)
            localStorage.setItem("layout", JSON.stringify(mLayout))
          }}
        >
          <Shapeprimay key="a">
            <Input placeholder="Text" />
            <Inputprimay placeholder="Text" />
            <Inputsecondary placeholder="Text" />
            <Inputsuccess placeholder="Text" />
            <Inputdanger placeholder="Text" />
            <Inputwarning placeholder="Text" />
            <Inputinfo placeholder="Text" />
          </Shapeprimay>
          <Shapesecondary key="b">
            <Btn >Hello</Btn>
            <Btnprimay>asdasd </Btnprimay>
            <Btnsecondary>asdasd </Btnsecondary>
            <Btnsuccess sm>asdasd </Btnsuccess>
            <Btndanger md>asdasd </Btndanger>
            <Btnwarning lg>asdasd </Btnwarning>
            <Btninfo xl>asdasd </Btninfo>
          </Shapesecondary>
          <div key="c">
            <Shapesuccess >
              <H1> Teste </H1>
              <H2 color="secondary"> Teste </H2>
              <H3 color="success"> Teste </H3>
              <H4 color="danger"> Teste </H4>
              <H5 color="warning"> Teste </H5>
              <H6 color="info"> Teste </H6>
              <P>Texto Texto Texto Texto Texto Texto Texto Texto Texto </P>
              <AH1 to="/"> Link </AH1>
              <AH2 to="/" color="secondary"> Link </AH2>
              <AH3 to="/" color="success"> Link </AH3>
              <AH4 to="/" color="danger"> Link </AH4>
              <AH5 to="/" color="warning"> Link </AH5>
              <AH6 to="/" color="info"> Link </AH6>
            </Shapesuccess>
          </div>
        </GridLayout>

      </div>

    </>
  );
}

export default TestPage;
