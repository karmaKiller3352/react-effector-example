import {
  createEffect,
  createEvent,
  createStore,
  forward,
  restore,
  sample
} from "effector";
import { getMarksByModelRequest } from "../../utils";
import { setStep } from "../model";
import { $model } from "../Model/model";

/* Marks Store */
export const getMarks = createEffect(getMarksByModelRequest);
export const $marks = restore(getMarks.done, []);

sample({
  clock: getMarks.done,
  fn: () => 1, // set secondt step
  target: setStep
});

sample({
  clock: $model,
  filter: (_, model) => model.length > 0,
  target: getMarks
});

/* Selected Mark Store */

export const $mark = createStore("");
export const selectMark = createEvent();

forward({
  from: selectMark,
  to: $mark
});

$marks.reset($model);
$mark.reset($model);
