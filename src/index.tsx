import './assets/scss/main.scss';
// befroe
import * as React from 'react';
/* after
 * react 17 to react 18로 업데이트 하는경우 react-dom(간단하게 update 하라는 warning 메세지 출력됨 ), react@type(return <></>등에서 jsx no-unsafe any error 발생) 을 업데이트 해야함
 */
// import * as ReactDOM from 'react-dom';
// import { React } from "react";
import { createRoot } from 'react-dom/client';
import { CaseUseId } from 'test/case1';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>oh 루트야</>
    <CaseUseId />
  </React.StrictMode>
);
