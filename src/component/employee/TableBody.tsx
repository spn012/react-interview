import React from 'react'
import employeeType from './employee.model'

type Props = {
    employee?: employeeType,
    onEditRequest: Function,
    onDelete: Function
}

const TableBody = ({ employee, onDelete, onEditRequest }: Props) => {
    const handleEdit = (e: React.MouseEvent) => {
        onEditRequest(employee);
    }
    const handleDelete = (e: React.MouseEvent) => {
        let res = window.confirm("Are you sure, you want to delete the employee");
        if (res)
            onDelete(employee);
    }
    return (
        <tr>
            <td><img src={employee?.profileUrl} alt="" height="100" width="100" /> </td>
            <td>{employee?.firstName}</td>
            <td>{employee?.lastName}</td>
            <td>{employee?.DOB}</td>
            <td>{employee?.designation}</td>
            <td>{employee?.experience}</td>
            <td onClick={handleEdit}>Edit</td>
            <td onClick={handleDelete}>Delete</td>
        </tr>
    )
}

export default TableBody