import React from 'react'
import styled from 'styled-components'
import Mail from '../../content/assets/mail.inline.svg'

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

function mailTo() {
  let location = 'mailto:'
  let mail = 'lqcnsa?oqnsnml`hk-bnl'
  for (let i = 0; i < mail.length; i++) {
    location += String.fromCharCode(mail.charCodeAt(i) + 1)
  }
  window.location.href = location
}

const Contact = () => {
  return (
    <Container>
      <Button onClick={mailTo}>
        <Mail style={{width: '2rem', marginRight: '0.5rem'}}/>
        mrdotb (at) protonmail.com
      </Button>
    </Container>
  )
}

export default Contact
