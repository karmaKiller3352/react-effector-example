import "./styles.css";
import "antd/dist/antd.css";
import { Steps } from "antd";
import Model from "./steps/Model/component";
import Mark from "./steps/Mark/component";
import { $currentStep } from "./steps/model";
import { useStore } from "effector-react";
import Description from "./steps/Description/component";

const { Step } = Steps;

export default function App() {
  const step = useStore($currentStep);
  console.log(step);

  return (
    <div className="container">
      <h1>Find description of your car</h1>
      <Steps current={step} direction="vertical">
        <Step title="Select Model" description={<Model />} />
        <Step title="Select Mark" description={<Mark />} />
        <Step title="Car description" description={<Description />} />
      </Steps>
    </div>
  );
}
