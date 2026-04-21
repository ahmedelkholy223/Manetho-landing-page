import { Navigate, Route, Routes } from 'react-router-dom';
import ForMuseumsPage from './pages/ForMuseumsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/for-museums" element={<ForMuseumsPage />} />
      <Route path="*" element={<Navigate to="/for-museums" replace />} />
    </Routes>
  );
}
