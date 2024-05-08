import React, { useRef, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const fetch = (time = 300) => new Promise((resolve) => setTimeout(resolve, time));

export const CaseAutomaticBatch = (): any => {
  const divBoxRef = useRef<HTMLDivElement>();
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [syncCount, setSyncCount] = useState(0);
  const handleClick = () => {
    fetch().then(() => {
      setIsLoading((prev) => !prev);
      setCount((prev) => {
        return prev + 1;
      });
    });
  };
  const handleClickTimer = () => {
    setIsLoading((prev) => !prev);
    setCount((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    if (divBoxRef.current) {
      const log = document.createElement('span');
      const utc = new Date().toUTCString();
      log.innerHTML = `${utc}: re-render`;
      divBoxRef.current.append(log);
    } else {
      alert('divBox Not Found');
    }
  });

  const clear = () => {
    if (divBoxRef.current) {
      divBoxRef.current.innerHTML = '';
    } else {
      alert('divBox Not Found');
    }
  };

  const handleFlushSyncClick = () => {
    // flushSync 란 강제로 DOM RENDERING 비권장 사용 방법
    // flushSync(() => {
    //   setSyncCount((prev) => {
    //     console.log(syncCount + 1, '1번째');
    //     return syncCount + 1;
    //   });
    // });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // color: isLoading ? 'red' : 'green',
      }}
    >
      <h3>Automatic Batching</h3>
      <h4>https://react.dev/blog/2022/03/29/react-v18#whats-new-in-react-18</h4>
      <ul>
        <li>
          신규 방식
          <ul>
            <li>동일한 스코프에서 실행된 setState들은 하나의 리렌더링으로 처리함</li>
            <li>Auto Batch를 원하지 않을 시, flushSync 함수 사용(공식 문서에서는 비 권장)</li>
          </ul>
        </li>
        <li>
          이전 방식
          <ul>
            <li>
              React application의 이벤트 핸들러(컴포넌트 내부 함수등)가 아닌 경우는 setState가 사용된 만큼 re-rendering
              이 발생
            </li>
          </ul>
        </li>
      </ul>

      <div style={{ display: 'flex', gap: 5 }}>
        isLoading: {isLoading} count: {count}
        <input type="button" onClick={handleClick} value="증가(비동기)" />
        <input type="button" onClick={handleClickTimer} value="증가" />
        <input type="button" onClick={clear} value="로그 삭제" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }} ref={divBoxRef}></div>
    </div>
  );
};
