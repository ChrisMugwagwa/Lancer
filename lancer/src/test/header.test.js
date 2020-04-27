import React from 'react';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../component/Header'

afterEach(cleanup);

it ("Displays the header",() =>{
    const tree = renderer.create(<Header></Header>)
    expect(tree).toMatchSnapshot();
});