import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {
  fetchPageInfo,
  fetchExperiences,
  fetchSkills,
  fetchProjects,
  fetchSocials,
} from "../utils";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};

export default function Home({
  socials,
  pageInfo,
  skills,
  projects,
  experiences,
}: Props) {
  console.log("url::", process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen scroll-smooth snap-y snap-mandatory z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pr-2">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="w-full sticky sm:bottom-2 bottom-20 flex justify-end items-center">
        <Link href="#hero">
          <div className="bg-white/20 flex items-center justify-center h-12 w-12 rounded-full cursor-pointer mr-2 active:bg-orange-500/20 z-20">
            <img className="" src="./up.png" />
          </div>
        </Link>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      pageInfo,
      socials,
      projects,
      skills,
      experiences,
    },
    revalidate: 10,
  };
};
