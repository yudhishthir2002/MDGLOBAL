import React, { useRef } from 'react';
import './BlueCollarStaffing.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import blueCollarImg from './../../../assets/bluecollerImage/whatisBlueColler.jpeg';
import ChooseBlueColler from './../../../assets/bluecollerImage/ChooseBlueColler.jpeg';
import BenefitsBlueColler from './../../../assets/bluecollerImage/BenefitsBlueColler.jpeg';
import blueCollerUAE from './../../../assets/bluecollerImage/blueCollerUAE.jpeg';
import img from './../../../assets/images/About/Banner.jpg';

const BlueCollarStaffing = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const SetsUsApart = [
    {
      heading: 'Pan-India and UAE Sourcing Network',
      text: 'With recruitment hubs across India and an extensive partner network in the UAE, we ensure quick availability of manpower tailored to your job site and requirements.',
    },
    {
      heading: 'Skill & Background Verification',
      text: 'All candidates go through rigorous screening, trade tests (if needed), and background checks before deployment—ensuring reliability and safety.',
    },
    {
      heading: 'Legal Compliance',
      text: 'We handle visa processing, medical checks, labor law documentation, and onboarding compliance for UAE-based roles. In India, we ensure adherence to regional labor norms and wage structures.',
    },
    {
      heading: 'Flexible Deployment Models',
      text: 'We offer contract-based, project-based, or full-time manpower solutions based on your timelines and budget.',
    },
    {
      heading: 'On-Time Workforce Mobilization',
      text: 'We know how critical timelines are in operational roles. Our team ensures fast mobilization without compromising on quality or compliance.',
    },
  ];

  const RolesWeProvide = [
    'Drivers (Light & Heavy Vehicle)',
    'HVAC & Electrical Technicians',
    'Machine Operators & CNC Technicians',
    'Welders, Plumbers, Fitters, Electricians',
    'Masons, Painters, Carpenters',
    'Warehouse & Packaging Staff',
    'Helpers, Cleaners, Janitors',
    'Construction Labourers',
    'Loading & Unloading Crew',
  ];

  const IndustriesWeServe = [
    'Manufacturing & Production',
    'Construction & Infrastructure',
    'Oil & Gas',
    'Transport & Logistics',
    'Facility Management',
    'Hospitality & Maintenance',
    'Retail & Warehousing',
    'Utilities & Municipal Services',
  ];

  const UAEservices = [
    'Visa and labor contract processing',
    'Accommodation and transportation coordination',
    'Arabic-speaking workers when needed',
    'Compliance with UAE labor law and WPS (Wage Protection System)',
  ];

  const Benefits = [
    {
      heading: 'Reduced Hiring Time and HR Overheads',
      text: 'Outsourcing your blue collar workforce needs to MD Global HR Consulting LLC streamlines the recruitment process, saving you time and internal resources. Our pre-screened candidate database, quick turnaround times, and efficient onboarding processes help reduce hiring cycles and lower your recruitment and HR overheads.',
    },
    {
      heading: 'Improved Workforce Productivity and Reliability',
      text: 'We deploy trained, job-ready personnel who contribute to your operations from day one. Our workers are selected based on your specific requirements, ensuring minimal downtime, greater task accuracy, and dependable performance.',
    },
    {
      heading: 'Legally Compliant and Transparent Processes',
      text: 'All our staffing services follow strict compliance with local labor laws and industry-specific regulations. From contract management to payroll and statutory benefits, we handle it all with full transparency—eliminating legal risks and ensuring ethical practices.',
    },
    {
      heading: 'Access to a Vast Talent Pool of Trained Workers',
      text: 'MD Global HR Consulting LLC maintains a wide-reaching network of skilled and semi-skilled blue collar professionals across Oman and the region. Whether you require drivers, warehouse workers, electricians, cleaners, or factory staff, we provide access to a ready talent pool that meets your workforce requirements efficiently.',
    },
  ];

  // Scroll animation refs and transforms
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: section4Ref,
    offset: ['start end', 'end start'],
  });

  const imageX1 = useTransform(scrollYProgress1, [0, 1], ['10vw', '-10vw']);
  const contentX1 = useTransform(scrollYProgress1, [0, 1], ['-10vw', '10vw']);
  const imageX2 = useTransform(scrollYProgress2, [0, 1], ['10vw', '-10vw']);
  const contentX2 = useTransform(scrollYProgress2, [0, 1], ['-10vw', '10vw']);
  const imageX3 = useTransform(scrollYProgress3, [0, 1], ['10vw', '-10vw']);
  const contentX3 = useTransform(scrollYProgress3, [0, 1], ['-10vw', '10vw']);
  const imageX4 = useTransform(scrollYProgress4, [0, 1], ['10vw', '-10vw']);
  const contentX4 = useTransform(scrollYProgress4, [0, 1], ['-10vw', '10vw']);

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
      Blue Collar Staffing Solutions
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="bcs-main">
        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl md:text-3xl font-bold">
              Reliable Workforce Solutions for Operational Efficiency
            </h2>
            <p className="text-gray-700">
              At MD Global HR Consultancy LLC, we specialize in blue collar
              staffing services that power critical industries with skilled and
              semi-skilled workers across India and the UAE. Whether you're
              running a manufacturing unit, construction site, logistics
              warehouse, or industrial facility, our workforce solutions help
              you meet operational demands with discipline, efficiency, and
              reliability.
            </p>
            <p className="text-gray-700">
              In today’s competitive and fast-paced environment, organizations
              need a dependable blue-collar workforce to maintain productivity
              and meet deadlines. We help businesses build that
              workforce—recruiting individuals who are not only technically
              capable but also culturally aligned and ready to perform from day
              one.
            </p>
          </article>
        </section>

        <motion.section className="bcs-section" ref={section1Ref}>
          <div className="w-full flex flex-col md:flex-row items-center">
            <motion.div
              className="bcs-image-container w-full md:w-1/2 mb-4 md:mb-0 md:pr-4"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              style={{ x: imageX1 }}
            >
              <img
                src={blueCollarImg}
                alt="Blue collar workers at a construction site"
                className="w-full h-auto max-h-[50vh] rounded-lg shadow-md object-cover"
              />
            </motion.div>
            <motion.article
              className="bcs-article w-full md:w-1/2"
              style={{ x: contentX1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                What is Blue Collar Staffing?
              </h2>
              <p className="text-gray-700 bcs-p">
                Blue collar staffing involves sourcing and deploying workers for
                hands-on roles that require physical labor, specific trade
                skills, or technical know-how. These include workers in sectors
                such as construction, manufacturing, logistics, facility
                management, transportation, and utilities.
              </p>
              <p className="text-gray-700 bcs-p">
                At MD Global, we streamline the entire blue collar recruitment
                process—from sourcing and screening to onboarding and
                compliance—so you get workers who are ready to contribute
                without delay.
              </p>
              <p className="text-gray-700 bcs-p">
                MD Global HR Consulting LLC delivers reliable blue-collar
                staffing for construction, logistics, and maintenance. We
                provide skilled and semi-skilled workers tailored to your
                industry. Fast deployment, verified candidates, and flexible
                hiring across Oman and the Gulf.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <motion.section className="bcs-section" ref={section2Ref}>
          <h2 className="text-2xl text-center md:text-3xl font-bold">
            Why Choose MD Global for Blue Collar Staffing?
          </h2>
          <p className="text-gray-700 text-center">
            Our strength lies in our vast recruitment network, stringent vetting
            process, and deep understanding of industry-specific labor needs.
            With sourcing hubs across India, and an on-ground presence in the
            UAE, we ensure rapid mobilization of blue-collar workers for
            short-term, long-term, or project-based roles.
          </p>
          <div className="w-full flex flex-col md:flex-row items-center">
            <motion.article
              className="bcs-article w-full md:w-1/2 mb-4 md:mb-0 md:pr-4"
              style={{ x: contentX2 }}
            >
              <ul className="bcs-list">
                {SetsUsApart.map((val, index) => (
                  <li key={index} className="bcs-list-item">
                    <h3 className="font-semibold text-lg">
                      {index + 1}. {val.heading}
                    </h3>
                    <p className="text-gray-700">{val.text}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
            <motion.div
              className="bcs-image-container w-full md:w-1/2 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              style={{ x: imageX2 }}
            >
              <img
                src={ChooseBlueColler}
                alt="Team of blue collar workers"
                className="w-full h-[80vh] rounded-lg shadow-md object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        <section className="bcs-section">
          <article className="bcs-article w-full">
            <h2 className="text-2xl md:text-3xl text-center font-bold">
              Roles We Commonly Provide
            </h2>
            <p className="text-gray-700 text-center">
              We supply reliable manpower for a wide range of blue-collar jobs,
              including but not limited to:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 bcs-roles-grid">
              {[
                {
                  role: 'Drivers (Light & Heavy Vehicle)',
                  icon: 'ri-steering-2-line',
                },
                { role: 'HVAC & Electrical Technicians', icon: 'ri-plug-line' },
                {
                  role: 'Machine Operators & CNC Technicians',
                  icon: 'ri-settings-3-line',
                },
                {
                  role: 'Welders, Plumbers, Fitters, Electricians',
                  icon: 'ri-hammer-line',
                },
                {
                  role: 'Masons, Painters, Carpenters',
                  icon: 'ri-paint-brush-line',
                },
                {
                  role: 'Warehouse & Packaging Staff',
                  icon: 'ri-archive-line',
                },
                { role: 'Construction Labourers', icon: 'ri-building-2-line' },
                { role: 'Loading & Unloading Crew', icon: 'ri-truck-line' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bcs-role-card bg-gray-50 rounded-lg shadow-sm p-4 flex flex-col items-center text-center w-56 h-20 hover:shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <i className={`${item.icon} text-3xl text-blue-600 mb-2`}></i>
                  <p className="text-gray-700 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bcs-section">
          <h2 className="text-2xl text-center md:text-3xl font-bold">
            Industries We Serve
          </h2>
          <p className="text-gray-700 text-center">
            Our blue-collar staffing solutions support a broad spectrum of
            industries:
          </p>
          <article className="bcs-article">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 bcs-industries-grid">
              {[
                {
                  industry: 'Manufacturing & Production',
                  icon: 'ri-building-4-line',
                },
                {
                  industry: 'Construction & Infrastructure',
                  icon: 'ri-building-2-line',
                },
                { industry: 'Oil & Gas', icon: 'ri-gas-station-line' },
                { industry: 'Transport & Logistics', icon: 'ri-truck-line' },
                { industry: 'Facility Management', icon: 'ri-building-line' },
                {
                  industry: 'Hospitality & Maintenance',
                  icon: 'ri-hotel-line',
                },
                { industry: 'Retail & Warehousing', icon: 'ri-store-line' },
                {
                  industry: 'Utilities & Municipal Services',
                  icon: 'ri-lightbulb-line',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bcs-industry-card w-56 bg-gray-50 rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <i className={`${item.icon} text-3xl text-blue-600 mb-2`}></i>
                  <p className="text-gray-700 text-sm font-medium">
                    {item.industry}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <motion.section
          className="bcs-section w-full px-4 py-8"
          ref={section3Ref}
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
            Benefits of Our Blue Collar Staffing Solutions
          </h2>
          <article className="bcs-article flex flex-col md:flex-row w-full gap-6">
            <motion.ul
              className="bcs-list-bulleted w-full md:w-1/2 flex justify-center items-center flex-col gap-4"
              style={{ x: contentX3 }}
            >
              {Benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="bcsBenefitsMP text-center md:text-left"
                >
                  <h3 className="font-medium text-lg text-gray-700">
                    {index + 1}. {benefit.heading}
                  </h3>
                  <p className="text-gray-600">{benefit.text}</p>
                </li>
              ))}
            </motion.ul>
            <motion.div
              className="bcs-image-container w-full md:w-1/2 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              style={{ x: imageX3 }}
            >
              <img
                src={BenefitsBlueColler}
                alt="Team of blue collar workers"
                className="w-full h-64 md:h-[80vh] rounded-lg shadow-md object-cover"
              />
            </motion.div>
          </article>
        </motion.section>

        <motion.section
          className="bcs-section w-full px-4 py-8"
          ref={section4Ref}
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
            Blue Collar Staffing in the UAE
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="bcs-image-container w-full md:w-1/2 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              style={{ x: imageX4 }}
            >
              <img
                src={blueCollerUAE}
                alt="Team of blue collar workers"
                className="w-full h-64 md:h-auto rounded-lg shadow-md object-cover"
              />
            </motion.div>
            <motion.article
              className="bcs-article w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4"
              style={{ x: contentX4 }}
            >
              <p className="text-gray-900 text-lg font-medium BlueCollarUAE text-center md:text-left">
                For UAE-based clients, we offer end-to-end workforce solutions
                including:
              </p>
              <ul className="bcs-list-bulleted BlueCollarUAE list-disc pl-5 text-gray-700">
                {UAEservices.map((service, index) => (
                  <li key={index}>
                    {index + 1}. {service}
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 text-lg font-medium BlueCollarUAE text-center md:text-left">
                Our local team ensures all deployment meets the highest
                standards of compliance and professionalism.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl text-center md:text-3xl font-medium">
              Build Your Operations with the Right People
            </h2>
            <p className="text-gray-800 bcs-p">
              At MD Global HR Consultancy, we don’t just fill blue-collar
              roles—we build dependable, productive workforces that form the
              backbone of your business. With a focus on quality, compliance,
              and speed, we help you maintain operational excellence while
              keeping your business agile and competitive.
            </p>
            <p className="text-gray-800 bcs-p">
              Contact MD Global HR Consultancy LLC today to discuss your
              manpower requirements and learn how our blue-collar staffing
              services can help your business thrive.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default BlueCollarStaffing;