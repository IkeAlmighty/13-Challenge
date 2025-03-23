import styles from "./CandidateRow.module.css";
import RoundButton from "./RoundButton";

export default function CandidateRow(props: any) {
  const { candidate, onMinus } = props;
  return (
    <>
      <tr style={styles}>
        <td>
          <img
            src={candidate.avatar_url}
            alt={`avatar for ${candidate.login}`}
          />
        </td>
        <td>
          {candidate.name} ({candidate.login})
        </td>
        <td>{candidate.location}</td>
        <td>
          <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
        </td>
        <td>{candidate.company}</td>
        <td>{candidate.bio}</td>
        <td>
          <RoundButton
            style={{ backgroundColor: "red" }}
            onClick={() => onMinus(candidate)}
          >
            -
          </RoundButton>
        </td>
      </tr>
    </>
  );
}
