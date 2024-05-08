import React, { useId, useRef } from 'react';

const IdComponent = () => {
  const inputId = useId();
  return <input type="text" defaultValue={inputId} id={inputId} onChange={() => null} />;
};
const LabelComponent = () => {
  const idForFirstName = useId();
  const compRef = useRef();

  return (
    <form>
      <label ref={compRef} htmlFor={idForFirstName}>
        이름
      </label>
      <input id={idForFirstName} type="text" placeholder={`생성된 id --> ${idForFirstName}`} />
    </form>
  );
};
export const CaseUseId = (): any => {
  const arr = new Array(10).fill(undefined);
  return (
    <div>
      <h3>useId</h3>
      <h4>https://react.dev/reference/react/useId</h4>
      <ul>
        <li>application에서 고유한 Id를 생성 </li>
        <li>hook의 생명주기(unmount)가 종료 되면 자동으로 메모리에서 해제</li>
        <li>SSR의 경우에도 서버와 클라이언트의 ID를 동일하게 유지 함</li>
      </ul>
      {/* <h3>번외</h3>
      <h4 data-alt="https://react.dev/reference/react-dom/client/hydrateRoot">
        ReactDOM.hydrateRoot(domNode, reactNode, options?)
      </h4>
      <ul>
        <li>SSR에서 사용되며 서버에서 생성된 html에 리액트로 구현된 js(이벤트 핸들러등)를 동기화함</li>
      </ul> */}

      {arr.map((_, idx) => {
        return (
          <React.Fragment key={idx}>
            <IdComponent />
          </React.Fragment>
        );
      })}
      <LabelComponent />
    </div>
  );
};
// yarn add --dev @types/react
