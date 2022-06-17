import employeeType from './employee.model'
import TableBody from './TableBody'
type Props = {
    employees?: employeeType[],
    onDelete: Function,
    onEditRequest: Function
}

const EmployeeList = ({ employees, onDelete, onEditRequest }: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>profile Pic</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>DOB</th>
                    <th>Designation</th>
                    <th>Experience</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees?.map((employee, index: number) => {
                        return <TableBody onEditRequest={onEditRequest} onDelete={onDelete} employee={employee} key={`${employee.firstName}-${index}`} />
                    })
                }
            </tbody>
        </table>
    )
}

export default EmployeeList