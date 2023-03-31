import React from 'react';
import InputField from "components/fields/InputField";
import TextField from "components/fields/InputField";
import Glass from 'components/glass';

const index = () => {
    return (
        <div>
            {/* ----- banner ----- */}
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
            {/* -----publish & blog------ */}
            <div className='grid gap-4 my-5 grid-cols-4 '>
                {/* <div className='col-span-2 p-5 glass rounded-2xl'> */}
                <Glass extra={'col-span-2'}>
                    <div className=' h-full  bg-primaryLight dark:bg-primaryDark rounded-2xl p-5'>
                        Publish a new blog
                        <InputField
                            extra="mb-3"
                            label="Title"
                            placeholder="type your blog title"
                            id="title"
                            type="text"
                        ></InputField>
                        <InputField
                            extra="mb-3"
                            label="Category"
                            placeholder="category"
                            id="category"
                            type="text"
                        ></InputField>
                        <InputField
                            extra="mb-3"
                            label="Source"
                            placeholder="source"
                            id="title"
                            type="text"
                        ></InputField>
                        <InputField
                            extra="mb-3"
                            label="Date"
                            id="title"
                            type="date"
                        ></InputField>

                        <TextField
                            extra="mb-3"
                            label="Details"
                            placeholder="detail"
                            id="detail"
                            type="text"
                        ></TextField>
                        <div className='flex justify-end'>
                            <div><button className="btn btn-outline btn-primary dark:glass">Publish Blog</button></div>
                        </div>
                    </div>
                </Glass>
                {/* </div> */}
                {/* ----- */}
                <Glass extra={'col-span-2'}>
                    <div className="bg-primaryLight dark:bg-primaryDark  flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-2xl glass shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                                <span className="text-xs dark:text-gray-400">4 hours ago</span>
                            </div>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                            <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                            <p className="text-sm dark:text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="space-x-2">
                                <button aria-label="Share this post" type="button" className="p-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                        <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                                    </svg>
                                </button>
                                <button aria-label="Bookmark this post" type="button" className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                        <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex space-x-2 text-sm dark:text-gray-400">
                                <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of comments" className="w-4 h-4 fill-current dark:text-violet-400">
                                        <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                        <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                    </svg>
                                    <span>30</span>
                                </button>
                                <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-400">
                                        <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                                        <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                                    </svg>
                                    <span>283</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Glass>
            </div>
            {/* ----galary---- */}
            <Glass>
                <div className='rounded-2xl bg-primaryLight dark:bg-primaryDark p-5 '>
                    <div className="relative w-full flex gap-4 py-6 overflow-x-auto ">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?1" alt="Image 1" />
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" />
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?3" alt="Image 3" />
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?4" alt="Image 4" />
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?5" alt="Image 5" />
                    </div>
                </div>
            </Glass>
            {/* --- 3 tips ------ */}
            <Glass extra={'my-5'}>
                <section className="bg-primaryLight dark:bg-primaryDark rounded-2xl  dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">3 Tips befor starting blogs</h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                    <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </Glass>
            {/* ------ more 3 tips wiht img */}
            <Glass>
                <section className="bg-primaryLight dark:bg-primaryDark rounded-2xl dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 ">
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 glass rounded-2xl dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFioiOlpEbRwc4NQJckbinz5mIWv8Ss-8gTkoL9kOnKs2bTkhfVOlOE_PoRr5TTenbHnM&usqp=CAU" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>
                        </div>
                    </div>
                </section>
            </Glass>
        </div>
    );
};

export default index;