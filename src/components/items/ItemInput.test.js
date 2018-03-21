import React from 'react';
import expect from 'expect';
import {shallow, render} from 'enzyme';
import {ItemInput} from './ItemInput';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import renderer from 'react-test-renderer';

// Note: 
// toBe() means the two references must be for the same object.
// toEqual() does a deep equality check to see if two objects have the same keys.
// For primitives (int, string, ...) these functions will produce the same results.

describe('When ItemInput renders it', () => {

    let wrapper;
    let props;
    const onChangeInput = () => {};
    const onClickInput = () => {};

    beforeEach( () => {

        props = {
            classes: {    
                textField: "Text class",
                button: "Button class",
            },
            textLabel: "Text label",
            textValue: "Text Value",
            buttonLabel: "Button label",
            onChange: onChangeInput,
            onClick: onClickInput
        };
        
        wrapper = shallow(<ItemInput {...props}/>);
    });
    
    it('should render correctly', () => {
        const tree = renderer
            .create(<ItemInput {...props}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render <TextField> and <Button>', () => {
        expect(wrapper.find(TextField).length).toBe(1);
        expect(wrapper.find(Button).length).toBe(1);
    });

    it('should render <TextField> with the correct props', () => {
        expect(wrapper.find(TextField).props().label).toBe("Text label");
        expect(wrapper.find(TextField).props().className).toBe("Text class");
        expect(wrapper.find(TextField).props().onChange).toBe(onChangeInput);
    });

    it('should run onChangeInput when onChange is triggered', () => {
        expect();
    });

    it('should render <Button> with the correct props', () => {
        expect(wrapper.find(Button).props().className).toBe("Button class");
        expect(wrapper.find(Button).props().children).toBe("Button label");
    });

});