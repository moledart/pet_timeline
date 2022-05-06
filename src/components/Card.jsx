import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #ccc1a8;
  }

  &:hover > .action {
    visibility: visible;
  }
`;

const Title = styled.h3`
  font-size: var(--fs-medium);
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Date = styled.h2`
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
  aspect-ratio: 16/9;
  max-height: 200px;
  width: 100%;
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

export const TimePointCard = ({
  timepoint,
  setEdit,
  handleDeleteTimepoint,
}) => {
  const { id, date, title, description, image } = timepoint;

  return (
    <Card className="card">
      <ActionWrapper className="action">
        <Action onClick={() => setEdit(true)}>
          <span>Edit</span>
          <AiOutlineEdit size={'20px'} />
        </Action>
        <Action onClick={() => handleDeleteTimepoint(id)}>
          <span style={{ color: '#a01818' }}>Delete</span>
          <AiOutlineDelete size={'20px'} color={'#a01818'} />
        </Action>
      </ActionWrapper>
      <>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageGallery>
          <Image src={image[0]} />
        </ImageGallery>
      </>
    </Card>
  );
};
