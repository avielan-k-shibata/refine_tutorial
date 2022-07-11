import React from "react";
import { IResourceComponentsProps } from "@pankod/core";
import {
    useTable,
    // Column,
    // HeaderGroup,
    // Cell,
    // UseTableColumnProps,
    // UseTableRowProps,
} from '@pankod/refine-react-table';

import { IItem } from "interfaces";

export const ItemList: React.FC = () => {
    
    // const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({ columns });

    const { tableProps, sorter } = useTable<IItem>({
        metaData: {
            fields: ["id", "name"],
        },
    });
    return (
        <div className="container mx-auto pb-4">
            {console.log(tableProps)}{sorter}
        </div>
    );
};