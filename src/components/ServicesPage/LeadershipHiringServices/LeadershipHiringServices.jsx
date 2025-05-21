import React from 'react';
import { motion } from 'motion/react';
import './LeadershipHiringServices.css';
import ITRecruitmentForm from '../ITRecruitmentAgenciesInDubai/ITRecruitmentForm';
import img from './../../../assets/images/About/Banner.jpg';

const LeadershipHiringServices = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: 'beforeChildren' },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 },
    },
  };

  const ChooseMD = [
    {
      heading: 'Specialization in Leadership Hiring',
      text: ' At MD Global HR Consulting, leadership hiring is more than just filling a position. It’s about identifying individuals who can drive businesses forward, enhance growth, and make strategic decisions. MD Global’s expertise lies in finding the right talent for C-suite roles, directors, and senior managers, ensuring the perfect fit for each client’s culture and business needs.',
    },
    {
      heading: 'Expanding Reach Across India and UAE',
      text: 'With its base in Faridabad, India, MD Global has successfully expanded its recruitment services across UAE and Globally. The firm’s extensive network and deep understanding of various industries make it the go-to recruitment partner for businesses nationwide.',
    },
    {
      heading: 'The Importance of Leadership Hiring in Today’s Market',
      text: ` In an era where leadership can make or break a business, leadership hiring has become a critical factor for success. A company's leaders define its vision, create strategies, and motivate the team. Therefore, getting the right leadership talent is essential, and MD Global HR Consulting ensures that businesses can rely on the best people for these key positions.`,
    },
  ];

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Leadership Hiring Services
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="LeadershipMain bg-gray-100 px-4 py-10 w-full mx-auto">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Are you Looking for Leadership Hiring Services?
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                MD Global Human Resource Consulting is here to help you find top
                talent for your business.
              </p>
              <p>
                In today's competitive market, businesses face the challenge of
                finding top talent, especially for leadership positions.
              </p>
              <p>
                This is where MD Global HR Consulting comes in. Based in India
                and expanding globally, MD Global is a premier recruitment
                agency known for excellence in leadership hiring and recruitment
                services.
              </p>
              <p>
                Our team understands the importance of placing the right
                leaders. We carefully select candidates who align with your
                business goals. Our process is efficient and results-driven.
              </p>
              <p>
                With years of experience, MD Global HR Consulting works with
                startups and established companies alike, providing tailored
                solutions for every client.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://mdglobalhr.com/wp-content/uploads/2024/10/Leadership-hiring.jpeg"
              alt="Leadership hiring"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>
        <section>
          <h2 className="text-center text-3xl font-medium text-gray-600 ">
            Why Choose MD Global HR Consulting for Leadership Hiring Services?
          </h2>
          <ul className="w-full">
            {ChooseMD.map((val, index) => {
              return (
                <li key={index}>
                  <h4 className="text-2xl font-medium ">{val.heading}</h4>
                  <p className="">{val.text}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <ITRecruitmentForm />
        </section>
      </main>
    </>
  );
};

export default LeadershipHiringServices;
