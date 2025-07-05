import React, {useEffect, useMemo, useState} from "react";

const Table = ({columns, search, setSearch, data}) => {

    return (
        <div className="customTable overflow-y-auto p-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">
            <div className="w-full mx-auto p-4">
                <div className="mb-4">
                    <input
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-sm dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                    />
                </div>

                <div className="customTable w-full rounded-md border overflow-hidden dark:border-slate-700 border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 dark:bg-slate-900">
                        <tr>
                            {
                              columns?.map((column, index)=> (
                                  <th key={index} className="p-3 text-left font-medium dark:text-[#abc2d3] text-gray-700 cursor-pointer">{column.header}</th>
                              ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data?.map((user, index)=> (
                                <tr className="border-t dark:border-slate-700 dark:hover:bg-slate-900 border-gray-200 hover:bg-gray-50">
                                    {
                                        columns?.map((column, index)=> (
                                            <td key={index} className="p-3 text-left font-medium dark:text-[#abc2d3] text-gray-700 cursor-pointer">{user[column.key]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                    {!data?.length && (
                        <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">
                            No data found!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Table;
