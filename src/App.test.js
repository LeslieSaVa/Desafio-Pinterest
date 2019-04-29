import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pictures from './components/pictures'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('se abre el modal y se muestra la imagen', () => {
  const rendermodal = Enzyme.mount(<App/>)
  const clickimg = rendermodal.instance();

  clickimg.openModal({
    "description2": "pink flowers on gray ceramic vase",
    "url":"https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjY1NTM4fQ",
    "description": "Peony vase",
  })

  rendermodal.update();
  expect(rendermodal.state().modal).toBe('https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjY1NTM4fQ')
});

it('al clickear en la imagen se abre el modal', () => {
  const modalrenderfetch = Enzyme.mount(<App/>);
  const clickModal = modalrenderfetch.find('Pictures');
  const functionImg = clickModal.instance();
})


