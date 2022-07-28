import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp"



export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        //setInputValue( event.target.value);
        setInputValue(target.value);
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue)
        //Este condicional es para evitar los espacios en blanco
        if(inputValue.trim().length <= 1) return;
        //setCategories(categories => [ inputValue, ...categories ])
        onNewCategory(inputValue.trim());
        //para que se limpie la caja de texto
        setInputValue('');
    }

    return (
        <form onSubmit={ (event ) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //onChange={ (event) => onInputChanged(event) }
                onChange={onInputChanged}
            />
        </form>

    )
}
