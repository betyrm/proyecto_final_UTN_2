import React from 'react'
import './Character.css'

import Card from 'react-bootstrap/Card'

 const Character = ({ personaje }) => {
	
	return (
		<>
		
		<div className="container py-3">
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={personaje.image} alt={personaje.name} />
					<Card.Body>
						<Card.Title>{personaje.name}</Card.Title>
						<Card.Text>
			           		'Statu: '{personaje.status}
							 
		         		</Card.Text>
						 <Card.Text>
							'Species: ' {personaje.species}
						</Card.Text>
					</Card.Body>	
			</Card>
		</div>
		</>
	)
}
export  { Character }
