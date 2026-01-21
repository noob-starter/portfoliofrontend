import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HorizontalScroll from '../components/HorizontalScroll';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import AnimatedText3D from '../utils/components/AnimatedText3D.jsx';
import profileImage from '../assets/banner.png';
import plusIcon from '../assets/icons/plus.png';
import minusIcon from '../assets/icons/minus.png';
import { colors } from '../theme/colors';
import { defaultTechnologies, defaultInterpersonalSkills, defaultEducation, defaultAchievements } from '../utils/defaultData';
import { mapProfileData } from '../mappers/profileMapper.js';
import { fetchProfile } from '../fetches/fetchProfile';
import { fetchFaqs } from '../fetches/fetchFaqs';
import { fetchExperiences } from '../fetches/fetchExperiences';
import { fetchTechnologies } from '../fetches/fetchTechnologies';
import { fetchEducation } from '../fetches/fetchEducation';
import { fetchAchievements } from '../fetches/fetchAchievements';

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [interpersonalSkills, setInterpersonalSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalData, setSelectedModalData] = useState(null);
  const [showLoadingScreen, setShowLoadingScreen] = useState(() => {
    // Check if loader should be shown
    const lastLoaderShown = localStorage.getItem('portfolioLoaderLastShown');
    if (!lastLoaderShown) {
      return true; // First time, show loader
    }
    const timeSinceLastShown = Date.now() - parseInt(lastLoaderShown);
    const loaderCacheDuration = parseInt(import.meta.env.VITE_LOADER_CACHE_DURATION) || 120000; // Default: 2 minutes
    return timeSinceLastShown > loaderCacheDuration; 
  });

  // Function to generate roles with sequential left, top, and delay values
  const generateRoles = (titles) => {
    const baseLeft = 8;        // Starting left position
    const leftIncrement = 2;   // Increment for left position per role
    const baseTop = 25;        // Starting top position
    const topIncrement = 7;    // Increment for top position per role
    const baseDelay = 0.3;     // Starting delay
    const delayIncrement = 0.2; // Increment for delay

    return titles.map((title, index) => ({
      title,
      left: baseLeft + (index % 2) * leftIncrement, // Alternates left position slightly
      top: baseTop + index * topIncrement,
      delay: baseDelay + index * delayIncrement
    }));
  };

  // Get profile data or use defaults
  const profileData = mapProfileData(profile);

  // Generate roles with sequential positioning
  const roles = generateRoles(profileData.roleTitles);

  // Callback when loading completes
  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    // Store the current timestamp
    localStorage.setItem('portfolioLoaderLastShown', Date.now().toString());
  };

  useEffect(() => {
    const loadData = async () => {
      // Fetch all data in parallel
      const [profileData, faqsData, experiencesData, technologiesData, educationData, achievementsData] = await Promise.all([
        fetchProfile(),
        fetchFaqs(),
        fetchExperiences(),
        fetchTechnologies(),
        fetchEducation(),
        fetchAchievements()
      ]);

      setProfile(profileData);
      setFaqs(faqsData);
      setExperiences(experiencesData);
      setTechnologies(technologiesData.technicalSkills);
      setInterpersonalSkills(technologiesData.interpersonalSkills);
      setEducation(educationData);
      setAchievements(achievementsData);
      setLoading(false);
    };

    loadData();
  }, []);

  // Handler to open modal with data
  const handleOpenModal = (data) => {
    setSelectedModalData(data);
    setIsModalOpen(true);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModalData(null);
  };

  // Show loading screen
  if (showLoadingScreen) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
               style={{ backgroundColor: colors.background.secondary }}>

        {/* Profile Image - Full Background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover object-top lg:object-contain lg:object-center lg:scale-85 face-border"
          />

          <div className="absolute inset-x-0 bottom-0 h-[30%]">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80
            to-transparent backdrop-blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40
            to-transparent backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent
            to-transparent"></div>
          </div>
        </motion.div>

        {roles.map((role, index) => (
          <motion.div
            key={index}
            className="absolute z-10 hidden md:block"
            style={{ left: `${role.left}%`, top: `${role.top}%` }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: role.delay }}
          >
            <p className="text-3xl font-semibold text-gray-700">{role.title}</p>
          </motion.div>
        ))}

        <motion.div
          className="absolute left-[5%] bottom-[10%] md:left-auto md:right-[10%] md:top-[25%] md:bottom-auto z-10 w-[90%] md:w-[300px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatedText3D text={`I'am ${profileData.fullName}`} fontSize="3rem" />
        </motion.div>
        <motion.div
          className="absolute right-[7%] top-[35%] z-10 w-[400px] hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed text-justify font-semibold">
            {profileData.intro}
          </p>
        </motion.div>

        <motion.div
          className="absolute left-[5%] top-[65%] z-10 hidden md:block"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h1 className="text-9xl font-bold text-gray-800 tracking-tight shine-text"
              style={{ fontFamily: "'Getaway Car', sans-serif" }}>
            {profileData.firstName.toUpperCase()}
          </h1>
        </motion.div>
        <motion.div
          className="absolute right-[12%] top-[78%] z-10 hidden md:block"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <h1 className="text-9xl font-bold text-gray-800 tracking-tight shine-text"
              style={{ fontFamily: "'Getaway Car', sans-serif" }}>
            {profileData.lastName.toUpperCase()}
          </h1>
        </motion.div>
      </section>


      <div className="flex flex-col items-center justify-center w-full gap-24">
        {/* About Section */}
        <motion.section
          className="w-full"
          style={{ backgroundColor: colors.background.tertiary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:!pt-0" style={{ padding: '10% 10% 5% 10%'}}>

            <motion.div
              className="p-8 md:p-16 flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
              <br /> <br />
              <p className="text-xl text-gray-700 leading-relaxed mb-10 text-justify">
                {profileData.bio}
              </p>
            </motion.div>

            <motion.div
              className="w-full h-full hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={profileData.banner || profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          className="w-[100%] mx-auto flex flex-col gap-24"
          style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '4%' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          {/* Experiences Section */}
          <HorizontalScroll title="Experience">
            {experiences.map((exp, index) => (
              <Card key={index} {...exp} onOpenModal={() => handleOpenModal(exp)} />
            ))}
          </HorizontalScroll>
        </motion.div>

        {/* Technologies Section */}
        <motion.section
          className="w-full"
          style={{ backgroundColor: colors.background.tertiary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '4%' }}>
            <HorizontalScroll title="Technical Skills">
              {(technologies.length > 0 ? technologies : defaultTechnologies).map((tech, index) => (
                <Card key={index} {...tech} hideMoreButton={true} />
              ))}
            </HorizontalScroll>
          </div>
        </motion.section>

        <motion.div
          className="w-[100%] mx-auto flex flex-col gap-24"
          style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '4%' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Interpersonal Skills Section */}
          <HorizontalScroll title="Interpersonal Skills">
            {(interpersonalSkills.length > 0 ? interpersonalSkills : defaultInterpersonalSkills).map((skill, index) => (
              <Card key={index} {...skill} hideMoreButton={true} />
            ))}
          </HorizontalScroll>
        </motion.div>

        {/* Education Section */}
        <motion.section
          className="w-full"
          style={{ backgroundColor: colors.background.tertiary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '4%' }}>
            <HorizontalScroll title="Education">
              {(education.length > 0 ? education : defaultEducation).map((edu, index) => (
                <Card key={index} {...edu} onOpenModal={() => handleOpenModal(edu)} />
              ))}
            </HorizontalScroll>
          </div>
        </motion.section>

        <motion.div
          className="w-[100%] mx-auto flex flex-col gap-24"
          style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '4%' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Achievements Section */}
          <HorizontalScroll title="Achievements">
            {(achievements.length > 0 ? achievements : defaultAchievements).map((achievement, index) => (
              <Card key={index} {...achievement} onOpenModal={() => handleOpenModal(achievement)} />
            ))}
          </HorizontalScroll>
        </motion.div>

        {/* FAQ Section */}
        <motion.section
          className="w-full"
          style={{ backgroundColor: colors.background.tertiary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-6" style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%',
              paddingBottom: '4%' }}>
          <motion.h2
            className="text-3xl font-bold mb-8 text-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center"
            style={{ marginBottom: '80px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Everything you need to know about working with us
          </motion.p>

          <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl"
                style={{ marginBottom: '16px', padding: '10px 30px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <motion.img
                    src={openFAQ === index ? minusIcon : plusIcon}
                    alt={openFAQ === index ? 'Collapse' : 'Expand'}
                    className="w-6 h-6"
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0,
                    marginTop: openFAQ === index ? 16 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          </div>
        </motion.section>

        <div className="w-[100%] mx-auto flex flex-col gap-6" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <div className="h-1"></div>
        </div>
      </div>

      {/* Modal */}
      {selectedModalData && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedModalData.title}
          subtitle={selectedModalData.subtitle}
          duration={selectedModalData.duration}
          description={selectedModalData.description}
          image={selectedModalData.image}
          icon={selectedModalData.icon}
          metric={selectedModalData.metric}
          label={selectedModalData.label}
          link={selectedModalData.link}
          technologies={selectedModalData.technologies}
          points={selectedModalData.points}
        />
      )}
    </div>
  );
};

export default Home;
