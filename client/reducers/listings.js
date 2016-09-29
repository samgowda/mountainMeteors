function listings(state = [], action) {
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('listings reducer triggered. listings:', action);
      console.log('listing reduc returning', Object.assign([], state, action.payload.data));
      return Object.assign([], state, action.payload.data);
      // return action.payload.data; // WORKS BUT NOT REACTY

    default:
      return state;
  }
}

export default listings;
