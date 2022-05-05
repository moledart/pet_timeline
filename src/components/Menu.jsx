import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Aside = styled.aside`
  background-color: var(--colors-bg-primary);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  /* position: fixed;
    height: 100%;
    z-index: 10; */
`;

const TimelineTitle = styled.input`
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid var(--colors-black);
  background-color: var(--colors-bg-primary);
  padding: 0.5rem 0;
  font-size: var(--fs-big);
  color: var(--colors-black);
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  font-family: 'Oswald', sans-serif;

  &::placeholder {
    color: var(--colors-black);
  }
  &:focus-visible {
    border: none;
    outline: none;
    border-bottom: 4px solid var(--colors-black);
  }
`;

export const Menu = () => {
  const [timelineTitle, setTimelineTitle] = useState('');

  return (
    <Aside>
      <TimelineTitle
        type="text"
        value={timelineTitle}
        onChange={(e) => setTimelineTitle(e.target.value)}
        placeholder="Name your timeline"
      />
    </Aside>
  );
};
