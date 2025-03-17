import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import CandidateInterface from '../interfaces/Candidate.interface';

import Loading from '../components/Loading';

const CandidateSearch = () => {

  const [candidate, setCandidate] = useState<CandidateInterface>();
  const [alCandidates, setAllCandidates] = useState<any[]>();

  useEffect(() => {
    async function fetchCandidates() {
      const data = await searchGithub();
      console.log(data);
    }

    fetchCandidates();
  }, [])

  return (
    <div>
      <h1>Candidate Search</h1>
      {candidate ? <CandidateCard {...candidate} /> : <Loading />}

    </div>
  );
};

export default CandidateSearch;
