import React from "react";
import {
    useTable,
    Column,
    HeaderGroup,
    Cell,
    UseTableColumnProps,
    UseTableRowProps,
} from '@pankod/refine-react-table';

export const ItemList: React.FC = () => {
    const columns: Array<Column> = React.useMemo(
        () => [
            {
                id: "id",
                Header: "ID",
                accessor: "id",
            },
            {
                id: "name",
                Header: "商品名",
                accessor: "name",
            },
            {
                id: "status",
                Header: "Status",
                accessor: "status",
            },
            {
                id: "createdAt",
                Header: "CreatedAt",
                accessor: "createdAt",
            },

        ],
        [],
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
        useTable({ columns });
    console.log(columns)
    return (
        <div className="container mx-auto pb-4">
            <table
                className="min-w-full table-fixed divide-y divide-gray-200 border"
                {...getTableProps()}
            >
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup: HeaderGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: UseTableColumnProps) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="divide-y divide-gray-200 bg-white"
                >
                    {rows.map((row: UseTableRowProps) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="transition hover:bg-gray-100"
                            >
                                {row.cells.map((cell: Cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="whitespace-nowrap py-2 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};