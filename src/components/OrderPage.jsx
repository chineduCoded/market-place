import React, { useState } from 'react'
import styled from 'styled-components'
import { LogoComponent } from '../subcomponents/LogoComponent'
import { OrderSummary } from '../subcomponents/OrderSummary'
import { RadioButtonGroup } from '../subcomponents/RadioButtonGroup'
import watch from '../assets/watch2.png'
import { Grid, MenuItem, Select } from '@mui/material'

const Container = styled.div`
  width: auto;
  padding: 2rem;
`

const Wrapper = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProductWrapper = styled.div`
  width: min(500px, 100%);
  height: 500px;
  color: #000;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const PaymentWrapper = styled.div`
  width: min(400px, 100%);
  height: 500px;
  background: #333;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`

const PaymentContent = styled.div``

const ProductImageHolder = styled.div`
  width: 250px;
  height: 300px;
`
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const ProductContentHolder = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const ProductTitle = styled.h3`
  margin-bottom: 20px;
`
const ProductDesc = styled.p`
  margin-bottom: 20px;
`
const ProductQty = styled.div``

export const OrderPage = () => {
  const [checked, setChecked] = useState(false)
  const [colors, setColors] = useState('')

  const handleChecked = () => {
    setChecked(!checked)
  }

  const handleUnchecked = () => {
    setChecked(false)
  }

  const productColors = ['Black', 'Blue', 'pink', 'Green']
  return (
    <Container>
      <LogoComponent />
      <Wrapper>
        <ContentWrapper>
          <ProductWrapper>
            <ProductImageHolder>
              <ProductImage src={watch} />
            </ProductImageHolder>
            <ProductContentHolder>
              <ProductTitle>Smartwatch 116 plus</ProductTitle>
              <ProductDesc>Example smartwatch</ProductDesc>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Select
                    style={{ marginBottom: '20px' }}
                    name="color"
                    value={colors}
                    onChange={(e) => {
                      setColors(e.target.value)
                      console.log(colors)
                    }}
                  >
                    {productColors.map((productColor) => (
                      <MenuItem key={productColor} value={productColor}>
                        {productColor}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <ProductQty>2</ProductQty>
            </ProductContentHolder>
          </ProductWrapper>
          <PaymentWrapper>
            <h1>Payment</h1>
            <RadioButtonGroup
              ToggleChecked={handleChecked}
              ToggleUnchecked={handleUnchecked}
            />
            <PaymentContent>
              {checked ? <h2>Card information</h2> : <OrderSummary />}
            </PaymentContent>
          </PaymentWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}
