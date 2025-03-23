import { useEffect, useState } from "react";
import CandidateInterface, {
  CandidateKeyLabels,
} from "../interfaces/Candidate.interface";
import CandidateRow from "../components/CandidateRow";

const SavedCandidates = () => {
  const [potentials, setPotentials] = useState<CandidateInterface[]>([]);

  useEffect(() => {
    const _potentials = JSON.parse(localStorage.getItem("potentials") || "[]");
    setPotentials(_potentials);
  }, []);

  function removeCandidate(candidate: CandidateInterface) {
    // remove candidate from potentials list in app
    let filtered = potentials.filter((p) => p.login !== candidate.login);
    setPotentials(filtered);

    // update localstorage to reflect what's on screen
    localStorage.setItem("potentials", JSON.stringify(filtered));
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        {/* iterate over keys to create table key row */}
        <thead>
          <tr>
            {CandidateKeyLabels.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        {/* iterate of all the candidates to create all the table data */}
        <tbody>
          {potentials.map((candidate, index) => (
            <CandidateRow
              candidate={candidate}
              onMinus={removeCandidate}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
