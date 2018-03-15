import React from 'react';
import expect from 'expect';
import {shallow, render} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import ItemInput, { ItemInput as PresentationalItemInput } from '../../../src/components/items/ItemInput';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ItemsPage, { ItemsPage as PresentationalItemsPage } from '../../../src/components/items/ItemsPage';
import * as itemActions from '../../../src/actions/itemActions';

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
                items: [{title: "item1"}, {title: "item2"}]
            }
            
            wrapper = shallow(<PresentationalItemsPage {...props}/>);
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
            expect(wrapper.find(ItemInput).onClick).toBe()
            expect(wrapper.find(ItemInput).props().textValue).toEqual(wrapper.state().item.title)
            expect(wrapper.find(ItemInput).props().onChange).toEqual(wrapper.instance().onTitleChange)
            expect(wrapper.find(ItemInput).props().onClick).toEqual(wrapper.instance().onClickSave)
        });

        it.skip('should call OnTitleChange when onChange is triggered', () => {
           
        });

    });
    
    describe('its withStyles(), Redux-connected component', () => {

        let wrapper;
        let store;
        let mockStore;
        let initialState = [{title: "item1"}, {title: "item2"}]

        beforeEach(() => {
            mockStore = configureMockStore();
            store = mockStore({
                items: initialState
            })
            wrapper = shallow(<ItemsPage store={store} />).dive();
        });

        it('should render a WithStyles() className', () => {
            expect(wrapper.dive().props().className).toEqual(expect.stringContaining("ItemsPage"))
        });

        it('should map state.items to items', () => {
            // mountWrapper = render(<ItemsPage store={store} />)
            // console.log(mountWrapper)
        });

        it('should map itemActions to actions', () => {
            expect();
        });

        it('should update store when action is called', () => {
            store.dispatch(itemActions.createItem("New item"))
            let actions = store.getActions()
            expect(actions[0].type).toBe("CREATE_ITEM")
            expect(actions[0].item).toBe("New item")
        });

    });

});