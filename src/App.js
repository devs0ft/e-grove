import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from './app/dashboard'
import Home from './app/home'
import LiveLessons from './app/livelessons'
import HomeworkHelp from './app/homeworkhelp'
import VideoLibrary from './app/video-library'
import LearningPlan from './app/plan'
import MockExams from './app/mock-exams'
import PracticeExams from './app/practice-exams'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route path="home" element={<Home/>} />
        <Route path="live-lessons" element={<LiveLessons/>} />
        <Route path="homework-help" element={<HomeworkHelp/>} />
        <Route path="video-library" element={<VideoLibrary/>} />
        <Route path="learning-plan" element={<LearningPlan/>} />
        <Route path="mock-exams" element={<MockExams/>} />
        <Route path="practice-exams" element={<PracticeExams/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
