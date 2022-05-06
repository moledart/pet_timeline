import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { TimePointCard } from './Card';
import { EditTimePointCard } from './EditCard';

const TimePointSection = styled.div`
  display: grid;
  grid-row: 1 / 3;
  grid-template-rows: 1fr 2px 1fr;
  width: 420px;

  &:nth-child(odd) > .card {
    grid-row: 3 / 4;
  }
`;

const Line = styled.div`
  grid-row: 2 / 3;
  background-color: var(--colors-black);
  display: flex;
  height: 10%;
  min-height: 2px;
  width: 100%;
  align-self: center;
  position: relative;
  overflow: visible;
  z-index: 10;

  &::after {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 32px; /* position the left edge of the element at the middle of the parent */
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: var(--colors-black);
  }
`;

export const TimePoint = ({ timepoint, timeline, setTimeline }) => {
  const [edit, setEdit] = useState(false);

  const handleDeleteTimepoint = (id) => {
    const newTimePoints = timeline.timepoints.filter((item) => item.id !== id);

    setTimeline({
      ...timeline,
      timepoints: [...newTimePoints],
    });
  };

  return (
    <TimePointSection>
      <Line />
      {!edit && (
        <TimePointCard
          timepoint={timepoint}
          setEdit={setEdit}
          handleDeleteTimepoint={handleDeleteTimepoint}
        />
      )}
      {edit && (
        <EditTimePointCard
          timepoint={timepoint}
          timeline={timeline}
          setTimeline={setTimeline}
          setEdit={setEdit}
          handleDeleteTimepoint={handleDeleteTimepoint}
        />
      )}
    </TimePointSection>
  );
};
