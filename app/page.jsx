import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none text-whites">
            <span className="text-xl">Network Engineer | DevOps</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent"> Sukma Aji Baskara </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-whites/80">
              I offers a solid background in networking and information security
              with a high interest in Networking and Technology Topics. Had an
              internship as a Security Engineer at an Information Security
              Services Provider Company. Recent project was Automate Network
              Configuration using Ansible in a Virtualization Environment
              Project. I'm proficient in various technologies.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="./assets/Sukma Aji Baskara-RESUME.pdf"
                download="Sukma Aji Baskara-RESUME.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
