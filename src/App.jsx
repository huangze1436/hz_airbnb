import React, { memo } from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import {AppWrapper} from './style';

const App = memo(() => {
  console.log(this);
  return (
   <AppWrapper>
      <AppHeader/>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter/>
   </AppWrapper> 
  );
});

export default App;