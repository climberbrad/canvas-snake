import * as React from "react";
import * as S from './Canvas.styles'

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> & {
    draw: (context: CanvasRenderingContext2D) => void;
}

export const Canvas = ({draw, ...props}: CanvasProps): React.ReactElement => {
    return <S.Canvas />
}