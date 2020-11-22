import React from "react";
import { Steps } from 'antd';

const { Step } = Steps;
const Grzesiek = () => {
  return (
    <div>
      <h1>naglowek1</h1>
      <p>lorem ipsum</p>
      <ul>
        <li>lista 1</li>
        <li>lista 2</li>
      </ul>
        <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
    </div>


  );
};

export default Grzesiek;