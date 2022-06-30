import Button from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

test("searchbar rendered", () => {
  const historys = createMemoryHistory();
  render(
    <Router history={historys}>
      <Button link="/learning-path/HTML" />
    </Router>
  );

  userEvent.click(screen.getByText(/selengkapnya/));

  expect(historys.location.pathname).toEqual("/learning-path/HTML");
});