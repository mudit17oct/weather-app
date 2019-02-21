import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { fetchLocations } from '../src/actions/SearchAction';
import ActionType from '../src/constants/ActionTypes';
import data from '../src/mocks/mock_data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch locations API Test', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });

    const expectedActions = [
      { type: ActionType.FETCH_LOCATIONS_SUCCESS, payload: data },
    ];

    const store = mockStore({ payload: {} })

    return store.dispatch(fetchLocations()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});