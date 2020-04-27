import React from 'react';
import ReactDOM from 'react-dom';
import { render , cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'
import TestButton from './button';

afterEach(cleanup);

//I dont know HOW this one is actually testing. need to lookup reactdom.render
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<TestButton></TestButton>,div)
})

it("renders with correct styling",()=>{
   const {getByTestId} = render(<TestButton label="test"></TestButton>)
   expect(getByTestId("button")).toHaveTextContent("test")
})
it("renders with correctly after cleanup",()=>{
    const {getByTestId} = render(<TestButton label="different value"></TestButton>)
    expect(getByTestId("button")).toHaveTextContent("different value")
 })

 it("matches snapshot", ()=>{
    const domTree = renderer.create(<TestButton label="test3"></TestButton>).toJSON();
    expect(domTree).toMatchSnapshot();
    })