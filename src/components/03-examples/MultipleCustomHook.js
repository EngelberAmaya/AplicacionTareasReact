import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state);
    const { autor, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                        Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer'>{autor}</footer>
                        </blockquote>
                    )
            }

            <button onClick={increment} className='btn btn-primary'>
                Siguiente quote
            </button>

        </div>
    )
}

export default MultipleCustomHook
