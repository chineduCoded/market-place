import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

body:before {
    content: 'Debby';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    color: lightgray;
    font-size: 150px;
    font-weight: 600;
    display: grid;
    justify-content: center;
    align-content: center;
    text-transform: uppercase;
    opacity: 0.3;
    user-select: none; 
    -ms-user-select: none; 
     -moz-user-select: none; 
    -khtml-user-select: none; 
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 

}
`

export const Button = styled.button`
background: teal;
border-radius: 5px;
color: #fff;
padding: 10px 20px;
cursor: pointer;
border: none;
outline: none;
font-size: 18px;
font-weight: 600;
`