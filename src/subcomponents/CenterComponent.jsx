import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import watch from '../assets/watch2.png'


const Container = styled.div`
`

const Wrapper = styled.div`
width: 100%;
padding-top: 4rem;
`

const ContentWrapper = styled.div`
width: 100%;
margin: 10px 0;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const ContentHolder = styled.div`
width: 500px;
height: 400px;
display: flex;
align-items: center;
`

const ImageHolder = styled.div`
width: 500px;
height: 400px;
display: flex;
align-items: center;

img {
    width: 90%;
    height: 90%;
    object-fit: contain;
}

`

const Content = styled.div``

const Sub = styled.h5`
text-transform: uppercase;
`

const Title = styled.h1`
text-transform: uppercase;
margin-bottom: 30px;
`

const Desc = styled.p`
margin-bottom: 30px;
`

const ButtonHolder = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
`

const Button = styled(Link)`
outline: none;
border: none;
width: 150px;
height: 45px;
padding: 10px 22px;
background: ${({clr}) => clr ? "teal":"#fff"};
color: ${({clr}) => clr ? "#fff":"teal"};
border-radius: 5px;
border: 2px solid ${({clr}) => clr ? "":"teal"};
font-weight: bold;
font-size: 18px;
margin-right: ${({clr}) => clr ? "10px":""};
cursor: pointer;
text-decoration: none;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`

export const CenterComponent = () => {
    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <ContentHolder>
                        <Content>
                            <Sub>The All Brand New</Sub>
                            <Title>Smart Watch 116 plus</Title>
                            <Desc>
                                A smartwatch is a wearable computer in the form of a watch; 
                                modern smartwatches provide a local touchscreen interface for daily use, while an associated ...
                            </Desc>
                            <ButtonHolder>
                                <Button clr to="order">Order Now</Button>
                                <Button to="info">Info</Button>
                            </ButtonHolder>
                        </Content>
                    </ContentHolder>
                        <ImageHolder>
                            <img src={watch} alt='watch' />
                        </ImageHolder>
                    </ContentWrapper>
            </Wrapper>
        </Container>
    )
}
