import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import EmployeePage from '../EmployeePage'

describe('Employee Page Test', () => {
    afterEach(cleanup);
    test('should page render by default', async () => {
        render(<EmployeePage />);
        let addBtn = await screen.getAllByText("Add");
        expect(addBtn).toBeDefined();
    });
    test('page should render add form on click of add', async () => {
        render(<EmployeePage />);
        let addBtn = await screen.getByText("Add");
        fireEvent.click(addBtn);
        expect(screen.getAllByPlaceholderText('firstName')).toBeDefined();
    });
    test('should hide add form when clicked on cancel', async () => {
        render(<EmployeePage />);
        let addBtn = await screen.getByText("Add");
        await fireEvent.click(addBtn);
        let cancelBtn = await screen.getByText("close");
        await fireEvent.click(cancelBtn);
        expect(cancelBtn).not.toBeDefined();
        // fireEvent.change(screen.getByPlaceholderText("FirstName"), {
        //     target: {
        //         value: "Sakti"
        //     }
        // });
        // fireEvent.change(screen.getByPlaceholderText("LastName"), {
        //     target: {
        //         value: "Nanda"
        //     }
        // });
        // fireEvent.change(screen.getByPlaceholderText("Designation"), {
        //     target: {
        //         value: "Software Engineer"
        //     }
        // });
        // fireEvent.change(screen.getByPlaceholderText("Experience"), {
        //     target: {
        //         value: "6.8 Years"
        //     }
        // });

    });
});