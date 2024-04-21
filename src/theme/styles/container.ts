import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: ${({ theme }) => theme.screenHeight};
  margin: ${({ theme }) => theme.padding};
`;
