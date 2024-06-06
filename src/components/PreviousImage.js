import React from 'react';
import { useDispatch } from 'react-redux';
import { previousImage } from '../features/BackgroundImage/backgroundImageSlice';

const PreviousImage = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <i 
            class="fa-solid fa-square-caret-left fa-xl"
            onClick={() => dispatch(previousImage())}
            ></i>
        </div>
    )
}

export default PreviousImage;