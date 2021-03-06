import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedItemCounter, {ItemCounter} from './ItemCounter';
import ItemCounterDisplay from './ItemCounterDisplay';
import AboutPage from '../about/AboutPage';
import renderer from 'react-test-renderer';

describe('When ItemCounter renders', () => {

    describe('its bare component', () => {
    
        let wrapper;
        let props;
    
        beforeEach( () => {
            props = {itemCount: 1};
            wrapper = shallow(<ItemCounter {...props}/>);
        });
    
        it('should render correctly', () => {
            const tree = renderer
                .create(<ItemCounter {...props}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

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
            });
            // You need to dive or else you will look at Connect(ItemCounter) and not see any children.
            wrapper = shallow(<ConnectedItemCounter store={store}/>).dive();
        });
    
        it('should render ItemCounterDisplay', () => {
            expect(wrapper.find(ItemCounterDisplay).length).toBe(1);
        });
    
        it('should render ItemCounterDisplay with a correct itemCount prop', () => {
            expect(wrapper.find(ItemCounterDisplay).props().itemCount).toBe(2);
        });
    });
});



