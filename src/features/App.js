import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
export default function App() {
  return (
    <div className="container text-center m-0 p-0 no-wrap">
      <div className="row">
        <div className="col col-md-auto">
          <Sidebar />
        </div>
        <div className="col ">
          <Main />
        </div>
      </div>
    </div>
  );
}
