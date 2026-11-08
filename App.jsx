import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Pages
import { Home } from './pages/Home';
import { Languages } from './pages/Languages';
import { LanguageDetails } from './pages/LanguageDetails';
import { PlacementTest } from './pages/PlacementTest';
import { TestResults } from './pages/TestResults';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Lessons } from './pages/Lessons';
import { LessonDetails } from './pages/LessonDetails';
import { PracticeCenter } from './pages/PracticeCenter';
import { GrammarPractice } from './pages/GrammarPractice';
import { Vocabulary } from './pages/Vocabulary';
import { ListeningPractice } from './pages/ListeningPractice';
import { ReadingPractice } from './pages/ReadingPractice';
import { WritingPractice } from './pages/WritingPractice';
import { SpeakingRoom } from './pages/SpeakingRoom';
import { StudyPlanner } from './pages/StudyPlanner';
import { Achievements } from './pages/Achievements';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Stories } from './pages/Stories';
import { WordBattle } from './pages/WordBattle';
import { MyMistakes } from './pages/MyMistakes';
import { CultureCorner } from './pages/CultureCorner';
import { NotFound } from './pages/NotFound';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Main Public & Learning Layout */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/languages/:langId" element={<LanguageDetails />} />
                <Route path="/placement-test" element={<PlacementTest />} />
                <Route path="/placement-test/results" element={<TestResults />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<CourseDetails />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lessons/:lessonId" element={<LessonDetails />} />
                
                {/* Practice Hub and Dedicated Submodules */}
                <Route path="/practice" element={<PracticeCenter />} />
                <Route path="/practice/grammar" element={<GrammarPractice />} />
                <Route path="/practice/vocabulary" element={<Vocabulary />} />
                <Route path="/practice/listening" element={<ListeningPractice />} />
                <Route path="/practice/reading" element={<ReadingPractice />} />
                <Route path="/practice/writing" element={<WritingPractice />} />
                <Route path="/practice/speaking" element={<SpeakingRoom />} />

                {/* Gamification & Extra Features */}
                <Route path="/stories" element={<Stories />} />
                <Route path="/word-battle" element={<WordBattle />} />
                <Route path="/culture" element={<CultureCorner />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              {/* Dedicated Auth Layout */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* Student Dashboard Portal Layout */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/planner" element={<StudyPlanner />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-mistakes" element={<MyMistakes />} />
              </Route>

              {/* 404 Catch All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

