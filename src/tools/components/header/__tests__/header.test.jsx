import {render, screen} from "@testing-library/react";
import {describe, it} from "vitest";
import Header from "../header.jsx";
import falcon9 from "../../../../assets/falcon9.png";

describe('render header section', () => {
  it('render heading element', () => {
    render(<Header/>);
    const headingElement = screen.getByRole("heading", {level: 1});
    expect(headingElement).toBeInTheDocument();
  });

  it('heading element with text motion is immersive exists', () => {
    render(<Header/>);
    const headingText = screen.getByText(/motion/i);
    const headingText1 = screen.getByText(/is/i);
    const headingText2 = screen.getByText(/immersive/i);
    expect(headingText).toBeInTheDocument();
    expect(headingText1).toBeInTheDocument();
    expect(headingText2).toBeInTheDocument();
  });

  it('should show have image element and have path to falcon9 image', () => {
    render(<Header/>);
    const falcon9image = screen.getByRole("img");
    expect(falcon9image).toBeInTheDocument();
    expect(falcon9image).toHaveAttribute('src', falcon9);
  });
});