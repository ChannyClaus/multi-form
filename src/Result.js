import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = props => {
  const { state } = useStateMachine(updateAction);

  const onSubmit = () => {
    console.log("HERE")
    console.log(JSON.stringify(state))
    fetch('http://localhost:8085/external_organization', {
      method: 'post',
      body: JSON.stringify(state['data']),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
  }

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Result;
