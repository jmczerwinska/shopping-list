import styled from 'styled-components';

const Form = styled.form`
  padding: 0.3em;
  margin-bottom: 0.7em;
  display: flex;

  input {
    flex-grow: 1;
    margin-right: 0;
  }

  @media screen and (max-width: 360px) {
    button {
      padding: 0.5em;
      margin-right: 0;
    }
    input {
      padding: 0.32em 0.2em;
      margin-left: 0;
    }  
  }
`;

export default Form;