import React from 'react';
import expect from 'expect';
import {shallow, render} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import ItemInput from './ItemInput';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ConnectedItemsPage, {ItemsPage} from './ItemsPage';
import * as itemActions from '../../actions/itemActions';
import renderer from 'react-test-renderer';

// Note: 
// toBe() means the two references must be for the same object.
// toEqual() does a deep equality check to see if two objects have the same keys.
// For primitives (int, string, ...) these functions will produce the same results.

describe('When ItemInput renders', () => {
    
    describe('its bare component', () => {
        
        let wrapper;
        let props;

        beforeEach( () => {
            props = {
                classes: {    
                    textField: "Text class",
                    button: "Button class",
                    root: "Root class"
                },
                textLabel: "Text label",
                buttonLabel: "Button label",
                items: [{title: "item1"}, {title: "item2"}],
                createItem: () => {}
            };
            
            wrapper = shallow(<ItemsPage {...props}/>);
        });
    
        it('should render correctly', () => {
            const tree = renderer
                .create(<ItemsPage {...props}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render <h1>, <h2>, and <ItemInput>', () => {
            expect(wrapper.find('h1').text()).toEqual('Items');
            expect(wrapper.find('h2').text()).toEqual('Add Item');
            expect(wrapper.find(ItemInput).length).toBe(1);
        });

        it('should render props.items to an array of itemRow', () => {
            expect(wrapper.find('div #items').children().length).toBe(2);
        });

        it('should pass component-bound props to ItemInput', () => {
            expect(wrapper.find(ItemInput).onClick).toBe();
            expect(wrapper.find(ItemInput).props().textValue).toEqual(wrapper.state().item.title);
            expect(wrapper.find(ItemInput).props().onChange).toEqual(wrapper.instance().onTitleChange);
            expect(wrapper.find(ItemInput).props().onClick).toEqual(wrapper.instance().onClickSave);
        });

    });
    
    describe('its withStyles(), Redux-connected component', () => {

        let wrapper;
        let store;
        let mockStore;
        let initialState = [{title: "item1"}, {title: "item2"}];
        let props;

        beforeEach(() => {
            mockStore = configureMockStore();
            store = mockStore({
                items: initialState
            });
            props = {
                textLabel: "Text label",
                buttonLabel: "Button label",
                items: [{title: "item1"}, {title: "item2"}],
                createItem: () => {}
            };

            wrapper = shallow(<ConnectedItemsPage store={store} {...props}/>).dive();
        });

        it('should render a WithStyles() className', () => {
            expect(wrapper.dive().props().className).toEqual(expect.stringContaining("ItemsPage"));
        });

        it('should map state.items to items', () => {
            expect(wrapper.dive().instance().props.items).toEqual(props.items);
        });

        it('should map action createItem', () => {
            expect(wrapper.dive().instance().props.createItem).not.toBeNull();
        });

    });

});