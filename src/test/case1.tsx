import React, { useId } from 'react';

const IdComponent = () => {
  const inputId = useId();
  return <input type="text" defaultValue={inputId} id={inputId} onChange={() => null} />;
};
export const CaseUseId = (): any => {
  const arr = new Array(10).fill(undefined);
  return (
    <div>
      {arr.map((_, idx) => {
        return (
          <React.Fragment key={idx}>
            <IdComponent />
          </React.Fragment>
        );
      })}
    </div>
  );
};
// yarn add --dev @types/react
