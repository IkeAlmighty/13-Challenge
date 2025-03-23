import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import CandidateCard from "../components/CandidateCard";
import CandidateInterface from "../interfaces/Candidate.interface";

import Loading from "../components/Loading";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<CandidateInterface>();
  const [allCandidates, setAllCandidates] = useState<any[]>();
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);

  function nextCandidate() {
    if (!allCandidates) return;
    let index = allCandidates?.indexOf(candidate);
    if (index === allCandidates.length - 1) {
      setAllCandidates(undefined);
      setCandidate(undefined);

      // this is what the class wants us to do:
      setNoMoreCandidates(true);

      // this would be what I would do in the future
      // with this application:
      // fetchCandidates();
      return;
    }
    setCandidate(allCandidates[++index]);
  }

  function addCandidate() {
    const potentials = JSON.parse(localStorage.getItem("potentials") || "[]");
    potentials.push(candidate);
    localStorage.setItem("potentials", JSON.stringify(potentials));

    // removing from local storage so that user can't add same candidate twice
    // by going to potentials page and back

    const newAllCandidates = allCandidates?.filter(
      (c) => c.login !== candidate?.login
    );

    localStorage.setItem("candidates", JSON.stringify(newAllCandidates));

    nextCandidate();
  }

  async function fetchCandidates() {
    const data = await searchGithub();
    const _candidates = [];
    for (let i = 0; i < data.length; i++) {
      const _candidate = await searchGithubUser(data[i].login);
      if (_candidate.login) {
        _candidates.push({
          name: _candidate.name,
          login: _candidate.login,
          location: _candidate.location,
          avatar_url: _candidate.avatar_url,
          email: _candidate.email,
          html_url: _candidate.html_url,
          company: _candidate.company,
          bio: _candidate.bio,
        });
      }
    }

    setAllCandidates(_candidates);
    setCandidate(_candidates[0]);

    localStorage.setItem("candidates", JSON.stringify(_candidates));
  }

  useEffect(() => {
    const _candidates = JSON.parse(localStorage.getItem("candidates") || "[]");

    if (_candidates.length === 0) fetchCandidates();
    else {
      setAllCandidates(_candidates);
      setCandidate(_candidates[0]);
    }
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {candidate ? (
        <CandidateCard
          candidate={candidate}
          onPlus={addCandidate}
          onMinus={nextCandidate}
        />
      ) : noMoreCandidates ? (
        <div>No More Candidates</div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CandidateSearch;
