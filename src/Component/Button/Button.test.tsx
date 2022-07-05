import { render, screen } from "@testing-library/react";
import Button from ".";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import React from "react";

test("simulate button", async () => {
  const historys = createMemoryHistory();
  render(
    <Router history={historys}>
      <Button link={`/learning-path/HTML`} />
    </Router>
  );
  userEvent.click(screen.getByText(/Selengkapnya/));
  expect(historys.location.pathname).toBe("/learning-path/HTML");
});
