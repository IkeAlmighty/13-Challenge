import RoundButton from "./RoundButton";
import styles from "./CandidateCard.module.css";

export default function CandidateCard(props: any) {
  const { candidate, onPlus, onMinus } = props;
  const { name, login, location, avatar_url, email, company, bio } = candidate;
  return (
    <div>
      <div>
        <img src={avatar_url} alt="github avatar" style={styles} />
        <h3>
          {name} ({login})
        </h3>
        <div>Location: {location || "not public"}</div>
        <div>Email: {email || "not public"}</div>
        <div>Company: {company || "not public"}</div>
        <p style={styles}>{bio}</p>
      </div>

      {/* 
        FIXME: I tried to implement the button styling from within the 
        CardidateCard.module.css, but for some reason it didn't register.  
      */}
      <div>
        <RoundButton
          style={{ backgroundColor: "red", float: "left" }}
          onClick={onMinus}
        >
          -
        </RoundButton>
        <RoundButton
          style={{ backgroundColor: "green", float: "right" }}
          onClick={onPlus}
        >
          +
        </RoundButton>
      </div>
    </div>
  );
}
