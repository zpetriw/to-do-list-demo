import expect from 'expect';
import itemReducer from './itemReducer';
import * as actions from '../actions/itemActions';

describe('itemReducer', () => {
    it('should add an item when passed CREATE_ITEM', () => {
        
        // Arrange
        const initialState = [
            {title: "Item 1"},
            {title: "Item 2"}
        ];

        const newItem = {title: "Item 3"};

        const action = actions.createItem(newItem);

        // Act
        const newState = itemReducer(initialState, action);

        // Assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('Item 1');
        expect(newState[1].title).toEqual('Item 2');
        expect(newState[2].title).toEqual('Item 3');

    });
});