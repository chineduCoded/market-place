import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../GlobalStyle'

const Container = styled.div`
position: absolute;
top: 2rem;
right: 2rem;
`

export const ButtonComponent = () => {
    return (
        <Container>
           <Link to="order">
                <Button>Order Now</Button>
           </Link>
        </Container>
    )
}
