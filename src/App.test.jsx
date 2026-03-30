import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    beforeEach(() => {
        window.location.hash = "";
    });

    it("renders the landing page content by default", () => {
        render(<App />);

        expect(screen.getByText(/the operating stack for secure enterprise agents/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /explore the platform/i })).toBeInTheDocument();
        expect(screen.getByText(/built for the parts competitors leave fragmented/i)).toBeInTheDocument();
    });

    it("renders the company page when the company route is selected", () => {
        window.location.hash = "#/company";
        render(<App />);

        expect(screen.getByText(/from today's control stack to tomorrow's enterprise protection layer/i)).toBeInTheDocument();
        expect(screen.getByText(/operating principle/i)).toBeInTheDocument();
        expect(screen.getByText(/a stack you can integrate without guessing/i)).toBeInTheDocument();
    });

    it("renders the governance page when the governance route is selected", () => {
        window.location.hash = "#/governance";
        render(<App />);

        expect(screen.getByText(/7 layers designed for real-world enterprise challenges/i)).toBeInTheDocument();
        expect(screen.getByText(/evidence matters/i)).toBeInTheDocument();
    });
});
