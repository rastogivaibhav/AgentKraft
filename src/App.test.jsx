import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    beforeEach(() => {
        window.location.hash = "";
    });

    it("renders the landing page content by default", () => {
        render(<App />);

        expect(screen.getByText(/enterprise ai control, with sovereign governance at runtime/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /explore the platform/i })).toBeInTheDocument();
        expect(screen.getAllByText("AgentFabric").length).toBeGreaterThan(0);
        expect(screen.queryByText(/^Pricing$/i)).not.toBeInTheDocument();
    });

    it("renders the company page when the company route is selected", () => {
        window.location.hash = "#/company";
        render(<App />);

        expect(screen.getByText(/from today’s control stack to tomorrow’s trust fabric/i)).toBeInTheDocument();
        expect(screen.getByText(/built for customers, legible to investors/i)).toBeInTheDocument();
    });
});
