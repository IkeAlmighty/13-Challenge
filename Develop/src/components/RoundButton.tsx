import "./RoundButton.module.css";

export default function RoundButton(props: any) {
  return <button {...props}>{props.children}</button>;
}
