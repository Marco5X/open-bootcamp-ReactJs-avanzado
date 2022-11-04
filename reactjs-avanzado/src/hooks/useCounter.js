import { useState } from "react";

export const useCounter = () => {
    const [value, setValue] = useState(0)
  
    const increment = () => {
      setValue(value + 1)
    }
  
    const decrement = () => {
      setValue(value - 1)
    }
  
    const reset = () => {
      setValue(0)
    }
    const increment5 = () => {
        setValue(value + 5)
    }
  
    return { value, increment, decrement, reset, increment5 }
  }