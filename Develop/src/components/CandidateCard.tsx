import CandidateInterface from "../interfaces/Candidate.interface";

export default function CandidateCard({ name, login, location, avatar_url, email, html_url, company, bio }: CandidateInterface) {
    return (
        <div>
            <div>
                <img src={avatar_url} alt="github avatar" />
                <h3>{name} ({login})</h3>
                <div>Location: {location}</div>
                <div>Email: {email}</div>
                <div>Company: {company}</div>
                <p>{bio}</p>
            </div>

            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    );
}