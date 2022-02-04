import React from 'react'
import styled from 'styled-components'
import { BsXDiamondFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Container = styled.div`
position: absolute;
top: 2rem;
left: 2rem;
`
const Nav = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;

h1{
    margin-left: 10px;
    color: coral;
}
`

const LogoHolder = styled(BsXDiamondFill)`
width: 40px;
height: 40px;
color: teal;
`

export const LogoComponent = () => {
    return (
        <Container>
            <Nav to="/">
                <LogoHolder />
                <h1>Elina's</h1>
            </Nav>
        </Container>
    )
}
