import React from 'react';
import expect from 'expect';
import {shallow, render} from 'enzyme';
import ItemCounterDisplay, { ItemCounterDisplay as PresentationalItemCounterDisplay } from '../../../src/components/items/ItemCounterDisplay';
import {ListItemText, ListItem} from 'material-ui';

describe('When ItemCounterDisplay renders', () => {

    describe('its bare component', () => {
        
        let wrapper;
        let props;
    
        beforeEach( () => {
            props = {
                // We need to pass in 'classes' manually because it normally gets this from the connected WithStyles() component.
                classes: {counter: "some class"},
                itemCount: 2
            }
            
            wrapper = shallow(<PresentationalItemCounterDisplay {...props}/>);
        });
        it('should render <ListItem> and <ListItemText>', () => {
            expect(wrapper.find(ListItem).length).toBe(1);
            expect(wrapper.find(ListItemText).length).toBe(1);
        });
    
        it('should render with correct text', () => {
            expect(wrapper.find(ListItemText).props().primary).toBe("Items To Do: 2");
        });
    
        it('should render with style props', () => {
            expect(wrapper.find(ListItemText).props().className).toBe("some class");
        });
    
    });
    
    describe('its WithStyles() connected component', () => {
    
        let wrapper;
        let props;
    
        beforeEach( () => {
            props = {
                itemCount: 2
            }
            
            wrapper = shallow(<ItemCounterDisplay {...props}/>);
        });
        // Note on .dive(): 
        // Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
        // This is helpful for testing shallow-rendered connected components. 

        it('should render <ListItem> and <ListItemText>', () => {
            expect(wrapper.dive().find(ListItem).length).toBe(1);
            expect(wrapper.dive().find(ListItemText).length).toBe(1);
        });
        
        it('should render with correct text', () => {
            expect(wrapper.dive().find(ListItemText).props().primary).toBe("Items To Do: 2");
        });

        it('should render a WithStyles() className', () => {
            expect(wrapper.dive().find(ListItemText).props().className).toEqual(expect.stringContaining("ItemCounterDisplay"))
        });
    });
});
