import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step4 = (props) => {
    const { register, handleSubmit } = useForm();
    const { state, actions } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("./result");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Step 4</h2>
            <label>
                Owner Phone:
                <input {...register("ownerPhone")} defaultValue={state.data.ownerPhone} />
            </label>
            <label>
                Owner Email:
                <input {...register("ownerEmail")} defaultValue={state.data.ownerEmail} />
            </label>
            <label>
                Owner Name:
                <input {...register("ownerName")} defaultValue={state.data.ownerName} />
            </label>
            <label>
                Restaurant Name:
                <input {...register("restaurantName")} defaultValue={state.data.restaurantName} />
            </label>
            <label>
                Restaurant Email:
                <input {...register("restaurantEmail")} defaultValue={state.data.restaurantEmail} />
            </label>
            <label>
                Restaurant Phone:
                <input {...register("restaurantPhone")} defaultValue={state.data.restaurantPhone} />
            </label>
            <label>
                Restaurant Address:
                <input {...register("restaurantAddress")} defaultValue={state.data.restaurantAddress} />
            </label>
            <label>
                Cuisine:
                <input {...register("cuisine")} defaultValue={state.data.cuisine} />
            </label>
            <input type="submit" />
        </form>
    );
};

export default withRouter(Step4);
