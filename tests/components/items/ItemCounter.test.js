import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ItemCounter, { ItemCounter as PresentationalItemCounter } from '../../../src/components/items/ItemCounter';
import ItemCounterDisplay from '../../../src/components/items/ItemCounterDisplay';
import AboutPage from '../../../src/components/about/AboutPage';

describe('When ItemCounter renders', () => {

    describe('its bare component', () => {
    
        let wrapper;
    
        beforeEach( () => {
            wrapper = shallow(<PresentationalItemCounter/>);
        })
    
        it('should render ItemCounterDisplay', () => {
            expect(wrapper.find(ItemCounterDisplay).length).toBe(1);
        });
    
    });
    
    describe('its connect(mapStateToProps) component', () => {
    
        let wrapper;
        let store;
        let mockStore;
    
        beforeEach(() => {
            mockStore = configureMockStore();
            store = mockStore({
                items: ["item1", "item2"]
            })
            // You need to dive or else you will look at Connect(ItemCounter) and not see any children.
            wrapper = shallow(<ItemCounter store={store}/>).dive();
        });
    
        it('should render ItemCounterDisplay', () => {
            expect(wrapper.find(ItemCounterDisplay).length).toBe(1);
        });
    
        it('should render ItemCounterDisplay with a correct itemCount prop', () => {
            expect(wrapper.find(ItemCounterDisplay).props().itemCount).toBe(2);
        });
    });
});



