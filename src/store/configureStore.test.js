import configureStore from './configureStore';
import expect from 'expect';
import { combineReducers } from 'redux';
import items from '../reducers/itemReducer';
import * as types from '../actions/actionTypes';

describe('When configureStore runs', () => {

    let initialState;
    let store;
    let rootReducer;

    beforeEach( () => {
        
        // Note: the key "items" in .getState() derives from the name we give to itemReducer when we import it.
        // If we combine more reducers we would test for each of those names as well.
        rootReducer = combineReducers({items});        
        initialState = {};
        store = configureStore(rootReducer, initialState);
    });

    it('configures the store with initialState', () => {
        let expectedState = {"items": []};
        expect(store.getState()).toEqual(expectedState);
    });

    it('configures the store with rootReducer and default values', () => {
        expect(store.getState().items).toEqual(items(undefined, {}));
    });
    
    it('dispatches an action with default values', () => {
        let action = {type: types.CREATE_ITEM};
        store.dispatch(action);
        expect(store.getState().items).toEqual(items(undefined, action));
    });

});