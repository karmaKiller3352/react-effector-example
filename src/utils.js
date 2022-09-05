export const getModelsAsync = async (values = []) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(values);
    }, 1500);
  });
};

export const getMarksByModelRequest = async (model) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...model.toUpperCase()]);
    }, 1500);
  });
};

export const getCarDescriptionRequest = async ({ model, mark }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Model: ${model}\n Mark: ${mark}`);
    }, 1500);
  });
};
