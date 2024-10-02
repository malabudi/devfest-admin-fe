import Image from 'next/image';
import { ReactNode } from 'react';

export default function Table({ rows, columns, editRow, deleteRow }: { rows: any[], columns: string[], editRow: () => void, deleteRow: (index: number) => void }) {
    const MAX_CHARACTERS = 13;

    return (
        <table className="font-bold border-b-8 w-full">
            <thead className='text-left'>
                <tr>
                    {columns.map((column) => (
                        <th className="border-r-2 border-b-2 p-4" key={column}>{column}</th>
                    ))}
                    <th className="border-b-2 p-4"></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={row.name}>
                        {columns.map((column, index) => {
                            const vals_array: ReactNode[] = Array.from(Object.values(row));
                            return <td className="max-w-full border-r-2 border-b-2 p-5" key={column}>{
                                typeof vals_array[index] === 'string' && vals_array[index].length > MAX_CHARACTERS ? vals_array[index].substring(0, MAX_CHARACTERS) + '...' : vals_array[index]
                                }
                            </td>
                            })}
                        <td className="border-b-2">
                            <div className="grid grid-cols-2 p-5">
                                <button className='flex justify-start' onClick={editRow}>
                                    <Image src="/pencil.svg" alt="Edit row." width={20} height={20} />
                                </button>
                                <button className='flex justify-end' onClick={() => {
                                    deleteRow(index);
                                }}>
                                    <Image src="/trash.svg" alt="Delete row." width={20} height={20} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}