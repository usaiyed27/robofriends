import React from 'react';

const Card = (props) =>{
	const { id, name, email } = props;
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*to add dynamic images add convert src
				to string and add the id props to it.
			*/}
			<img src={`https://robohash.org/${props.id}?200x200" alt="robots`} />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		</div>
	);
}

export default Card;