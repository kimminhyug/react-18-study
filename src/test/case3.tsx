import React, { useRef, useTransition, Suspense, useState, useEffect } from 'react';
import TabButton from './TabButton';
import TabButton2 from './TabButton2';
import PostTab from './PostTab';

import { PacmanLoader } from 'react-spinners';

export const CaseTransitions = (): any => {
  const divBoxRef = useRef<HTMLDivElement>();
  const [tab, setTab] = useState('contact');
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setText(e.target.value);
    });
    setValue(e.target.value);
  };
  useEffect(() => {
    if (divBoxRef.current) {
      const log = document.createElement('span');
      const utc = new Date().toUTCString();
      log.innerHTML = `${utc}: text---${text}   value---${value}   isPending---${isPending?.toString()}`;
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
      <h3>Transitions </h3>
      <h4>https://ko.react.dev/blog/2022/03/29/react-v18#new-feature-transitions</h4>
      <span>
        스레드에서 무거운 작업이 실행 되면, 중간중간에 들어오는 유저의 상호작용을 처리 할떄 화면이 멈추거나, 프레임이
        떨어지는 현상이 발생하였고 해당 현상을 해결 하기 위해 아래 hook이 추가됨
      </span>
      <span>
        node js의 처리 방법과 유사하며, 스레드에서 무거운 작업을 처리하다가, 중간에 유저의 요청이 발생하면 하던 작업은
        잠시 멈추고 유저의 요청을 처리하는 방식
      </span>
      <ul>
        <li>
          useDeferredValue(State)
          <ul>
            <li>파라미터에 State를 지정하면, 해당 hook은 상태가 업데이트 되는동안 상태의 이전 값을 return 함</li>
            <li>
              하위 컴포넌트에 비동기 작업으로 원치않는 Suspense의 fallback이 발생 할 수 있기에, 비동기 작업이 완료 되기
              전까직, 이전 상태를 유지하다 완료 되면 리 렌더링 진행{' '}
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          [isPending, startTransition] = useTransition()
          <ul>
            <li>setState 상태변화를 제어하기위한 hook </li>
            <li>리렌더링 도중에도 UI의 반응성이 유지 됨</li>
            <li>isPending transition이 진행중인 경우 true</li>
            <li>
              startTransition(non-blocking) 에서 실행되는 state의 경우 중요도가 낮아지며, 중간에 다른 상태변화 요청
              발생시, 처리되던것은 중단되고, 해당 요청을 처리하러 감
            </li>
          </ul>
        </li>
        <li>
          이전 방식
          <ul>
            <li>보통 debounce 이용</li>
          </ul>
        </li>
      </ul>
      <div>
        <input type="text" onChange={onChange} />;
        <input type="button" onClick={clear} value="로그 삭제" />
        <div style={{ display: 'flex', flexDirection: 'column' }} ref={divBoxRef}></div>
      </div>
      <Suspense fallback={<Spinner />}>
        <div style={{ display: 'flex', gap: 5 }}>
          <TabButton isActive={tab === 'contact'} changeState={() => setTab('contact')}>
            Contact
          </TabButton>
          <TabButton isActive={tab === 'posts'} changeState={() => setTab('posts')}>
            Posts
          </TabButton>
          <TabButton2 isActive={tab === 'posts2'} changeState={() => setTab('posts2')}>
            Posts
          </TabButton2>
        </div>
        <div>
          <hr />
          <>
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostTab />}
            {tab === 'posts2' && <PostTab />}
          </>
        </div>
      </Suspense>
    </div>
  );
};

const AboutTab = () => {
  return <>AboutTab</>;
};

const PostsTab = () => {
  return <>PostsTab</>;
};
const PostsTab2 = () => {
  return <>PostsTab2</>;
};
const Spinner = () => {
  return <PacmanLoader color="#36d7b7" />;
};
