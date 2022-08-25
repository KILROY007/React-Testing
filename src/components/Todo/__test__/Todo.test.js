import { fireEvent, render , screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import  Todo from '../Todo';



const MockedToDo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}


describe("Header",() => {
    it("Checking Header text", async () => {
        render(
            <MockedToDo />
        );
        const inputElement =  screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByText("Add")
        fireEvent.change(inputElement,{target:{value : "Eat Well"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByTestId("task-container")
        expect(divElement).toHaveTextContent("Eat Well")
    });
})
