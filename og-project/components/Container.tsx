import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  scale: 0.8;

  @media only screen and (max-width: 1350px) {
    flex-direction: column;
  }
`;

export default Container;
