import React from 'react'



const Footer = () => {
  return (
  <Container className='fluid d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top sticky-bottom bg-lighter'>
    <p className="col-md-4 mb-0 text-muted">&copy;  2022 Monde de primaires</p>
  

     <ul className="ul-footer">
        <li className="li-footer"> <Link to={`/`}>Accueil</Link></li>
        <li className="li-footer"><Link to={`/mentions`}>Mentions l&eacute;gales</Link></li>
        <li className="li-footer"><Link to={`/`} >Nous contacter</Link></li>
        <li className="li-footer"><Link to={`/`} >Le projet</Link></li>
        <li className="li-footer"><Link to={`/`} >Qui sommes-nous</Link></li>
    </ul>

  </Container>
    
  )
}

export default Footer