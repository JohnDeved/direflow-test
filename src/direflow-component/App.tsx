import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import css from './App.css';
import scss from './App.scss';
import sass from './App.sass';

console.log({ css, scss, sass });

interface IProps {
  testObj: any;
  testBool: boolean;
}

const App: FC<IProps> = (props) => {
  console.log(props);
  return (
    <Styled styles={css}>
      <div>
        hello world
      </div>
    </Styled>
  );
};

export default App;
