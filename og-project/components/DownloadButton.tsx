import styled from "styled-components";

const DownloadButton = styled.a`
  margin-top: 20px;
  padding: 20px;
  border-radius: 0.5rem;
  border-style: none;
  height: 80px;
  font-size: 30px;
  background-color: #3b3b3b;
  font-family: var(--font-mono);
  :hover {
    cursor: pointer;
    background-color: #252525;
  }
`;

export default DownloadButton;
