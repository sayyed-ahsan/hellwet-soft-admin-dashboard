import Glass from 'components/glass';
import React from 'react';

const Table2 = () => {
    return (
        <Glass>
            <div className="overflow-x-auto">
                <table className=" bg-primaryLight dark:bg-primaryDark dark:text-darkText rounded-2xl w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th className='my-5 block'>Img</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjl1oGIeNhrUA9vZwpB7C4jUb9lySB0vwK8w&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>teal</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUXYmbcwcoIYKhXgzZut6BPn_7FsIi1VL5A&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjl1oGIeNhrUA9vZwpB7C4jUb9lySB0vwK8w&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>teal</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUXYmbcwcoIYKhXgzZut6BPn_7FsIi1VL5A&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjl1oGIeNhrUA9vZwpB7C4jUb9lySB0vwK8w&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>teal</td>
                        </tr>
                        <div className='mb-3'></div>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUXYmbcwcoIYKhXgzZut6BPn_7FsIi1VL5A&usqp=CAU" />
                                    </div>
                                </div>
                            </th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        <div className='mb-3'></div>
                    </tbody>
                </table>
            </div>
        </Glass>
    );
};

export default Table2;