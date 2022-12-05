import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        /**
         * usamos esta manera porque necesitamos acceder
         * al valor anterior del estado para que en el test
         * podamos llamar diferentes veces la función
         * y se vaya incrementando
         */
        setCounter((current) => current + value);
    };

    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter((current) => current - value);
    };
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};
