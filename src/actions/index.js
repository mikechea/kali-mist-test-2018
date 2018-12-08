import * as types from '../constants/ActionTypes';
import * as config from '../constants/config';

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const requestLocation = () => ({
  type: types.REQUEST,
  payload: {
    isLocating: true,
    location: {},
    regions: {}
  }
});

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  payload: {
    isLocating: false,
    location: json.data.location,
    regions: json.data.regions
  }
});

/* TODO Given the state shape defined in the reducer,
 * implement this action. Hint, this Action will likely be async
 */

export const locate = coords => (dispatch) => {
  // evaluate dispatch
  dispatch(requestLocation());

  return fetch(`https://${config.API_HOST}/wm/v2/location?include%5B%5D=regions.listings&latlng=${coords.latitude}%2C${coords.longitude}`)
  .then(response => response.json())
  .then(body => dispatch(receiveLocation(coords, body)));
};
