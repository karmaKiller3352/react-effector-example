import {
  createEffect,
  createEvent,
  createStore,
  forward,
  restore,
  sample
} from "effector";
import { getModelsAsync } from "../../utils";

/* Models Store */
export const modelsStepMounted = createEvent();

export const getModels = createEffect(getModelsAsync);

sample({
  clock: modelsStepMounted,
  target: getModels
});

export const $models = restore(getModels.done, []);

/* Selected Model Store */
export const $model = createStore("");
export const selectModel = createEvent();

forward({
  from: selectModel,
  to: $model
});
