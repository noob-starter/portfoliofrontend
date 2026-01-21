import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { colors } from '../theme/colors';
import { fetchProjects } from '../fetches/fetchProjects';
import { SOCIAL_LINKS } from '../config/api';
import collaborationIcon from '../assets/icons/collaboration.png';

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1000));

      // Fetch projects with minimum loading time
      const [projectsData] = await Promise.all([
        fetchProjects(),
        minLoadingTime
      ]);

      setProjects(projectsData);
      setLoading(false);
    };

    loadData();
  }, []);

  // Handler to open modal with project data
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.tertiary }}>
      <div className="h-24"></div>

      <div className="flex flex-col items-center justify-center w-full gap-24 py-16">
        <div className="w-[75%] mx-auto flex flex-col gap-24">
          <motion.section 
            className="w-full flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl font-bold text-gray-800 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 w-[60%] text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our portfolio of innovative solutions and successful implementations across various domains
            </motion.p>
          </motion.section>

          {/* Projects Grid with Cards */}
          <motion.section 
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-6 justify-center items-stretch">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    {...project} 
                    useModal={true}
                    onOpenModal={() => handleOpenModal(project)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="w-full flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-12 text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl font-bold text-gray-800" 
                style={{ marginBottom: '48px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Have a Project in Mind?
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-justify text-xl max-w-2xl mx-auto" 
                style={{ marginBottom: '64px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                  Let's collaborate to bring your boldest ideas to life. We're energized by the opportunity to dive
                  into fresh, complex challenges whether it's pioneering innovative solutions, tackling intricate
                  problems, or pushing the boundaries of what's possible. Share your vision, and together we'll craft
                  something extraordinary. What's on your mind?
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  href={SOCIAL_LINKS.github} 
                  content="Start a Project"
                  icon={<img src={collaborationIcon} alt="collaboration" className="w-8 h-8" />}
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Spacer */}
          <div className="h-24"></div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          duration={selectedProject.duration}
          description={selectedProject.description}
          image={selectedProject.image}
          link={selectedProject.link}
          linkText="View Project Details"
          points={selectedProject.points || []}
          technologies={selectedProject.technologies || []}
        />
      )}
    </div>
  );
};

export default Project;
