import {screen , render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe("Followers ListTesting", () => {
    it("Checking if API is fetching followers or not", async() => {
        render(<MockedFollowersList/>)
        const divElement = await screen.findAllByTestId(/follower-item/i)
        expect(divElement.length).toBe(5)
    })

    it("Checking if a single follower item is being rendered", async() => {
        render(<MockedFollowersList/>)
        const divElement = await screen.findByTestId("follower-item-0");
        expect(divElement).toBeInTheDocument()
    })
})
