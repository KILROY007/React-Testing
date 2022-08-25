import { render , screen , fireEvent } from '@testing-library/react'
import  AddInput from '../AddInput';

const mocksetTodos = jest.fn()

describe("Input Testing",() => {
    it("Checking Value Change On Input Field", async () => {
        render(

        <AddInput 
            todos={[]}
            setTodos={mocksetTodos}
        />
        
        );
        const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(InputElement,{target:{value : "Hi"}})
        expect(InputElement.value).toBe("Hi");
    });


    it("Checking if value is empty after button click", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mocksetTodos}
            />
        );
        const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const ButtonElement = screen.getByText(/Add/i)
        fireEvent.change(InputElement,{target:{value : "Hi"}})
        fireEvent.click(ButtonElement)
        expect(InputElement.value).toBe("")
    })
})
