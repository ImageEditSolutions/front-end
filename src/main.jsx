import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // React 17에서는 react-dom을 사용
import App from './App.jsx'; // App 컴포넌트 임포트
import './index.css'; // CSS 파일 임포트

// React 앱 렌더링
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') // 루트 엘리먼트에 렌더링
);
