export const CREDITS_SPENT = 'CREDITS_SPENT';

export function creditsSpent(amount) {
  return {
    type: CREDITS_SPENT,
    payload: { amount },
  };
}


export const SHOW_ALERT = 'SHOW_ALERT';

export function showAlert(message) {
  return {
    type: SHOW_ALERT,
    payload: { message },
  };
}