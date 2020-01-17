import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

const direflowProperties = {
  testObj: { a:1 },
  testBool: true,
};

direflowComponent.configure({
  name: 'direflow-test',
  useShadow: false,
  properties: direflowProperties,
});

direflowComponent.create(App);
