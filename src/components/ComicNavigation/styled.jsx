import styled from "styled-components"

export const Navigation = styled.div`
  width: fit-content;
  margin: 1rem auto 0;

  a,
  p {
    color: var(--titles);
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    color: var(--borders);
    display: inline;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--highlight);
  }
`
