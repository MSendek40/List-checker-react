import React from "react";
import { Containerstyle } from "./styled";

const Container = (props) => (
    <Containerstyle> {props.children} </Containerstyle>
);

export default Container