import React from 'react'
import styled from 'styled-components'
import { LogoComponent } from '../subcomponents/LogoComponent'
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TextError } from '../subcomponents/TextError';


const Container = styled.div`
padding: 2rem;
width: 100%;
min-height: 100vh;
`

const Wrapper = styled.div`
padding-top: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`



export const UserDetails = () => {
    const phoneRegExp = /^[0-9]{3}[0-9]{8}$/
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        country: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "It's too short").required("Required"),
        lastName: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        phoneNumber: Yup.string().matches(phoneRegExp, "Enter valid phone number").required("Required"),
        address: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
    })

    const handleSubmit = (values, props) => {
        alert(JSON.stringify((values), null, 2))
        props.resetForm()
    }
    return (
       <Container>
           <LogoComponent />
           <Wrapper>
               <Typography gutterBottom variant='h3' align='center'>
                   Customer Details
               </Typography>
               <Card style={{maxWidth:600, margin:"0 auto", padding: "10px 5px"}}>
                   <CardContent>
                       <Typography gutterBottom variant="h5">Delivery Details</Typography>
                       <Typography 
                       gutterBottom
                       color="textSecondary"
                       component="p"
                       variant='body2'>
                           Fill the form and continue to order page.
                       </Typography>
                       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {
                            (props) => (
                        <Form noValidate>
                                {console.log(props)}
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} 
                                    error={props.errors.firstName&&props.touched.firstName}
                                    label="First Name"
                                    placeholder='First Name'
                                    name="firstName"
                                    variant="outlined" fullWidth required
                                     />
                                     <ErrorMessage name='firstName' component={TextError} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} 
                                    error={props.errors.lastName&&props.touched.lastName}
                                    label="Last Name"
                                    placeholder='Last Name' 
                                    variant="outlined" 
                                    name="lastName"
                                     fullWidth required />
                                     <ErrorMessage name='lastName' component={TextError} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} name="email"
                                    error={props.errors.email&&props.touched.email}
                                    label="Email"
                                    type="email"
                                    placeholder='example@youremail.com' 
                                    variant="outlined" 
                                    fullWidth required />
                                    <ErrorMessage name='email' component={TextError} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} 
                                    error={props.errors.phoneNumber&&props.touched.phoneNumber}
                                    label="Phone"
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder='Phone Number' 
                                    variant="outlined" 
                                    fullWidth required />
                                    <ErrorMessage name='phoneNumber' component={TextError} />
                                </Grid>
                                <Grid xs={12} item>
                                    <Field as={TextField} 
                                    error={props.errors.address&&props.touched.address}
                                    label="Address"
                                    name="address"
                                    placeholder='Your Address' 
                                    variant="outlined" 
                                    fullWidth required />
                                    <ErrorMessage name='address' component={TextError} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} 
                                    error={props.errors.city&&props.touched.city}
                                    placeholder='City' 
                                    label="City"
                                    name="city"
                                    variant="outlined" 
                                     fullWidth required />
                                     <ErrorMessage name='city' component={TextError} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Field as={TextField} 
                                    error={props.errors.country&&props.touched.country}
                                    label="Country"
                                    placeholder="Country"
                                    name="country"
                                    variant="outlined" 
                                     fullWidth required />
                                     <ErrorMessage name='country' component={TextError} />
                                </Grid>
                                
                                <Grid xs={12} item>
                                    <Button 
                                    style={{height: 50, 
                                        background: "teal", 
                                        textTransform: "none",
                                        fontSize: 24,
                                        fontWeight: "bold"
                                    }}
                                    type="submit"
                                    variant='contained'
                                    color="primary"
                                    fullWidth
                                    >Submit</Button>
                                </Grid>
                            </Grid>
                       </Form>
                            )
                        }
                       </Formik>
                   </CardContent>
               </Card>
           </Wrapper>
       </Container>
    )
}
