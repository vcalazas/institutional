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

function TestPage() {
  // genSalt(10, function(err, salt) {
  //   console.log(err);
  //   hash("123", salt, function(err2, hash) {
  //     console.log(err2);
  //     console.log(hash);
  //   });
  // });

  return (
    <>
      <div>
        <Btn>Hello</Btn>
        <Btnprimay>asdasd </Btnprimay>
        <Btnsecondary>asdasd </Btnsecondary>
        <Btnsuccess sm>asdasd </Btnsuccess>
        <Btndanger md>asdasd </Btndanger>
        <Btnwarning lg>asdasd </Btnwarning>
        <Btninfo xl>asdasd </Btninfo>

        <H1> Teste </H1>
        <H2> Teste </H2>
        <H3> Teste </H3>
        <H4> Teste </H4>
        <H5> Teste </H5>
        <H6> Teste </H6>
        <P>Texto Texto Texto Texto Texto Texto Texto Texto Texto </P>
        <AH1> Teste </AH1>
        <AH2> Teste </AH2>
        <AH3> Teste </AH3>
        <AH4> Teste </AH4>
        <AH5> Teste </AH5>
        <AH6> Teste </AH6>
      </div>
    </>
  );
}

export default TestPage;
