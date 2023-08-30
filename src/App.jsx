import { Header } from 'components/Header/Header.jsx';
import { Sidebar } from 'components/Sidebar/Sidebar.jsx';

export const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-full w-full flex">
        <Sidebar />
        <main className="w-full">123</main>
      </div>
    </div>
  );
};
