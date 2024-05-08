import React, { useTransition } from 'react';

export default function TabButton2({ children, isActive, changeState }) {
  if (isActive) {
    return <b>{children}</b>;
  }

  return (
    <button
      onClick={() => {
        changeState();
      }}
    >
      {children}
    </button>
  );
}
