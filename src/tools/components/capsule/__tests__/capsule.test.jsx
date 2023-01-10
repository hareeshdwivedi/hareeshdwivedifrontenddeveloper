import {describe, it} from "vitest"
import {render, fireEvent} from "@testing-library/react";
import Capsule from "../capsule.jsx";

const capsule = {
    "capsule_serial": "C101",
    "capsule_id": "dragon1",
    "status": "retired",
    "original_launch": "2010-12-08T15:43:00.000Z",
    "original_launch_unix": 1291822980,
    "missions": [
      {
        "name": "COTS 1",
        "flight": 7
      }
    ],
    "landings": 0,
    "type": "Dragon 1.0",
    "details": "Reentered after three weeks in orbit",
    "reuse_count": 0
  };

describe('capsule', () => {
  it('renders capsule container', () => {
    const {getByTestId} = render(<Capsule capsule={capsule}/>);
    expect(getByTestId('capsule-div')).toBeInTheDocument();
  });

  it('renders capsule details', () => {
    const {getByText} = render(<Capsule capsule={capsule}/>);
    expect(getByText('C101')).toBeInTheDocument();
    expect(getByText('Reentered after three weeks in orbit')).toBeInTheDocument();
  });
});