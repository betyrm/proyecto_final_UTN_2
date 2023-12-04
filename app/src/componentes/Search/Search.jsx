import React from 'react';
import './Search.css';



const Search = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<>
			<section>
				<div className='seccion_buscador'>
					<input
						type='text'
						placeholder='Nombre del personaje'
						name='buscar'
						onChange={handleInput}
						value={filter}
						
					/>
					{/* <button type="submit">Buscar</button> */}
				</div>

				<hr />
			</section>
		</>
	)
}
export { Search }