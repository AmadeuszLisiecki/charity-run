import { ParticipantAreaData } from '../ParticipantAreaData/ParticipantAreaData';
import { ParticipantAreaResults } from '../ParticipantAreaResults/ParticipantAreaResults';
import { StyledRun } from './StyledParticipantAreaRun';

export const ParticipantAreaRun = () => {
  return (
    <StyledRun>
      <ParticipantAreaData />
      <ParticipantAreaResults />
    </StyledRun>
  );
};
