import React from 'react'
import styled from 'styled-components'
import { ArrowDown } from '../subcomponents/ArrowDown'
import { ButtonComponent } from '../subcomponents/ButtonComponent'
import { CenterComponent } from '../subcomponents/CenterComponent'
import { LogoComponent } from '../subcomponents/LogoComponent'

const Container = styled.div`
padding: 2rem;
width: 100vw;
height: 100vh;
position: relative;
`

export const HomeScreen = () => {
    return (
        <Container>
            <LogoComponent />
            <ButtonComponent />
            <ArrowDown />
            <CenterComponent />
        </Container>
    )
}
