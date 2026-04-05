import { getPersonalData, getSkills, getProjects } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioClient from '@/components/PortfolioClient';

export const dynamic = 'force-static';

export default function Portfolio() {
  const personalData = getPersonalData();
  const skills = getSkills();
  const projects = getProjects();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PortfolioClient skills={skills} projects={projects} />
      </main>
      <Footer 
        email={personalData?.email} 
      />
    </div>
  );
}
