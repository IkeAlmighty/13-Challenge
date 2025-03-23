import styles from "./RoundButton.module.css";

export default function RoundButton(props: any) {
  return (
    <button {...props} style={{ ...styles, ...props.style }}>
      {props.children}
    </button>
  );
}
