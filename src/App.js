import React from 'react';
import './App.css';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Title from './components/Title/Title';
import StudentsList from './components/StudentsList/StudentsList';
import Subtitle from './components/Subtitle/Subtitle';
import studentsListData from './data/students-list-data';

const App = () => {
  return (
    <>
      <Title text="Students" />
      <Subtitle text="Number of students:" lengthValue={studentsListData.length} />
      <StudentsList />
      <Title text="Blog articles" />
      <ArticlesList />
    </>
  );
}

export default App;
