import Glass from 'components/glass';
import React from 'react';
import userSix from '../../../assets/img/avatars/user-02.png';
import CoverOne from '../../../assets/img/profile/banner.png';
import Banner from '../profile/components/Banner';

const index = () => {
    return (
        <Glass>
            <div>
                <section className=" flex-1 py-6 px-4 md:px-4 lg:px-8 bg-primaryLight rounded-2xl dark:bg-primaryDark">

                    {/* <!-- Header --> */}
                    <div className="flex items-center justify-between">
                        <span className="text-lightText dark:text-darkText text-xl font-semibold">Clients</span>
                        <div className="flex items-center space-x-4 ">
                            <button className="bg-gray-200 p-2 text-gray-600 rounded hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                                </svg>
                            </button>
                            <button className="bg-primary hover:bg-primary/90 py-1.5 px-4 rounded flex items-center text-white space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                                </svg>
                                <span>Add Client</span>
                            </button>
                            {/* <!-- Menu button on small screen --> */}
                            <button className="lg:hidden bg-gray-50 p-2 text-gray-600 rounded hover:bg-gray-300 focus:text-primary outline-none focus:drop-shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Navigation View --> */}
                    <nav className="flex items-center mt-8 border-b space-x-10 text-gray-400 font-medium">
                        <a href="#" className="flex items-center space-x-1 text-gray-600 border-b-2 border-b-primary pb-3">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                </svg>
                            </span>
                            <span>Overview</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 pb-3 border-b-2 border-transparent hover:border-b-primary hover:text-gray-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                                </svg>
                            </span>
                            <span>List View</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 pb-3 border-b-2 border-transparent hover:border-b-primary hover:text-gray-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </span>
                            <span>Segment</span>
                        </a>
                    </nav>

                    <div className="mt-8 text-gray-500">
                        <table className="w-full table-auto">
                            <thead className="uppercase tracking-wider border-b h-7 align-top text-xs font-semibold">
                                <tr>
                                    <td className="min-w-fit w-3/5 md:w-1/2 lg:w-fit">Client</td>
                                    <td className="">Tags</td>
                                    <td className="hidden lg:table-cell">Created</td>
                                    <td className="hidden xl:table-cell"></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/women/47.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Emy Jackson</span>
                                            <span className="text-xs">emy_jack@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-blue-500 bg-blue-50 rounded-full">VIP Client</span>
                                        <span className="px-2 py-0.5 inline-block  text-pink-500 bg-pink-50 rounded-full">Early Adaptor</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2022-08-27</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/9.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Martin Hughes</span>
                                            <span className="text-xs">martin.hk@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-blue-500 bg-blue-50 rounded-full">VIP Client</span>
                                        <span className="px-2 py-0.5 inline-block  text-pink-500 bg-pink-50 rounded-full">Early Adaptor</span>
                                        <span className="px-2 py-0.5 inline-block  text-teal-500 bg-teal-50 rounded-full">Sales</span>
                                        <span className="px-2 py-0.5 inline-block text-orange-500 bg-orange-50 rounded-full">Finance</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2021-01-29</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/women/75.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Laura Madison</span>
                                            <span className="text-xs">l.madisonk@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-pink-500 bg-pink-50 rounded-full">Early Adaptor</span>
                                        <span className="px-2 py-0.5 inline-block  text-teal-500 bg-teal-50 rounded-full">Sales</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2021-01-12</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/11.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Shoan Stephen</span>
                                            <span className="text-xs">stephen.sh@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-violet-500 bg-violet-50 rounded-full">Manager</span>
                                        <span className="px-2 py-0.5 inline-block  text-blue-500 bg-blue-50 rounded-full">VIP Client</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2020-02-21</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/women/11.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Kate Medona</span>
                                            <span className="text-xs">kate_medona@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-violet-500 bg-violet-50 rounded-full">Manager</span>
                                        <span className="px-2 py-0.5 inline-block  text-orange-500 bg-orange-50 rounded-full">Finance</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2020-08-23</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/47.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Paul Benn</span>
                                            <span className="text-xs">p.benn@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-pink-500 bg-pink-50 rounded-full">Early Adaptor</span>
                                        <span className="px-2 py-0.5 inline-block  text-orange-500 bg-orange-50 rounded-full">Finance</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2019-11-14</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/34.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Chris Maya</span>
                                            <span className="text-xs">chris.maya@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-blue-500 bg-blue-50 rounded-full">VIP Client</span>
                                        <span className="px-2 py-0.5 inline-block  text-indigo-500 bg-indigo-50 rounded-full">IT</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2019-10-08</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/21.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Mike Smith</span>
                                            <span className="text-xs">m.smith@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-orange-500 bg-orange-50 rounded-full">Finance</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2019-01-04</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/men/33.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Alison Owen</span>
                                            <span className="text-xs">alison_owen@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-indigo-500 bg-indigo-50 rounded-full">IT</span>
                                        <span className="px-2 py-0.5 inline-block  text-violet-500 bg-violet-50 rounded-full">Manager</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2018-10-30</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                                <tr className="h-16 border-b border-gray-100 hover:bg-primary/5">
                                    <td className="flex items-center space-x-3 h-16">
                                        <img className="rounded-full h-9 w-9 " src="https://randomuser.me/api/portraits/women/32.jpg" alt="" srcset="" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Sara Knight</span>
                                            <span className="text-xs">s.knight@mclient.com</span>
                                        </div>
                                    </td>
                                    <td className="text-xs space-y-1.5">
                                        <span className="px-2 py-0.5 inline-block  text-pink-500 bg-pink-50 rounded-full">Early Adaptor</span>
                                        <span className="px-2 py-0.5 inline-block  text-teal-500 bg-teal-50 rounded-full">Sales</span>
                                    </td>
                                    <td className="hidden lg:table-cell">2018-02-18</td>
                                    <td className="text-xl hidden xl:table-cell">  </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="h-24">
                                    <td colspan="4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-gray-400">
                                                <span>Rows per page</span>
                                                <span className="text-gray-500 font-semibold ml-2">10</span>
                                                <span>
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                                <span className="ml-2">out of</span>
                                                <span className="ml-2">386</span>
                                            </div>

                                            <div>
                                                <nav className="isolate inline-flex rounded-md items-center space-x-3 text-gray-400" aria-label="Pagination">
                                                    <span className="p-0.5 bg-gray-100 rounded">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <div className="hidden sm:inline-flex items-center space-x-3">
                                                        <span className="text-gray-500 font-semibold">1</span>
                                                        <span>2</span>
                                                        <span>3</span>
                                                        <span>...</span>
                                                        <span>15</span>
                                                        <span>16</span>
                                                    </div>
                                                    <span className="p-0.5 bg-gray-100 rounded">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </nav>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </div>
        </Glass>
    );
};

export default index;