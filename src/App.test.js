import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router';
import ItemsPage from './components/items/ItemsPage';
import AboutPage from './components/about/AboutPage';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

describe('When App renders', () => {
  
  let wrapper;
  let store;
  
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('it renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(        
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/' ]}>
          <App />
        </MemoryRouter>
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should redirect to ItemsPage by default', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(ItemsPage)).toHaveLength(1);
    expect(wrapper.find(AboutPage)).toHaveLength(0);
  });
  
  it('should redirect to the About page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/about' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(ItemsPage)).toHaveLength(0);
    expect(wrapper.find(AboutPage)).toHaveLength(1);
  });

});
