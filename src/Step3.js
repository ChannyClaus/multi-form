import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step3 = (props) => {
    const { register, handleSubmit } = useForm();
    const { state, actions } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("./step4");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Step 3</h2>
            <label>
                Photos:
                <select {...register("photosOption")}>
                    <option value="fromAI">Generate using AI</option>
                    <option value="fromInternalLibrary">Use Forward’s photo library</option>
                    <option value="fromLink">Use my photos from the link provided</option>
                </select>
            </label>
            <input type="submit" />
        </form>
    );
};

export default withRouter(Step3);
