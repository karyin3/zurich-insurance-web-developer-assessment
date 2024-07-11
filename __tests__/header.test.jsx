import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "../app/components/Header";
import { renderWithProviders } from "../app/util/testUtils";

describe("Header", () => {
  it("does not render email in header component when user is not signed in", () => {
    renderWithProviders(<Header />);
    const email = screen.queryByText("Signed in");
    expect(email).toBeNull();
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

    const email = screen.getByText(mockAuthState.user.email, { exact: false })
    const username = screen.getByText(mockAuthState.user.name, { exact: false });
    
    expect(email).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
