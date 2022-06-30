import LearnPathCard from './index'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


test("LearnPathCard rendered", () => {
    render(
        <BrowserRouter>
            <LearnPathCard />
        </BrowserRouter>);
    // 
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();

    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();


});


test("simulate button", async () => {
    render(
        <BrowserRouter>
            <LearnPathCard />
        </BrowserRouter>);
    const title = screen.getByRole('link');

    await userEvent.click(title);

    expect(title).toBeTruthy();

});