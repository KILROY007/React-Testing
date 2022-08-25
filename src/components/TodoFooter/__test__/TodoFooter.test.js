import { screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../TodoFooter'

const MockedTodoFooter = ({numberOfIncompleteTasks}) => {
    return(
        <BrowserRouter>
            <TodoFooter 
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )   
}

describe("Todo Footer", () => {
    it('should render "task" when the number of incomplete tasks is one', () => {
        render(
            <MockedTodoFooter 
                numberOfIncompleteTasks={1}
            />
        );
        const pElement = screen.getByTestId("para");
        
        expect(pElement).toHaveTextContent("1 task left");
    });

    it('should render 5 tasks left',() => {
        render(<MockedTodoFooter numberOfIncompleteTasks={5}/>);
        const pElement = screen.getByText("5 tasks left");
        expect(pElement).toHaveTextContent("5 tasks left")
    })
    
})
