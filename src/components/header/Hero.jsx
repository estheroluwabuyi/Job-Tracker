import { motion } from "framer-motion";
import HeroIllustration from "./HeroIllustration";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.15),transparent_50%)]"></div>
      <div className="relative max-w-[700px] lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center px-6 md:px-0 lg:px-10 gap-7">
        <motion.div
          className="text-center w-full lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start gap-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className=" text-[2rem] ss:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-primary leading-tight capitalize font-monda">
            Track every application. <br />
            Stay calm through the process.
          </h1>
          <p className="text-[1.2rem] ss:text-[1.5rem] max-w-4xl text-text/80 font-medium tracking-wide px-10 md:pl-0">
            Never miss an interview or follow-up again. JobLog keeps all your
            applications, interviews, and offers organised in one place.
          </p>

          {/* Btns */}
          <div className="flex flex-col s:flex-row justify-center md:justify-start gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/signup"
                className="bg-primary text-bg px-8 py-4 rounded-xl  ss:text-[1.4rem] font-semibold shadow-md grid place-content-center"
              >
                Get Started Free
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/how-it-works"
                className="border border-primary text-primary px-8 py-4 rounded-xl  ss:text-[1.4rem] font-medium shadow-md grid place-content-center"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>

          <p className="tracking-wider text-[1.2rem] xs:text-[1.3rem] font-medium ">
            Free to start. No credit card required.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 "
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
