import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import Discover from "./components/Discover";
// ------
// import { BsBagHeart } from 'react-icons/bs';
// import { BiDollar } from 'react-icons/bi';
// import { SiTask } from 'react-icons/si';
// import { GiPapers } from 'react-icons/gi';
// import { MdIncompleteCircle } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>
      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <Discover />

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] flex justify-center">
          <MiniCalendar />
        </div>
      </div>
    </div>

    // <div>
    //   <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6'>

    //     <div className='flex justify-start items-center bg-[#111c44]  rounded-2xl'>
    //       <div className='p-5 m-5 rounded-full text-white text-[2rem] bg-cyan-500 shadow-lg shadow-cyan-500/50'>
    //         <MdBarChart></MdBarChart>
    //       </div>
    //       <div>
    //         <p className='text-cyan-500'>Earnings</p>
    //         <p className='text-white text-[2rem]'> $350.4</p>
    //       </div>
    //     </div>

    //     <div className='flex justify-start items-center bg-[#111c44] rounded-2xl'>
    //       <div className='p-5 m-5 rounded-full text-white text-[2rem] bg-emerald-500 shadow-lg shadow-emerald-500/50'>
    //         <MdBarChart></MdBarChart>
    //       </div>
    //       <div>
    //         <p className='text-emerald-500'>Spend this month</p>
    //         <p className='text-white text-[2rem]'> $950.4</p>
    //       </div>
    //     </div>

    //     <div className='flex justify-start items-center bg-[#111c44] rounded-2xl'>
    //       <div className='pl-5'>
    //         <p className='text-fuchsia-500'>Spend this month</p>
    //         <p className='text-white text-[2rem]'> $550.4</p>
    //       </div>
    //     </div>

    //     <div className='flex justify-between items-center bg-[#111c44] rounded-2xl'>
    //       <div className='pl-5'>
    //         <p className='text-red-500'>Your Balance</p>
    //         <p className='text-white text-[2rem]'> $1650.4</p>
    //       </div>
    //       <div className="avatar m-5">
    //         <div className="w-16 rounded-full">
    //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LkkMqqsCpoxzyWoFo5YO3d0O3137Pl4sPQ&usqp=CAU" />
    //         </div>
    //       </div>
    //     </div>

    //     <div className='flex justify-start items-center bg-[#111c44] rounded-2xl'>
    //       <div className='p-5 m-5 rounded-full text-white text-[2rem] bg-indigo-500 shadow-lg shadow-indigo-500/50'>
    //         <MdBarChart></MdBarChart>
    //       </div>
    //       <div>
    //         <p className='text-indigo-500'>New task</p>
    //         <p className='text-white text-[2rem]'> 154</p>
    //       </div>
    //     </div>

    //     <div className='flex justify-start items-center bg-[#111c44] rounded-2xl'>
    //       <div className='p-5 m-5 rounded-full text-white text-[2rem] bg-orange-500 shadow-lg shadow-orange-500/50'>
    //         <MdBarChart></MdBarChart>
    //       </div>
    //       <div>
    //         <p className='text-orange-500'>Total Projects</p>
    //         <p className='text-white text-[2rem]'> 154</p>
    //       </div>
    //     </div>

    //   </div >
    //   {/* ------------- */}
    //   <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
    //     <TotalSpent />
    //     <WeeklyRevenue />
    //   </div>
    //   {/* ------------- */}
    //   <div className='grid gap-5 grid-cols-3 my-5'>
    //     <div className="stats bg-primary text-primary-content col-span-2">
    //       <div className="stat">
    //         <div className="stat-title">Account balance</div>
    //         <div className="stat-value">$89,400</div>
    //         <div className="stat-actions">
    //           <button className="btn btn-sm btn-success">Add funds</button>
    //         </div>
    //       </div>

    //       <div className="stat">
    //         <div className="stat-title">Current balance</div>
    //         <div className="stat-value">$89,400</div>
    //         <div className="stat-actions">
    //           <button className="btn btn-sm btn-warning">Withdrawal</button>
    //           <button className="btn btn-sm mx-2 btn-success">deposit</button>
    //         </div>
    //       </div>
    //     </div>


    //     <div className='flex justify-start items-center bg-[#111c44] glass rounded-2xl'>
    //       <div className='p-5 m-5 rounded-full text-white text-[2rem] bg-lime-400 shadow-lg shadow-lime-400/50'>
    //         <MdBarChart></MdBarChart>
    //       </div>
    //       <div>
    //         <p className='text-lime-500'>Earnings</p>
    //         <p className='text-white text-[2rem]'> $350.4</p>
    //       </div>
    //     </div>
    //   </div>
    //   {/* ------------- */}
    //   <div className='grid gap-5 grid-cols-2'>
    //     <div className='card glass p-5  rounded-2xl'>
    //       <div className='card glass  p-5 h-full rounded-2xl flex flex-col justify-around'>
    //         <p className='text-5xl text-[#111c44] font-bold'>Discover, <br /> collect, and sell <br /> extraordinary NFTs</p>
    //         <p className='my-5'>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
    //         <div>
    //           <button className="btn glass btn-outline btn-info w-full ">Success</button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className='bg-primaryLight p-5 rounded-2xl'>
    //       <div className="card glass w-full">
    //         <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpkFt-9TEMMXWRxgcyJqLj8Zihiv_5kxwSA&usqp=CAU" alt="car!" /></figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Today's best selling</h2>
    //           <p>How to park your car at your garage?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn glass btn-primary">Learn now!</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div >


  );
};

export default Dashboard;
