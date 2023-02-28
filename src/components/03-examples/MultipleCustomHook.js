import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1)

    const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    //console.log(loading, data);
    const { author, quote } = !!data && data[0];

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
                            <footer className='blockquote-footer'>{author}</footer>
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
