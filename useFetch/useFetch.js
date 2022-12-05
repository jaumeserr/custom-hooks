import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const { data, isLoading, hasError } = state;

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            ...state,
            data,
            isLoading: false,
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        // ...state,
        // state,
        data,
        isLoading,
        hasError,
    };
};
