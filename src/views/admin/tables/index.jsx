
import {
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";

import Img from "../../../assets/img/profile/image1.png"
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";
import Table6 from "./components/Table6";
import Table7 from "./components/Table7";
import Glass from "components/glass";

const Tables = () => {
  return (

    <div>
      <div className="mb-5"><Table6 /></div>
      {/* <div className="mb-5"><Table1 /></div> */}
      <div className="mb-5"><Table2 /></div>
      <div className="mb-5"><Table3 /></div>
      <div className="mb-5"><Table4 /></div>
      <div className="mb-5"><Table7 /></div>
      <div className="mb-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <Glass>
          <ColumnsTable
            columnsData={columnsDataColumns}
            tableData={tableDataColumns}
          />
        </Glass>

        <Glass>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </Glass>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex justify-center space-x-1 dark:text-gray-100">
          <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">1</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 2">2</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 3">3</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 4">4</button>
          <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tables;
