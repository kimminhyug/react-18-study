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
import { App } from 'app';
import { Menu } from './menu';
import { CaseTransitions } from 'test/case3';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <HashRouter>
        <Switch>
          <Redirect exact path="/" to={'/menu'} />
          <Route path="/menu" component={Menu} />

          <Route path="/case/1" component={CaseUseId} />
          <Route path="/case/2" component={CaseAutomaticBatch} />
          <Route path="/case/3" component={CaseTransitions} />
          <Redirect
            path="*"
            to={'/not-found'}
            component={
              <>
                <Menu />
              </>
            }
          />
        </Switch>
      </HashRouter>
    </>
  </React.StrictMode>
);
