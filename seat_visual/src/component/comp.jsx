import { Layer, Rect, Stage, Circle } from "react-konva";

export const Comp = () => {
    return (
        <Stage width={1600} height={800}>
            <Layer>
                <Rect stroke='black' strokeWidth={4} x={5} y={5} width={1400} height={600} />
                <Rect fill='gray' x={100} y={100} width={300} height={150} />
                <Rect fill='gray' x={550} y={350} width={300} height={150} />
                <Rect fill='gray' x={1000} y={100} width={300} height={150} />
                <Circle fill='red' x={160} y={70} radius={30} />
                <Circle fill='red' x={330} y={70} radius={30} />
                <Circle fill='red' x={330} y={280} radius={30} />
                <Circle fill='red' x={160} y={280} radius={30} />

                <Circle fill='red' x={620} y={320} radius={30} />
                <Circle fill='red' x={620} y={530} radius={30} />
                <Circle fill='red' x={790} y={320} radius={30} />
                <Circle fill='red' x={790} y={530} radius={30} />

                <Circle fill='red' x={1060} y={70} radius={30} />
                <Circle fill='red' x={1230} y={70} radius={30} />
                <Circle fill='red' x={1230} y={280} radius={30} />
                <Circle fill='red' x={1060} y={280} radius={30} />

            </Layer>
        </Stage>
    );
  };