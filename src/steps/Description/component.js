import { Spin } from "antd";
import { useStore } from "effector-react";
import { $description, getDescription } from "./model";

const Description = () => {
  const desc = useStore($description);
  const loading = useStore(getDescription.pending);

  return loading ? <Spin /> : <h3>{desc.result}</h3>;
};

export default Description;
