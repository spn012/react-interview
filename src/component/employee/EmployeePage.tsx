import React, { useState } from 'react'
import AddEditEmployee from './AddEditEmployee';
import employeeType from './employee.model';
import EmployeeList from './EmployeeList';

const EmployeePage = () => {
    const [showAddForm, setShowAddForm] = React.useState<boolean>(false);
    const [data, setData] = useState<employeeType[]>([]);
    const [mode, setMode] = useState<"Add" | "Edit">("Add");
    const [selectedEmp, setSelectedEmp] = useState<employeeType | undefined>();
    const handleAdd = (emp: employeeType) => {
        let list = [...data, emp];
        setData(list);
        setShowAddForm(false);
    }
    const handleEditRequest = (employee: employeeType) => {
        setMode("Edit");
        setSelectedEmp(employee);
    }
    const handleDelete = (employee: employeeType) => {
        let list = [...data];
        let index = list.findIndex(item => item.firstName === employee.firstName && item.lastName === employee.lastName);
        if (index >= 0) {
            list.splice(index, 1);
            setData([...list]);
        }
    }
    return (
        <div className='employee-container'>
            <div>
                <button onClick={() => {
                    setShowAddForm(true);
                }}>Add</button>
                <EmployeeList employees={data} onEditRequest={handleEditRequest} onDelete={handleDelete}  />
            </div>
            {
                showAddForm && <AddEditEmployee FormAction={handleAdd} mode={mode} selectedEmp={selectedEmp} setShowAddForm={setShowAddForm}/>
            }
        </div>
    )
}

export default EmployeePage;