import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../dashboard.css'

export const metadata = {
  title: 'Dashboard - Serena',
  description: 'Your mental health dashboard',
}

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <main className="dashboard-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}


