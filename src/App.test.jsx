import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    it("renders the landing page content", () => {
        render(<App />);

        expect(screen.getByText(/enterprise ai control, with sovereign governance at runtime/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /explore the platform/i })).toBeInTheDocument();
        expect(screen.getAllByText("AgentFabric")).toHaveLength(2);
        expect(screen.getAllByText("AGS Sovereign")).toHaveLength(2);
        expect(screen.getAllByText("Gavel Runtime")).toHaveLength(2);
    });
});
