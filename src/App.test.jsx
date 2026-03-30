import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    beforeEach(() => {
        window.location.hash = "";
    });

    it("renders the landing page content by default", () => {
        render(<App />);

        expect(screen.getByText(/security, governance, and protection for agent execution at enterprise scale/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /explore the platform/i })).toBeInTheDocument();
        expect(screen.getByText(/on-device security and agent intelligence/i)).toBeInTheDocument();
    });

    it("renders the company page when the company route is selected", () => {
        window.location.hash = "#/company";
        render(<App />);

        expect(screen.getByText(/from today’s control stack to tomorrow’s enterprise protection layer/i)).toBeInTheDocument();
        expect(screen.getByText(/operating principle/i)).toBeInTheDocument();
    });
});
