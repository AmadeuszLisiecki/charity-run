import styled from 'styled-components';

export const StyledParticipant = styled.div`
  background: url('/charity-run/public/images/cut-background.png') no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;

    #heading {
      padding-top: 80px;
    }

    #participantMain,
    #my-data,
    #before-run {
      padding-top: 150px;
    }

    a,
    .map {
      transition: color 400ms;
    }

    a:hover,
    .map:hover {
      color: var(--orange);
    }
  }
`;
