import './Header.css';
import nombre from '../assets/nombre-rick-morty-logo.jpg'
import logo from '../assets/rick-and-morty-logo.jpg'

function Header(){


    return(
        <>
            <nav>
                <div className='contenedor_titulo'>
                    <img src={logo} alt='' className='logo_rick'/>
                    <img src={nombre} alt='' className='nombre_rick'/>
                    <h1>Busca tus personajes favoritos</h1>
                
                </div> 
                
            </nav>
        </>
    )
   
}
export { Header }

