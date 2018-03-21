import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ConnectedAddItemPage, {AddItemPage} from './AddItemPage';
import renderer from 'react-test-renderer';

describe('When AddItemPage renders', () => {

    describe('its bare component', () => {
        
        let wrapper;
        let props;
    
        beforeEach( () => {
            props = {
                classes: {root: "some class"}
            };
            wrapper = shallow(<AddItemPage {...props}/>);
        });
    
        it('should render correctly', () => {
            const tree = renderer
                .create(<AddItemPage {...props}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render <div>, <h1>, and <p>', () => {
            expect(wrapper.find('div').length).toBe(1);
            expect(wrapper.find('h1').text()).toEqual('Add an item');
            expect(wrapper.find('p').text()).toEqual('Implement a UI to add items to our to-do list.');
        });

        it('should render with style props', () => {
            expect(wrapper.props().className).toBe("some class");
        });
    
    });

    describe('its WithStyles() connected component', () => {
        
        let wrapper;
        let props;
    
        beforeEach( () => {
            props = {};
            wrapper = shallow(<ConnectedAddItemPage {...props}/>);
        });
    
        it('should render <div>, <h1>, and <p>', () => {
            expect(wrapper.dive().find('div').length).toBe(1);
            expect(wrapper.dive().find('h1').text()).toEqual('Add an item');
            expect(wrapper.dive().find('p').text()).toEqual('Implement a UI to add items to our to-do list.');
        });
    
        it('should render a WithStyles() className', () => {
            expect(wrapper.dive().props().className).toEqual(expect.stringContaining("AddItemPage"));
        });

    });


});    

