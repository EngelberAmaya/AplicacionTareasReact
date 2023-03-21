import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {

    const isMounted = useRef(true);
    //console.log(isMounted)
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
        
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null});

        fetch(url).then( resp => resp.json())
                .then( data => {
                        
                    setState({
                        loading: false,
                        error: null,
                        data
                    });

                }).catch(() => {
                    setState({
                        loading: false,
                        error: 'No se pudo cargar la info',
                        data: null
                    });
                })
    }, [url]);

    return state;
  
}

export default useFetch
