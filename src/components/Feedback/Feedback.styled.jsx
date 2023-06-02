import styled from 'styled-components';

export const FeedbackWrapp = styled.div`
display: block;
text-align: center;
width: 100%;
`

export const Button = styled.button`
  background-color: white;
  margin: 5px;
  padding: 7px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow, color, background-color 0.3s ease-in-out;
  &:hover {
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    color: white;
  }
`