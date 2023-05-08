import * as React from "react";
import {Canvas} from "../canvas/Canvas";
import {GameWrapper} from "./Game.styles";

export const Game = (): React.ReactElement => {
    const draw = (ctx: CanvasRenderingContext2D) => {}

    return (<GameWrapper><Canvas draw={draw} /></GameWrapper>)
}