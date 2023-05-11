import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>Step 2</h2>
      <label>
        Template:
        <select {...register("template")}>
          <option value="dark">Dark</option>
          <option value="soft">Soft</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
