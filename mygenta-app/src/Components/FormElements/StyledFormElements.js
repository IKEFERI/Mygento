import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 60px 20px;
    background-color: #9ce2ff;
    max-width: 480px;
    margin: 40px auto;
    border-radius: 4px;
  `

export const StyledFormTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
  `

export const StyledButton = styled.button`
  margin: 5px;
  padding: 20px;
  text-transform:uppercase;
  background-color: #3eaa44;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
   &:hover{
    background-color: #3bba44;
  }
  &:disabled{
  opacity: 0.4;
  }
`
export const StyledButtonRed = styled(StyledButton)`
  background-color: #aa3e3e;
   &:hover{
    background-color: #de5555;
  }
`
export const StyledInput = styled.div`
  position:relative;
  margin-bottom: 40px;
  text-align: left;
  input{
    display: block;
    width: 100%;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 4px;
    border: none;
    background-color: #e1fff6;
    &:hover,:focus{
      background-color: #ffffff;
  }
  }
`
export const StyledCheckbox = styled.div`
  position:relative;
  margin-bottom: 40px;
  text-align: right;
  font-size: 18px;
  font-weight: 700;
  text-transform:uppercase;
  line-height: 1;
  input{
    display: inline-block;
    width: 18px;
    height: 18px;
    padding: 8px;
    margin: 0 4px 0 0;
    border-radius: 4px;
    border: none;
    background-color: #e1fff6;
    &:hover,:focus{
      background-color: #ffffff;
  }
  }
`

export const StyledFormFieldError = styled.div`
    position: absolute;
    width: 100%;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    color: #ff6363;
  `