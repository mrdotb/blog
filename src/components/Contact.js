import React from 'react'
import styled from 'styled-components'
import Mail from '../../content/assets/mail.inline.svg'
import mailTo from '../utils/mailTo'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.gold};
  color: ${props => props.theme.colors.text.dark};
  border-radius: 4px;
  padding: 1rem;
  font-weight: bold;
`

const Text = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #E2E8F0;
  font-weight: bold;
`

const Contact = () => {
  return (
    <Container>
      <div>
        <Text>Want to hire me?</Text>
        <Button onClick={mailTo}>
          <Mail style={{width: '2rem', marginRight: '0.5rem'}}/>
          mrdotb (at) protonmail.com
        </Button>
      </div>
    </Container>
  )
}

export default Contact
