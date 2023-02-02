import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const schema = yup
  .object({
    username: yup.string().required('Enter your registered email or username'),
    password: yup.string().required(),
  })
  .required()

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Container className="wrapper">
      <h2>Login to your account</h2>
      <Form
        className="mt-2"
        spellCheck="false"
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col xs={7}>
            <FormGroup className="mb-3 mt-3">
              <FormLabel htmlFor="username">Login</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter your email or username"
                {...register('username')}
                aria-invalid={errors.username?.message ? 'true' : 'false'}
                className={`${errors.username?.message ? 'is-invalid' : ''} `}
              />
              {errors.username?.message && (
                <FormControl.Feedback type="invalid">
                  {errors.username?.message}
                </FormControl.Feedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={7}>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                {...register('password')}
                aria-invalid={errors.password?.message ? 'true' : 'false'}
                className={`${errors.password?.message ? 'is-invalid' : ''} `}
              />
              {errors.password?.message && (
                <FormControl.Feedback type="invalid">
                  {errors.password?.message}
                </FormControl.Feedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </Container>
  )
}
