import { Layer, Rect, Stage } from "react-konva";

export const Comp = () => {
    return (
        <Stage width={800} height={500}>
            <Layer>
                <Rect stroke='black' strokeWidth={4} x={5} y={5} width={490} height={490} />
                <Rect fill='red' x={400} y={100} width={300} height={200} />
            </Layer>
        </Stage>
    );
  };