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

    it("renders the products page when the products route is selected", () => {
        window.location.hash = "#/products";
        render(<App />);

        expect(screen.getByText(/three products, one enterprise protection stack/i)).toBeInTheDocument();
        expect(screen.getByText(/agentfabric in the stack/i)).toBeInTheDocument();
        expect(screen.getByText(/gavel runtime in the stack/i)).toBeInTheDocument();
    });

    it("renders the governance page when the governance route is selected", () => {
        window.location.hash = "#/governance";
        render(<App />);

        expect(screen.getByText(/7 layers designed for real-world enterprise challenges/i)).toBeInTheDocument();
        expect(screen.getByText(/evidence matters/i)).toBeInTheDocument();
    });
});
