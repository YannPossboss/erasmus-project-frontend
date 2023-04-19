import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search(props){
    return(
        <div class="Searchbar">
            <form onSubmit={props.searchButton}>
                <button type="submitsearch" class={props.w3classprops}> <FontAwesomeIcon icon={faSearch}/> </button>
                <input class={props.w3classprops} type="text" placeholder="Search ..." value={props.searchText} onChange={props.searchOnChange} />
            </form>
        </div>
    );
}

export default Search; 