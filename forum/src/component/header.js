import React from 'react'



const Header = () => {
  return (
  <Container className='header'>
    <img 
    className='logo-enfant'
    src='../images/logo-primaire.png'
    alt='logo du site'
    />
 <button className="button-action" onClick={deconnection}>
  Deconnection
</button>

  </Container>
    
  )
}

export default Footer