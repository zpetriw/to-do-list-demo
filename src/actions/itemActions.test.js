import expect from 'expect';
import * as itemActions from './itemActions';
import * as types from './actionTypes'

describe('When itemActions renders', () => {
    it('should create a CREATE_ITEM action', () => {
        
        // Arrange
        const item = {title: "Item 1"};
        const expectedAction = {
            type: types.CREATE_ITEM,
            item: item
        }

        // Act
        const action = itemActions.createItem(item);

        // Assert 
        expect(action).toEqual(expectedAction);
    });
});
