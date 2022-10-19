import { useState } from "react";

export const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue)

    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index ));
    };

    const isEmpty = () => value.length === 0
    
    const clear = () => { setValue(initialValue) }

    const sortasc = () => {
        setValue((oldValue) => [...oldValue.sort()])
    }
    
    const sortdesc = () => {
        setValue((oldValue) => [...oldValue.sort(function(a,b){return b - a;})])
    }

    return { value, push, remove, isEmpty, clear, sortasc, sortdesc}
}