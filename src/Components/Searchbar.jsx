import React from 'react'




const Searchbar = ({handleInputs}) => {

    return (
        <input type="text" name="searchbox" className="Searchbar-input" placeholder="Search contact" onChange={e=>handleInputs(e)} />
    )
}
export default Searchbar