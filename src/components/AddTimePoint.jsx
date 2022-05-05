import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

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

export const AddTimePoint = ({ timepoints, timeline, setTimeline }) => {
  const handleAddTimePoint = () => {
    setTimeline({
      ...timeline,
      timepoints: [
        ...timepoints,
        {
          id: uuidv4(),
          title: 'This is a new timpoint',
          description: 'Click on the edit button to start adding information',
          image: [
            'https://images.unsplash.com/photo-1651610925384-687152fdd8d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          ],
          date: 'Woah new event',
        },
      ],
    });
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
