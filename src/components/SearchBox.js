// import React from 'react';

// const SearchBox = ({searchfield, inputChange}) => {
//   return(
//     <div className='pa2'>
//       <input
//       className = "pa3 ba b-green bg-lightest-blue" 
//       type='search' 
//       placeholder='search robots' 
//       onChange = {inputChange}
//       />
//     </div>
//   )
// }

// export default SearchBox

import React from 'react';

const SearchBox = ({onInputChange}) => {
  return(
    <div>
      <h1 className='f2'>Robofriends</h1>
      <input 
      className = 'pa3 ba b-green bg-lightest-blue'
      type='search' 
      placeholder='search robots'
      onChange = {onInputChange}
      />
    </div>
  )
}

export default SearchBox;