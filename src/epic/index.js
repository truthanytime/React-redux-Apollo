import Rx from 'rxjs';
import { combineEpics } from 'redux-observable';

import { creditsSpent, showAlert, SHOW_ALERT } from '../actions';


function handleShowAlert(action$, store, extra) {
  return action$
    .filter((action) => action.type === SHOW_ALERT)
    .flatMap((action) => {
      alert(action.payload.message);
      return Rx.Observable.empty();
    });
}


function handleCreditsSpent(action$, store, extra) {
  return action$
    .ofType('@@MUTATION/BUY_SOMETHING_SUCCESS', '@@MUTATION/BUY_ANOTHER_THING_SUCCESS')
    .flatMap((action) => {
      const { args } = action.payload;
      const { amount } = args.variables;
      return Rx.Observable.concat(
        Rx.Observable.of(creditsSpent(amount)),
        Rx.Observable.of(showAlert(`You have spent ${amount} credits`)),
      );
    });
}


export default combineEpics(
  handleShowAlert,
  handleCreditsSpent,
);