import { useState } from "react";
// Silly little loading animation
export default function Loading() {
    const frames = ['Loading.', 'Loading..', 'Loading...']
    const [text, setText] = useState<String>("");
    setInterval(() => {
        let index = frames.findIndex((v) => v === text);
        index >= frames.length - 1 ? index = 0 : index++;
        setText(frames[index])
    }, 500)
    return <span>{text}</span>
}