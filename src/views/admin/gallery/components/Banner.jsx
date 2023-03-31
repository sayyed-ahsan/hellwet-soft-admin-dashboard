import Card from 'components/card';
import Glass from 'components/glass';
import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <Card> */}
            <Glass>
                <div className="p-5 mx-auto  sm:p-10 md:p-16 rounded-2xl bg-primaryLight dark:bg-primaryDark dark:text-gray-100">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div className="rounded-2xl glass backdrop-blur-xl bg-primaryLight  p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-primaryDark">
                            <div className="space-y-2 ">
                                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                                <p className="text-xs dark:text-gray-400">By
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                                </p>
                            </div>
                            <div className="dark:text-gray-100">
                                <p>Insert the actual text content here...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Glass>
            {/* </Card> */}
        </div>
    );
};

export default Banner;