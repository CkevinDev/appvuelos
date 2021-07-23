import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const useForm = (initialState:any={}) => {


    const [values, setValues] = useLocalStorage('',initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({target}:any) =>{
        setValues({
            ...values,
            [target.name] : target.value
        })
    }

    return [values, handleInputChange, reset]
}

export default useForm
