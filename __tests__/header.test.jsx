import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "../app/components/Header";
import { renderWithProviders } from "../app/util/testUtils";

describe("Header", () => {
  it("does not render signout button in header component when user is not signed in", () => {
    renderWithProviders(<Header />);
    const signout = screen.queryByText("Sign Out");
    expect(signout).toBeNull();
  });

  it("renders name and email in header component when user is signed in", () => {
    const mockAuthState = {
      user: {
        name: "test-name",
        email: "test-email",
        image: "test-image"
      }
    };

    renderWithProviders(<Header />, {
      preloadedState: {
        auth: mockAuthState
      }
    });

    const signout = screen.getByTestId("sign-out");
    const username = screen.getByText(mockAuthState.user.name, {
      exact: false
    });

    expect(signout).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
