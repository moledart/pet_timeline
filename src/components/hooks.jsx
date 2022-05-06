import React, { useState } from 'react';

export function useHeight() {
  const [textareaheight, setTextareaheight] = useState(10);

  const handleHeight = (e) => {
    const maxRows = 10;
    const height = e.target.scrollHeight;
    const rowHeight = 18;
    const trows = Math.ceil(height / rowHeight) - 1;
    if (trows > textareaheight && trows < maxRows) {
      setTextareaheight(trows);
    }
  };

  return [textareaheight, handleHeight];
}
