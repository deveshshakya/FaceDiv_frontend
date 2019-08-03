import React from 'react';
import './FaceDetection.css'

const FaceDetection = ({boxes, imageURL}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputImage' alt='' src={imageURL} width='500px' height='auto'/>
                { boxes.map(box =>
                    <div key={`box${box.topRow}${box.rightCol}`}
                        className='bounding-box'
                        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FaceDetection;
