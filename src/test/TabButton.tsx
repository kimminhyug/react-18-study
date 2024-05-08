import React, { useTransition } from 'react';

export default function TabButton({ children, isActive, changeState }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  if (isPending) {
    // return <b className="pending">{children}</b>;
    return <b>isPending</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          changeState();
        });
      }}
    >
      {children}
    </button>
  );
}
