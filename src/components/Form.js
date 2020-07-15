import React from 'react';


const From = props => {
    return(
        <form onSubmit={props.submit}>
            <input 
                type="text" 
                value={props.value}
                placeholder="Wpisz miasto"
                onChange={props.change}
            />
            <button> Wyszukaj miasta</button>
        </form>
    )
}


export default From