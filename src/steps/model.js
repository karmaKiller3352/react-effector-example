import { createEvent, createStore, forward } from "effector";

export const $currentStep = createStore(0);
export const setStep = createEvent();

forward({
  from: setStep,
  to: $currentStep
});
