import React from 'react'
import styled from 'styled-components'
import { NairaSymbol } from './NairaSymbol'

const Container = styled.div``

const Wrapper = styled.div`
  padding-top: 20px;
`

const Title = styled.h2`
  margin-bottom: 15px;
`

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: ${({ bld }) => (bld ? '700' : '300')};
`

const Price = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const DeliveryFee = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const OrderTotal = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`
const Button = styled.button`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 3px;
  background: teal;
  color: white;
  cursor: pointer;
`

const Info = styled.div`
  //   background: rgba(255, 127, 80, 0.2);
  padding: 3px;
  border-radius: 3px;
`

const Para = styled.p`
  color: coral;
`

export const OrderSummary = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Order Summary</Title>
        <OrderInfo>
          <Name>Price</Name>
          <Price>
            <NairaSymbol />
            2,0000
          </Price>
        </OrderInfo>
        <OrderInfo>
          <Name>Delivery Fee</Name>
          <DeliveryFee>
            <NairaSymbol />
            1,500
          </DeliveryFee>
        </OrderInfo>
        <OrderInfo>
          <Name bld>Total</Name>
          <OrderTotal>
            <NairaSymbol />
            21,500
          </OrderTotal>
        </OrderInfo>
        <ButtonHolder>
          <Button>Order Now</Button>
        </ButtonHolder>
        <Info>
          <Para>* Delivery Fee may increase depending on some location</Para>
        </Info>
      </Wrapper>
    </Container>
  )
}
