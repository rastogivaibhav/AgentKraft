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
    });

    it("renders the pricing page when the pricing route is selected", () => {
        window.location.hash = "#/pricing";
        render(<App />);

        expect(screen.getByText(/structured for pilots, built for expansion/i)).toBeInTheDocument();
        expect(screen.getByText("Pilot")).toBeInTheDocument();
        expect(screen.getByText(/custom annual/i)).toBeInTheDocument();
    });
});
