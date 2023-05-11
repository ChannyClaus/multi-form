import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step4 = (props) => {
    const { register, handleSubmit } = useForm();
    const { state, actions } = useStateMachine({ updateAction });
    const onSubit = (data) => {
        actions.updateAction(data);
        props.history.push("./result");
    };

    return (
        <form onSubmit={handleSubmit(onSubit)}>
            <h2>Step 4</h2>
            <label>
                Owner Phone Number:
                <input {...register("owner-phone-number")} defaultValue={state.data.ownerPhoneNumber} />
            </label>
            <label>
                Owner Email:
                <input {...register("owner-email")} defaultValue={state.data.ownerEmail} />
            </label>
            <label>
                Owner Name:
                <input {...register("owner-name")} defaultValue={state.data.ownerName} />
            </label>
            <label>
                Restaurant Name:
                <input {...register("restaurant-name")} defaultValue={state.data.restaurantName} />
            </label>
            <label>
                Restaurant Phone Number:
                <input {...register("restaurant-phone-number")} defaultValue={state.data.restaurantPhoneNumber} />
            </label>
            <label>
                Restaurant Address:
                <input {...register("restaurant-address")} defaultValue={state.data.restaurantAddress} />
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
