import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DataTable from '../components/DataTable';

export default function Details() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (typeof window !== 'undefined' && !user) {
    router.push('/');
    return null;
  }

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main>
          <h1>Details</h1>
          <DataTable />
        </main>
      </div>
    </div>
  );
}