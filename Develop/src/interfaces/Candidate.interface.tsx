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

const CandidateKeyLabels = [
  "Image",
  "Name",
  "Location",
  "Email",
  "Company",
  "Bio",
  "Reject",
];

export default CandidateInterface;
export { CandidateKeyLabels };
