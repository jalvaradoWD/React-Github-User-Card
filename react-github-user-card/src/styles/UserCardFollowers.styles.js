import styled from "styled-components";

const imagesPadding = "10px";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${imagesPadding};
  row-gap: ${imagesPadding};
  padding: 1rem;

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid black;
  }
`;
