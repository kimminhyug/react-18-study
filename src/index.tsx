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
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { CaseAutomaticBatch } from 'test/case2';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>HashRotuer /#/ url의 hash를 이용하여 페이지 렌더링 /#/~~ 백엔드에 get 요청이 가지 않음</span>
        <span>
          browserRotuer html history api를 이용하여 페이지 렌더링 puseState, replacementState 이용하여 수정 가능
        </span>
      </div>
      <HashRouter>
        <Switch>
          <Redirect exact path="/" to={'/'} />
          <Route path="/case/1" component={CaseUseId} />
          <Route path="/case/2" component={CaseAutomaticBatch} />
          <Redirect path="*" to={'/not-found'} component={<>나는 404 </>} />
        </Switch>
      </HashRouter>
    </>
  </React.StrictMode>
);
