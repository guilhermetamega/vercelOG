import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 1350px) {
    flex-direction: column;
    scale: 0.5;
  }

  @media only screen and (min-width: 1350px) {
    scale: 0.8;
  }
`;

export default Container;
