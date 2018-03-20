import React from 'react';
import expect from 'expect';
import rootReducer from '../reducers';
import { createStore } from 'redux';
import * as itemActions from '../actions/itemActions';
import configureMockStore from 'redux-mock-store';

// Note on 'createStore()' (redux) vs configureMockStore() (redux-mock-store): 
// 1. 'createStore()' does not have 'getActions()' but it does update its state when an action is dispatched.
// 2. 'configureMockStore()' does not update its state but you can still do 'getState()'. It just won't change from the initial state.
//     You will check if the actions were dispatched by checking 'getActions()' and seeing what actions were called.

describe('When store is loaded', () => {
        
    // Check using method 1: getState()
    it('createItem should update its state', () => {
        
        // Arrange
        const store = createStore(rootReducer);
        const item = {
            title: "Item1"
        };

       // Act
       const action = itemActions.createItem(item) ;
       store.dispatch(action);
       
        const actual = store.getState().items[0];
        const expected = {
            title: "Item1"
        };

        // Assert
        expect(actual).toEqual(expected);
    });

    // Check using method 2: getActions()
    it('createItem should update its actions', () => {
        
        // Arrange
        const initialState = [{title: "item1"}, {title: "item2"}];
        const mockStore = configureMockStore();
        const store = mockStore({
                items: initialState
        });

        // Act 
        const item = {title: "item3"};
        const action = itemActions.createItem(item);
        store.dispatch(action);
        
        // Assert
        let actions = store.getActions();
        expect(actions[0].type).toBe("CREATE_ITEM");
        expect(actions[0].item).toBe(item);

    });

});