import { getPersonalData, getExperiences } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  const personalData = getPersonalData();
  const experiences = getExperiences();

  if (!personalData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HomeClient personalData={personalData} experiences={experiences} />
      </main>
      <Footer 
        email={personalData.email} 
        github={personalData.github} 
        linkedin={personalData.linkedin} 
      />
    </div>
  );
}
