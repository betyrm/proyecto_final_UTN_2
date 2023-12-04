import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'

import { Character } from './componentes/Character/Character.jsx'
import { Search } from './componentes/Search/Search.jsx'

function App() {
    //utilizo useState y le asigno un arreglo vacío
    const [personaje, setPersonaje] = useState([]);
    
	const [filter, setFilter] = useState('')
    //utilizo fetch para solicitar la api
    
    //use .then para convertir los datos de formato json  a objeto
    //para poder leerlos con map

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            setPersonaje(data.results)
            
        })      
        
        .catch(error => {
            console.error('error al obtener los datos: ',error)
        })
    }, [])

    const personjesFiltrados = personaje.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        
	)

    return (
        <>
            <Search filter={filter} setFilter={setFilter} />
            <div className="container">        
              <div className="row">
             
                  {personjesFiltrados.map((personaje) => (
                    <div key={personaje.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                      <Character key={personaje.id} personaje={personaje} /> 
                     </div>           
                  ))}
               </div> 
            </div>
           
        </>
    )
}

export { App }