import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useHeight } from './hooks';

const Aside = styled.aside`
  background-color: var(--colors-bg-primary);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  /* position: fixed;
  height: 100%;
  z-index: 20; */

  & > input,
  textarea {
    background-color: var(--colors-bg-primary);
    padding: 0.5rem 1rem;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    transition: all 0.1s ease-in-out;

    &::placeholder {
      color: var(--colors-black);
    }
    &:focus-visible {
      outline: none;
      box-shadow: var(--shadow-primary);
    }
  }
`;

const TimelineTitle = styled.input`
  border: none;
  font-weight: bold;
  margin-bottom: 3rem;
  font-size: var(--fs-big);
  border-bottom: 4px solid var(--colors-black);

  &::placeholder {
    color: var(--colors-black);
  }
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const Period = styled.input`
  border: none;
  color: #d6cab0;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Description = styled.textarea`
  height: max-content;
  resize: none;
  outline: none;
  border: none;
  font-size: var(--fs-basic);
`;

export const Menu = ({ timeline, setTimeline }) => {
  const { title, period, description } = timeline;
  const [textareaheight, handleHeight] = useHeight();

  const handleChange = (e) => {
    handleHeight(e);

    setTimeline({
      ...timeline,
      description: e.target.value,
    });
  };

  return (
    <Aside>
      <TimelineTitle
        type="text"
        value={title}
        onChange={(e) =>
          setTimeline({
            ...timeline,
            title: e.target.value,
          })
        }
        placeholder="Name your timeline"
      />
      <Period
        type="text"
        value={period}
        onChange={(e) =>
          setTimeline({
            ...timeline,
            period: e.target.value,
          })
        }
        placeholder="Choose dates"
      />
      <Description
        type="text"
        value={description}
        onChange={handleChange}
        rows={textareaheight}
        placeholder="Name your timeline"
      />
    </Aside>
  );
};
