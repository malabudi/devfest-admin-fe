import Image from 'next/image';
import { ReactNode, useState } from 'react';
import toast from 'react-hot-toast';

export default function Table({ rows, columns, editRow, deleteRow }: { rows: any[], columns: string[], editRow: (row: any, index: number) => void, deleteRow: (index: number) => void }) {
    const MAX_CHARACTERS = 13;
    const [showModal, setShowModal] = useState(false);
    const [rowToDelete, setRowToDelete] = useState<number | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingRow, setEditingRow] = useState<any>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleDeleteClick = (index: number) => {
        setRowToDelete(index);
        setShowModal(true);
    };

    const confirmDelete = () => {
        if (rowToDelete !== null) {
            deleteRow(rowToDelete);
            toast.success('Row deleted successfully!');
        }
        setShowModal(false);
        setRowToDelete(null);
    };

    const handleEditClick = (row: any, index: number) => {
        setEditingRow({ ...row });
        setEditingIndex(index);
        setShowEditModal(true);
    };

    const handleEditChange = (field: string, value: string) => {
        setEditingRow((prev: any) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleEditSave = () => {
        if (editingIndex !== null && editingRow) {
            editRow(editingIndex, editingRow);
            toast.success('Row updated successfully!');
            setShowEditModal(false);
            setEditingRow(null);
            setEditingIndex(null);
        }
    };

    return (
        <div>
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
                                    <button className='flex justify-start' onClick={() => handleEditClick(row, index)}>
                                        <Image src="/pencil.svg" alt="Edit row." width={20} height={20} />
                                    </button>
                                    <button className='flex justify-end' onClick={() => {
                                        handleDeleteClick(index);
                                    }}>
                                        <Image src="/trash.svg" alt="Delete row." width={20} height={20} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
                        <p>Are you sure you want to delete this row?</p>
                        <div className="modal-buttons">
                            <button className="text-purple-600 bg-blue-200 hover:text-white hover:bg-purple-800 font-bold px-4 py-2 rounded" onClick={confirmDelete}>Yes</button>
                            <button className='text-red-500 hover:bg-red-700 hover:text-white bg-red-100 font-bold px-4 py-2 rounded' onClick={() => setShowModal(false)}>No</button>
                        </div>
                    </div>
                    <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          position: relative;
        }
        .close-button {
          position: absolute;
          top: -3px;
          right: 5px;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .modal-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }
      `}</style>
                </div>
            )}

            {/*Edit Modal*/}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Edit Information</h2>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                                ×
                            </button>
                        </div>
                        <div className="space-y-4">
                            {editingRow && columns.map((column) => (
                                <div key={column} className="grid grid-cols-4 items-center gap-4">
                                    <label className="text-right font-medium">{column}:</label>
                                    <input
                                        className="col-span-3 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        value={editingRow[column.toLowerCase()] || ''}
                                        onChange={(e) => handleEditChange(column.toLowerCase(), e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                className='text-red-500 hover:bg-red-700 hover:text-white bg-red-100 font-bold px-4 py-2 rounded'
                                onClick={() => setShowEditModal(false)} >
                                Close
                            </button>
                            <button
                                className="text-purple-600 bg-blue-200 hover:text-white hover:bg-purple-800 font-bold px-4 py-2 rounded"
                                onClick={handleEditSave} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}