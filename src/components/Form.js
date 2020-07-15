import React from 'react';
import './Form.css';

const From = props => {
    return(
        <form>
            <input 
                type="text" 
                value={props.value}
                placeholder="Wpisz miasto"
                onChange={props.change}
            />
        </form>
    )
}


export default From