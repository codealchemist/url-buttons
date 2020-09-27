import store from 'store2'
import { setGlobal, addReducer } from 'reactn'

const initialState = {
  buttons: []
}
const storedState = store.get('state') || initialState
setGlobal(storedState)

addReducer('saveState', (global, dispacth, state) => {
  store.set('state', {
    buttons: state.buttons
  })
  return state
})
