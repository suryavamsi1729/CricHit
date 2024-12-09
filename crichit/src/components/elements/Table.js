import React from "react";

export default function Table({ header, data }) {
    return (
        <table className="table-ele w-1/2 h-auto">
            <thead className="table-header">
                <tr className="table-row">
                    {header.map((itm, i) => (
                        <th
                            key={i}
                            className="table-header-cel text-base font-normal text-white"
                        >
                            {itm}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-body">
                {data.map((row, i) => (
                    <tr key={i} className="table-row">
                        {row.map((cell, j) => (
                            <td key={j} className="table-body-cell">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
