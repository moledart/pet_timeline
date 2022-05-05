import { useState, useId } from 'react';
import styled from 'styled-components';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 384px 1fr;
  background-color: var(--colors-bg);
  height: 100vh;
  min-width: 100%;
  width: max-content;
`;

function App() {
  const [timeline, setTimeline] = useState({
    title: 'Timeline.io',
    timepoints: [
      {
        id: uuidv4(),
        title: 'My first timepoint',
        description: `So basically it is a website where you can describe some events on a timeline. Just start writing something. Looks nice.`,
        image: [
          'https://images.unsplash.com/photo-1651654912281-c650f88348ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          'https://images.unsplash.com/photo-1529843741189-f96031a243ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
        ],
        date: '1903 - 1925',
      },
      {
        id: uuidv4(),
        title: 'My second timepoint',
        description: 'Just testing the grid. Nothing to see here',
        image: [
          'https://images.unsplash.com/photo-1651651569100-cad321176c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          'https://images.unsplash.com/photo-1529843741189-f96031a243ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
        ],
        date: '1903 - 1925',
      },
      {
        id: uuidv4(),
        title: 'My third timepoint',
        description: 'Does not look bad but gotta figure out line breaks',
        image: [
          'https://images.unsplash.com/photo-1616436051317-c4373ce142e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80',
          'https://images.unsplash.com/photo-1529843741189-f96031a243ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
        ],
        date: '1903 - 1925',
      },
    ],
  });

  return (
    <Container>
      <Menu timeline={timeline} setTimeline={setTimeline} />
      <Content timeline={timeline} setTimeline={setTimeline} />
    </Container>
  );
}

export default App;
