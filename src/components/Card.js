import React from 'react';
import { robots } from '../robots';

const Card = ({ id, name, email }) => {
	return(
		<div className='tc bg-light-green dib pa3 ma2 br2 grow bw2 shadow-5'>
		 <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
		 <h2>{name}</h2>
		 <p>{email}</p>
		 </div>
	)
}

export default Card