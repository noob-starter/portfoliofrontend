import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';
import Button from '../components/Button';
import Card from '../components/Card';
import MapIcon from '../assets/icons/map.png';
import { fetchContacts } from '../fetches/fetchContacts';
import { fetchAddresses } from '../fetches/fetchAddresses';

const Contact = () => {
  const socialMediaPlatforms = ['LinkedIn', 'GitHub', 'Twitter', 'Instagram'];
  
  const [loading, setLoading] = useState(true);
  const [contactInfo, setContactInfo] = useState([]);
  const [addressInfo, setAddressInfo] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1000));

      // Fetch contacts and addresses with minimum loading time
      const [contacts, addresses] = await Promise.all([
        fetchContacts(),
        fetchAddresses(),
        minLoadingTime
      ]);

      // Set the contact and address information
      setContactInfo(contacts);
      setAddressInfo(addresses);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.secondary }}>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 pb-16">
        <div className="text-center z-10">
          <motion.h1 
            className="text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's connect and discuss how we can work together to bring your ideas to life.
          </motion.p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center w-full py-16">
        <div className="w-[90%] mx-auto flex flex-col gap-16">

          <section className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
            {[
              ...contactInfo.filter(contact => 
                !socialMediaPlatforms.includes(contact.title)
              ),
              ...addressInfo
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  {...item}
                />
              </motion.div>
            ))}
          </section>

           <div className="h-6"></div>

          {/* Social Media Section */}
          <motion.section 
            className="p-12" 
            style={{ backgroundColor: colors.background.secondary }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-800 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect on Social Media
            </motion.h2>
            
            <div className="h-8"></div>
            
            <motion.p 
              className="text-xl text-gray-600 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Follow me on social platforms to stay updated with my latest work and insights.
            </motion.p>
            
            <div className="h-12"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {contactInfo
                .filter(contact => 
                  socialMediaPlatforms.includes(contact.title)
                )
                .map((social, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Button
                      href={social.url}
                      content={social.title}
                      icon={<img src={social.image} alt={social.title} className="w-8 h-8" />}
                      className="py-8 px-6"
                    />
                  </motion.div>
                ))}
            </div>
          </motion.section>

          {/* Map Section */}
          <motion.section 
            className="p-4 flex items-center justify-center" 
            style={{ backgroundColor: colors.background.secondary }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src={MapIcon} alt="Location Map" className="w-500 h-250" />
              </motion.div>
              <motion.p 
                className="text-8xl text-gray-black text-bold shine-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {contactInfo.find(contact => contact.title === 'Location')?.subtitle || 'Based in India'}
              </motion.p>
              <motion.p 
                className="text-white text-bold text-2xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                * Available for remote work worldwide
              </motion.p>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Spacer */}
      <div className="h-24"></div>
    </div>
  );
};

export default Contact;

