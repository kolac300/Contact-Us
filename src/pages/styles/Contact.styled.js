import styled from "styled-components";

export const ContactWrapper = styled.div`
  max-width: 1196px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  display: grid;
  margin: auto;
  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;
