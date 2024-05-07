import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export const CaseAutomaticBatch = (): any => {
  const [count, setCount] = useState(0);
  const [syncCount, setSyncCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => {
      console.log(count + 1, '1번째');
      return count + 1;
    });
    setCount((prev) => {
      console.log(count + 1, '2번째');
      return count + 1;
    });
    //react 18 에서 도입된 autobatching은 이벤트 핸들러 및 promise와 같은 내장 비동기 함수에 대해  자동으로 batch 작업을 수행함
    //과거에는 위와 같이 호출 하면 2번의 렌더링이 발생 하였지만 react 18에서부터는 한번에 묶어(배치) 처리 하기 떄문에 1번의 렌더링 만이 발생함.
    //단 현재 스코프 안에서만 배치 처리 되며, 하위 스코프에서 선언된 경우 별도로 배치 처리됨
  };

  const handleFlushSyncClick = () => {
    // flushSync 란 강제로 DOM RENDERING 비권장 사용 방법
    flushSync(() => {
      setSyncCount((prev) => {
        console.log(syncCount + 1, '1번째');
        return syncCount + 1;
      });
    });
    flushSync(() => {
      setSyncCount((prev) => {
        console.log(syncCount + 1, '2번째');
        return syncCount + 1;
      });
    });
  };

  useEffect(() => {
    console.log('count rerender', count);
  }, [count]);

  useEffect(() => {
    console.log('syncCount rerender', syncCount);
  }, [syncCount]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        flushSync 적용 전: {count} <input type="button" onClick={handleClick} value="증가" />
      </div>
      <div>
        flushSync 적용 후: {syncCount} <input type="button" onClick={handleFlushSyncClick} value="증가" />
      </div>
    </div>
  );
};
// yarn add --dev @types/react
