import {render, screen} from "@testing-library/react";
import {describe, it} from "vitest";
import CapsuleData from "../capsule-data.jsx";

const capsuleData = {
  capsule_serial: "C101",
};

describe('render property name and values', () => {
  render(<CapsuleData name="Capsule Serial" data={capsuleData.capsule_serial}/>)
  it('should show name of property', () => {
    const propertyName = screen.getByText(/capsule serial/i);
    expect(propertyName).toBeInTheDocument();
  });

  it('should show property value', () => {
    render(<CapsuleData name="Capsule Serial" data={capsuleData.capsule_serial}/>)
    const headingElement = screen.getByRole("heading", {level: 3});
    expect(headingElement).toBeInTheDocument();
  });
});