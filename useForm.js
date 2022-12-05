import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setformState(initialForm);
    };

    return {
        /**
         * esparcir las propiedades del objeto
         * que le pasamos como argumento al hook
         */
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
