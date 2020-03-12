const UPDATE_SETTINGS = Symbol.for('settings.update');

/**
 * Action Creator to update settings.
 *
 * @param {object} payload
 */
export const updateSettings = (payload) => ({
  type: UPDATE_SETTINGS,
  payload
});

const initialState = {
  filter_world: '*',
  filter_sport: 'cycling',
  include_completed: false,
  include_eventonly: false,
  include_watopia: true,
  sort_field: 'difficulty',
  display_units: 'imperial'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
