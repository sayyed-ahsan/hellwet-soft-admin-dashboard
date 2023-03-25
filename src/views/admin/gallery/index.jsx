import Card from 'components/card';
import React from 'react';
import Banner from './components/Banner';
import GalleryImg from './components/GalleryImg';
import GalleryImg2 from './components/GalleryImg2';

const index = () => {
    return (
        <div>
            <div className='mb-5'>
                <Banner></Banner>
            </div>
            <GalleryImg></GalleryImg>
            <div className='my-5'>
                <GalleryImg2></GalleryImg2>
            </div>
        </div>
    );
};

export default index;