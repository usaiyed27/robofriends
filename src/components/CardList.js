import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return(
	  <div>
	   {
	   	//React keeps track of what all these cards are
// 		//If it doesn't have key prop React has to change the entire dom
// 		// But when you add the unique key React is able to 
// 		// find that particular and delete it.
// 		// Key should be unique that doesn't change.
	   	 robots.map((user,i) =>{
		 	return(
			  <Card 
			  key = {robots[i].id}
			  id={robots[i].id} 
			  name={robots[i].name} 
			  email={robots[i].email} />
			)
		 })
	   }
	  </div>
	)
}

export default CardList;