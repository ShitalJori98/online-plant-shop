import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className="container ">
             <div class="input-group">
                <div class="form-outline">
                    <input type="search" class="form-control" placeholder="search..."style={{width:'700px', marginTop:'10px', marginLeft:'250px'}}/>
                </div>
        {/*  <button class="form-outline" style={{marginTop:'10px', borderColor:'#ebeae8'}}>
        <FontAwesomeIcon icon={faSearch} />
        </button> */}
            </div>
     </div>
    )
}

export default SearchBar
