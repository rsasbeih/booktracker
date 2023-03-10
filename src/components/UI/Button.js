import styled from "styled-components";

const Button = styled.button`
  width:%100;
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #4DCCBD;
  background-color: #4DCCBD;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

&:hover,
&:active {
  background-color: #19bba8;
  border-color: #19bba8;
}

&.alternative {
  color: #220131;
  border-color: transparent;
  background-color: transparent;
}

&.alternative:hover,
&.alternative:active {
  background-color: #ddb3f8;
}
@media (min-width:768px){
        width:auto;
}
`;

export default Button