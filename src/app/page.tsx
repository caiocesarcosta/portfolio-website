import {
  About,
  Contact,
  Education, // *** Adicionado: Importa o componente Education ***
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Education /> {/* *** Adicionado: Renderiza a seção de Formação Acadêmica *** */}
        <Skills />
        <Experience />

        <FeaturedProjects />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
