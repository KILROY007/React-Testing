import { render , screen } from '@testing-library/react'
import  Header from '../Header';


describe("Header",() => {
    it("Checking Header text", async () => {
        render(<Header title="Sumant is here"/>);
        const HeaderElemment = screen.getByText(/Sumant is here/i);
        expect(HeaderElemment).toBeInTheDocument();
    });
})
