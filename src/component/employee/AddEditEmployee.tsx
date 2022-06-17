import React from 'react'
import employeeType from './employee.model';

type Props = {
    FormAction: Function,
    mode: "Add" | "Edit";
    selectedEmp: employeeType | undefined;
    setShowAddForm: Function
}

const AddEditEmployee = ({ FormAction, mode, selectedEmp, setShowAddForm }: Props) => {
    const empRef = React.useRef<HTMLFormElement>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emp: employeeType = {
            firstName: empRef?.current?.firstName.value,
            lastName: empRef?.current?.lastName.value,
            designation: empRef?.current?.designation.value,
            DOB: empRef?.current?.DOB.value,
            experience: empRef?.current?.experience.value,
            profileUrl: empRef?.current?.profileUrl.value,
        };
        FormAction(emp);
    }

    return (
        <div className='form-wrapper' >
            <h3>{mode} an Emploee</h3>
            <form ref={empRef} onSubmit={handleSubmit} className='input-form'>
                <input type="text" name="firstName" required placeholder='FirstName' />
                <input type="text" name="lastName" required placeholder='LastName' />
                <input type="text" name="designation" required placeholder='Designation' />
                <input type="date" name="DOB"  placeholder='Date of Birth' />
                <input type="text" name="experience" placeholder='Experience' />
                <input type="text" name="profileUrl" placeholder='profileUrl' />
                <button type='submit' data-testid="add-new-emp">{mode}</button>

                <button onClick={() => { setShowAddForm(false) }}>close</button>
            </form>
        </div>
    )
}

export default AddEditEmployee