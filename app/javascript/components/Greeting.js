import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

function Greeting() {
    const greeting = useSelector((state) => state.greeting);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Fetching random greeting...');
        dispatch(fetchRandomGreeting());
    }, [dispatch]);

    console.log('Greeting:', greeting);
    console.log('Loading:', loading);
    console.log('Error:', error);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                error ? (
                    <p>
                        Error:
                        {error}
                    </p>
                ) : (
                    <div>
                        <h1>Random Greeting:</h1>
                        <p>{greeting}</p>
                    </div>
                )
            )}
        </div>
    );
}
export default Greeting;
