import React, { useId } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const TimePointSection = styled.div`
  display: grid;
  grid-row: 1 / 3;
  grid-template-rows: 1fr 2px 1fr;
  width: 384px;

  &:nth-child(odd) > .card {
    grid-row: 3 / 4;
  }
`;

const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  background-color: #ccc1a8;

  &:hover {
    box-shadow: #b9ac8e 6px 6px 14px 0px inset, #dfceaa -6px -6px 14px 1px inset;
  }

  p {
    margin-top: 1rem;
    color: var(--colors-text);
  }
`;

export const AddTimePoint = ({ timepoints, setTimePoints }) => {
  const timepointId = useId();
  const handleAddTimePoint = () => {
    setTimePoints([
      ...timepoints,
      {
        id: timepointId,
        title: '',
        description: '',
        image: [],
        date: '',
      },
    ]);
  };

  return (
    <TimePointSection>
      <AddCard className="card" onClick={() => handleAddTimePoint()}>
        <AiOutlinePlus size={'32px'} />
        <p>Add a time point</p>
      </AddCard>
    </TimePointSection>
  );
};
