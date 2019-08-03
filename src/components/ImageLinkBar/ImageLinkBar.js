import React from 'react';
import './ImageLinkBar.css';

const ImageLinkBar = ( { onInputChange, onButtonSubmit }) => {

    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input 
                        onChange={onInputChange} 
                        className='f4 pa2 w-70 center' 
                        type='text' 
                        placeholder='put an image link'
                    />
                    <button 
                        onClick={onButtonSubmit} 
                        className='w-30 grow f3 link ph3 pv2 dib white bg-blue'
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkBar;
