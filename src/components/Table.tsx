import Image from 'next/image';
import { ReactNode } from 'react';

export default function Table({ rows, columns }: { rows: any[], columns: string[] }) {
    const MAX_CHARACTERS = 13;
    const BORDER_WIDTH = 2;

    return (
        <table className="font-bold border-b-8 w-full">
            <thead className='text-left'>
                <tr>
                    {columns.map((column) => (
                        <th className={`border-r-${BORDER_WIDTH} border-b-${BORDER_WIDTH} p-4`} key={column}>{column}</th>
                    ))}
                    <th className={`border-b-${BORDER_WIDTH} p-4`}></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        {columns.map((_, index) => {
                            const vals_array: ReactNode[] = Array.from(Object.values(row));
                            return <td className={`max-w-full border-r-${BORDER_WIDTH} border-b-${BORDER_WIDTH} p-5`}>{
                                typeof vals_array[index] === 'string' && vals_array[index].length > MAX_CHARACTERS ? vals_array[index].substring(0, MAX_CHARACTERS) + '...' : vals_array[index]
                                }
                            </td>
                            })}
                        <td className={`border-b-${BORDER_WIDTH}`}>
                            <div className="grid grid-cols-2 p-5">
                                <button className='flex justify-start'>
                                    <Image src="/pencil.svg" alt="Edit row." width={20} height={20} />
                                </button>
                                <button className='flex justify-end'>
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