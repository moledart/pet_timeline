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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  width: 100%;
  position: relative;

  &:hover,
  &:hover > input,
  textarea {
    background-color: #ccc1a8;
  }

  &:hover > .action {
    visibility: visible;
  }

  p {
    margin-top: 1rem;
    color: var(--colors-text);
  }

  & > input,
  textarea {
    border: none;
    background-color: hsla(41, 32%, 76%, 0%);
    padding: 0.25rem 0.5rem;
    color: var(--colors-black);
    width: 100%;
    font-family: 'Oswald', sans-serif;
    transition: all 0.1s ease-in-out;
    line-height: 18px;

    &::placeholder {
      color: var(--colors-black);
    }
    &:focus-visible {
      border: none;
      outline: none;
      box-shadow: #b9ac8e 3px 3px 6px 0px inset, #dfceaa -3px -3px 6px 1px inset;
    }
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

const Title = styled.input`
  font-size: var(--fs-medium);
  font-weight: bold;
`;

const Description = styled.textarea`
  height: max-content;
  resize: none;
`;

const Date = styled(Title)`
  font-size: var(--fs-big);
`;

const ImageGallery = styled.div`
  display: flex;
  max-height: 150px;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const Image = styled.img`
  aspect-ratio: 4/3;
  max-width: 100%;
  object-fit: cover;
`;

const ActionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  visibility: hidden;
  width: fit-content;
  display: flex;
  gap: 2rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const EditIcon = styled(AiOutlineEdit)``;

export const TimePoint = (props) => {
  const [timepointData, setTimepointData] = useState(props);
  const [textareaheight, setTextareaheight] = useState(2);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    const maxRows = 10;
    const height = e.target.scrollHeight;
    const rowHeight = 18;
    const trows = Math.ceil(height / rowHeight) - 1;
    if (trows > textareaheight && trows < maxRows) {
      setTextareaheight(trows);
    }
    const { name, value } = e.target;
    setTimepointData({ ...timepointData, [name]: value });
  };

  return (
    <TimePointSection>
      <Line />
      {!edit && (
        <TimePointCard timepointData={timepointData} setEdit={setEdit} />
      )}
      {edit && (
        <EditTimePointCard
          timepointData={timepointData}
          setTimepointData={setTimepointData}
          setEdit={setEdit}
        />
      )}
    </TimePointSection>
  );
};
