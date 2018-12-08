import { REQUEST, RECEIVE } from '../constants/ActionTypes';

const locationListing = (state = { isLocating: false, location: null, regions: null }, action) => {
  // TODO using the above state shape, implement this reducer. Don't forget to test it!
  switch (action.type) {
    case REQUEST:
      return {
        // spreads out action.payload
        ...action.payload
      };
    case RECEIVE:
      return {
        // spreads out action.payload
        ...action.payload
      };
    default:
      return state;
  }
};

export default locationListing;
