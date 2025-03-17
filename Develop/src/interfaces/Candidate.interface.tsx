// TODO: Create an interface for the Candidate objects returned by the API

interface CandidateInterface {
    name: string;
    login: string;
    location: string;
    avatar_url: string;
    email: string;
    html_url: string;
    company: string;
    bio: string;
}

export default CandidateInterface;