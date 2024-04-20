import { Fragment } from "react";
import styled from "styled-components";

const InlineBlockDiv = styled.div`
  display: inline-block;
`;

export const splitTextDivs = (text: string) => (
  <>
    {text.split("").map((letter, index) => (
      <Fragment key={index}>{letter === " " ? <>&nbsp;</> : <InlineBlockDiv>{letter}</InlineBlockDiv>}</Fragment>
    ))}
  </>
);
