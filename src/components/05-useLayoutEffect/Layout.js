import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
//import '../02-useEffect/effects.css';
import './layout.css';

const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    //console.log(loading, data);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
          
            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>{quote}</p>               
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>              

            <button onClick={increment} className='btn btn-primary'>
                Siguiente quote
            </button>

        </div>
    )
}

export default Layout
