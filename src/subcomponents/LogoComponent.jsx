import React from 'react'
import styled from 'styled-components'
import { BsXDiamondFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Container = styled.div`
position: fixed;
top: 2rem;
left: 2rem;
`

const LogoHolder = styled(BsXDiamondFill)`
width: 40px;
height: 40px;
color: teal;
`

export const LogoComponent = () => {
    return (
        <Container>
            <Link to="/">
                <LogoHolder />
            </Link>
        </Container>
    )
}
