import { Select, Spin } from "antd";
import { useStore } from "effector-react";
import { useEffect } from "react";
import {
  $models,
  getModels,
  $model,
  modelsStepMounted,
  selectModel
} from "./model";

const { Option } = Select;

const Model = () => {
  useEffect(() => {
    modelsStepMounted(["Audi", "BMW", "Mazda"]);
  }, []);

  const models = useStore($models);
  const loading = useStore(getModels.pending);

  const selectedModel = useStore($model);

  return loading ? (
    <Spin />
  ) : (
    <Select
      placeholder="Select Model"
      loading={loading}
      onChange={selectModel}
      value={selectedModel}
    >
      {models?.result?.map((model) => (
        <Option key={model} value={model} />
      ))}
    </Select>
  );
};

export default Model;
