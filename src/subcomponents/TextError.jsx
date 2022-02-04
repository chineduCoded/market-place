import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
color: red;
margin-left: 5px;
font-size: 13px;
`

export const TextError = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
