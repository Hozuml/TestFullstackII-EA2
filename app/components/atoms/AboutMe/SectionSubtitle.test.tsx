import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionSubtitle from "./SectionSubtitle";
import { FaHeart } from "react-icons/fa";

describe("SectionSubtitle", () => {
    it("renders icon and text correctly", () => {
        render(<SectionSubtitle icon={<FaHeart data-testid="icon" />}>Hola Cami</SectionSubtitle>);
        expect(screen.getByText("Hola Cami")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});
