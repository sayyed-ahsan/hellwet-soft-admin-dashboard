import Card from 'components/card';
import Glass from 'components/glass';
import React from 'react';

const Discover = () => {
    return (
        <div className='card glass p-5 rounded-2xl'>
            <Glass extra='card glass p-5 h-full rounded-2xl flex flex-col justify-around'>
                <p className='text-5xl font-bold'>Discover, <br /> collect, and sell <br /> extraordinary NFTs</p>
                <p className='my-5'>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                <div>
                    <button className="btn glass btn-outline btn-info w-full ">Success</button>
                </div>
            </Glass>
        </div>
    );
};

export default Discover;