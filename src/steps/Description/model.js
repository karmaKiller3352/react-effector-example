import { combine, createEffect, restore, sample } from "effector";
import { getCarDescriptionRequest } from "../../utils";
import { $mark, selectMark } from "../Mark/model";
import { setStep } from "../model";
import { $model } from "../Model/model";

export const getDescription = createEffect(getCarDescriptionRequest);
export const $description = restore(getDescription.done, "");

sample({
  clock: getDescription.done,
  fn: () => 2, // set secondt step
  target: setStep
});

sample({
  clock: selectMark,
  source: combine({ mark: $mark, model: $model }),
  filter: ({ mark, model }) => mark.length > 0 && model.length > 0,
  target: getDescription
});

$description.reset([$model, $mark]);
