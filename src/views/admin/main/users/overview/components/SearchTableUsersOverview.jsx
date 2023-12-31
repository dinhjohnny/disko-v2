import SearchIcon from "components/icons/SearchIcon";
import React, { useMemo } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import image from "../../../../../../assets/svg/LinkedIn_icon.svg.png"
import { Link } from "react-router-dom";

function SearchTableUsers(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    prepareRow,
    nextPage,
    previousPage,
    setPageSize,

    setGlobalFilter,
    state,
  } = tableInstance;

  const { pageSize } = state;

  return (
    <div className="h-full w-full">
      {/* Search */}
      <div
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="flex w-[400px] max-w-full items-center rounded-xl p-[8px] pt-[20px] xl:ml-3"
      >
        <div className="flex h-[38px] w-[400px] flex-grow items-center rounded-xl bg-lightPrimary text-sm text-gray-600 dark:!bg-navy-900 dark:text-white">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search...."
            className="block w-full rounded-full bg-lightPrimary text-base text-navy-700 outline-none dark:!bg-navy-900 dark:text-white"
          />
        </div>
      </div>

      {/* table */}
      <div className="mt-[14px] h-full w-full overflow-x-scroll 2xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full font-dm">
          <thead className="w-full">
            {headerGroups.map((headerGroup, index) => (
              <tr
                className="items-center border-b border-gray-200 dark:!border-white/10"
                {...headerGroup.getHeaderGroupProps()}
                key={index}
              >
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-[27px] pt-[32px] pb-[12px] text-start text-xs tracking-wide text-gray-600"
                    key={index}
                  >
                    <div className="text-xs font-bold">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  className="border-b border-gray-200 dark:!border-white/10"
                  {...row.getRowProps()}
                  key={index}
                >
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "USER NAME") {
                      data = (
                        <div className="flex w-full items-center gap-[14px]">
                          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-300">
                            <img
                              className="h-full w-full rounded-full"
                              src={cell.value[1]}
                              alt=""
                            />
                          </div>
                          <Link 
                            to={`/admin/main/profile/overview/${cell.value[2]}`}  // assuming cell.value[2] contains userID
                            className="font-medium text-navy-700 dark:text-white"
                          >
                            {cell.value[0]}
                          </Link>
                        </div>
                      );
                    } else if (cell.column.Header === "LINKEDIN") {
                      data = (
                        <div className="w-full text-base font-medium text-navy-700 dark:text-white">
                          <a href={cell.value} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt="LinkedIn" className="w-8 h-auto"/>
                          </a>
                        </div>
                      );
                    }
                    else if (cell.column.Header === "EMAIL") {
                      data = (
                        <div className="w-full text-base font-medium text-navy-700 dark:text-white">
                          {cell.value}
                        </div>
                      );
                    } 
                    
                  
                     else if (cell.column.Header === "JOIN DATE") {
                      data = (
                        <div className="w-full text-base font-medium text-navy-700 dark:text-white">
                          {cell.value}
                        </div>
                      );
                    } else if (cell.column.Header === "USER TYPE") {
                      data = (
                        <div className="w-full text-base font-medium text-navy-700 dark:text-white">
                          {cell.value}
                        </div>
                      );
                    } else if (cell.column.Header === "ACTIONS") {
                      data = (
                        <div
                          className="font-medium text-brand-500 underline hover:cursor-pointer dark:text-white"
                          id={cell.value}
                        >
                          Edit order
                        </div>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="mt-[20px] px-4 py-[16px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="mt-2 flex h-20 w-full items-center justify-between px-6">
        {/* left side */}
        <div className="flex items-center gap-3">
          <p className="> Show rows per page text-sm text-gray-700">
            Show rows per page{" "}
          </p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="h-[32px] w-[75px] rounded-[20px] border border-gray-200 px-2 text-gray-700 dark:!border-white/10 dark:bg-navy-800"
            name=""
            id=""
          >
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => previousPage()}
            className={`linear flex items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 `}
          >
            <MdChevronLeft />
          </button>

          <button
            onClick={() => nextPage()}
            className={`linear flex items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 `}
          >
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTableUsers;
