
import Immutable from 'immutable'

export default function (state = Immutable.fromJS([]), action) {
  switch (action.type) {
    case 'FETCH_PERMISSIONSONS':
      return Immutable.fromJS(action.payload)
  }
  return state
}
