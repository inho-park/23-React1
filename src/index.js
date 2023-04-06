import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentList from './chapter_05/CommentList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);