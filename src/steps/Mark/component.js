import { Select, Spin } from "antd";
import { useStore } from "effector-react";
import { $mark, $marks, getMarks, selectMark } from "./model";

const { Option } = Select;

const Mark = () => {
  const marks = useStore($marks);
  const loading = useStore(getMarks.pending);

  const selectedMark = useStore($mark);

  return loading ? (
    <Spin />
  ) : (
    <Select
      placeholder="Select mark"
      disabled={loading}
      onChange={selectMark}
      value={selectedMark}
    >
      {marks?.result?.map((mark) => (
        <Option key={mark} value={mark} />
      ))}
    </Select>
  );
};

export default Mark;
