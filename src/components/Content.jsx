import React, { useState, useId } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { TimePoint } from './TimePoint';
import { AddTimePoint } from './AddTimePoint';

const Wrapper = styled.main`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  justify-content: flex-start;
  /* padding-left: 378px; */
`;

export const Content = ({ timeline }) => {
  const [timepoints, setTimepoints] = useState(timeline.timepoints);

  return (
    <Wrapper>
      {timepoints?.map((timepoint) => (
        <TimePoint key={timepoint.id} {...timepoint} />
      ))}
      <AddTimePoint setTimepoints={setTimepoints} timepoints={timepoints} />
    </Wrapper>
  );
};