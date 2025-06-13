import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles.css';
import App from './Components/Application/ApplicationComponent';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/locale/ru_RU';

/*Компонент для старта приложения*/
const Root = ReactDOM.createRoot(
  document.getElementById('Root') as HTMLElement
);
Root.render(
  <React.StrictMode>
    <ConfigProvider locale={ru_RU} componentSize='small'>
          <App/>
    </ConfigProvider>

  </React.StrictMode>
);


