import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
};

const UserReducer = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className='p-6 text-center'>
            <h1 className='text-3xl font-bold mb-4'>Count: {count}</h1>

            <div className='flex gap-4 justify-center'>
                <button 
                    className='border-2 border-black px-4 py-2 rounded' 
                    onClick={() => dispatch({ type: "INC" })}
                >
                    +
                </button>

                <button 
                    className='border-2 border-black px-4 py-2 rounded' 
                    onClick={() => dispatch({ type: "DEC" })}
                >
                    -
                </button>

                <button 
                    className='border-2 border-black px-4 py-2 rounded' 
                    onClick={() => dispatch({ type: "RESET" })}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default UserReducer;
