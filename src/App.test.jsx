import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    it("renders the new GovernAgent homepage hero", () => {
        render(<App />);

        expect(
            screen.getByRole("heading", {
                name: /control ai agents before they control your enterprise/i,
            }),
        ).toBeInTheDocument();
        expect(screen.getAllByText(/if your ai agents can act, they must be governed/i).length).toBeGreaterThan(0);
    });

    it("renders core trust-building sections", () => {
        render(<App />);

        expect(screen.getByRole("heading", { name: /one system\. four layers\. complete control\./i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /why existing solutions still leave a gap/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /let's discuss your first control use case/i })).toBeInTheDocument();
    });
});
