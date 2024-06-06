import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuote } from '../features/Quote/quoteSlice';
 
const Quote = () => {
    const { quote, author } = useSelector((state) => state.quote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuote())
    }, [dispatch])

    return (
        <div className="quote">
            <h3>{quote}</h3>
            <p>{author}</p>
        </div>
    )
}

export default Quote;