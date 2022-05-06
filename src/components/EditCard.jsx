import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSave, AiOutlineDelete } from 'react-icons/ai';
import { useHeight } from './hooks';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    &:hover {
      box-shadow: var(--shadow);
    }
    &:focus-visible {
      border: none;
      outline: none;
      box-shadow: var(--shadow);
    }
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
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: var(--shadow);
  }
`;

export const EditTimePointCard = ({
  timepoint,
  timeline,
  setTimeline,
  setEdit,
  handleDeleteTimepoint,
}) => {
  const { id, date, title, description, image } = timepoint;
  const [textareaheight, handleHeight] = useHeight();

  const handleChange = (e) => {
    handleHeight(e);

    const { name, value } = e.target;

    const newTimePoints = timeline.timepoints.map((item) => {
      if (item.id !== id) return item;
      return { ...item, [name]: value };
    });

    setTimeline({
      ...timeline,
      timepoints: [...newTimePoints],
    });
  };

  return (
    <Card className="card">
      <ActionWrapper className="action">
        <Action onClick={() => setEdit(false)}>
          <span>Save changes</span>
          <AiOutlineSave size={'20px'} />
        </Action>
        <Action onClick={() => handleDeleteTimepoint(id)}>
          <span style={{ color: '#a01818' }}>Delete</span>
          <AiOutlineDelete size={'20px'} color={'#a01818'} />
        </Action>
      </ActionWrapper>
      <>
        <Date
          value={date}
          placeholder="Date"
          name="date"
          onChange={handleChange}
        />
        <Title
          placeholder="Timepoint..."
          value={title}
          name="title"
          onChange={handleChange}
        />
        <Description
          placeholder="Tell about the event"
          value={description}
          name="description"
          onChange={handleChange}
          rows={textareaheight}
        />
        <ImageGallery>{/* <Image src={image[0]} /> */}</ImageGallery>
      </>
    </Card>
  );
};
