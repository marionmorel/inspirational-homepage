import React from 'react';
import { useDispatch } from 'react-redux';
import { nextImage } from '../features/BackgroundImage/backgroundImageSlice';

const NextImage = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <i 
            class="fa-solid fa-square-caret-right fa-xl"
            onClick={() => dispatch(nextImage())}
            ></i>
        </div>
    )
}

export default NextImage;