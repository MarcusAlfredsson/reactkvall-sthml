import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('./AddTodo', () => 'AddTodo');

describe('App test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot test', () => {
    const appComponent = renderer.create(<App />);
    expect(appComponent).toMatchSnapshot();
  });
});