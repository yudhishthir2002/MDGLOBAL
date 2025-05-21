import React from 'react';
import './OurVerticals.css';
import bannerImage from './../../../assets/images/About/Banner.jpg';
import { motion } from 'framer-motion';

const OurVerticals = () => {
  const sectors = [
    {
      id: 'bfsi-card',
      title: 'BFSI (Banking, Financial Services & Insurance)',
      description:
        'MD Global HR Consulting LLC specializes in delivering top-tier talent to the BFSI sector across India, the UAE, and international markets. Our expertise spans retail and corporate banking, insurance operations, fintech, credit underwriting, risk analysis, and compliance. With a strong talent network that includes CFA-certified analysts and digital finance professionals, we ensure seamless placements tailored to client needs and industry standards.',
      keywords:
        'BFSI recruitment agency India, banking jobs UAE, financial services staffing, insurance job consultants',
    },
    {
      id: 'fmcg-card',
      title: 'FMCG (Fast-Moving Consumer Goods)',
      description:
        'Our recruitment solutions in the FMCG sector are designed for agility and precision. We support top consumer goods brands in hiring across sales, marketing, logistics, supply chain, production, and brand management. Our candidate pool comprises industry-ready professionals who help businesses accelerate their go-to-market strategies and maintain supply chain excellence.',
      keywords:
        'FMCG recruitment India, sales and marketing hiring, consumer goods jobs UAE, FMCG manpower consultants',
    },
    {
      id: 'healthcare-card',
      title: 'Healthcare',
      description:
        'MD Global HR Consulting LLC is a trusted partner in healthcare staffing for hospitals, clinics, diagnostic centers, and pharmaceutical companies. We provide licensed and experienced doctors, nurses, technicians, pharmacists, and healthcare administrators. Our recruitment process emphasizes credential verification, skill matching, and compliance with regional medical licensing norms.',
      keywords:
        'healthcare recruitment agency India, nurse jobs abroad, hospital staffing UAE, medical manpower consultants',
    },
    {
      id: 'automobile-card',
      title: 'Automobile',
      description:
        'We deliver specialized recruitment solutions for the automobile industry, including manufacturing, R&D, and electric vehicle segments. Our services cover the hiring of automotive engineers, CAD designers, production staff, service technicians, and quality inspectors. MD Global supports OEMs and Tier-1/2 suppliers with highly skilled manpower across India and the GCC.',
      keywords:
        'automobile recruitment India, auto manufacturing jobs, automotive engineers UAE, EV industry staffing solutions',
    },
    {
      id: 'manufacturing-card',
      title: 'Manufacturing',
      description:
        'Our end-to-end staffing services for the manufacturing sector support hiring for production units, factories, and industrial projects. From machine operators to supervisors and engineers, we deliver skilled manpower ready to meet bulk and project-based requirements both in India and overseas. We ensure operational efficiency, safety compliance, and timely workforce deployment.',
      keywords:
        'manufacturing manpower agency India, factory job consultants, industrial recruitment UAE, skilled workers overseas',
    },
    {
      id: 'it-card',
      title: 'Information Technology (IT)',
      description:
        'MD Global HR Consulting LLC empowers technology-driven businesses by connecting them with top IT talent. We recruit software developers, data scientists, UI/UX designers, DevOps engineers, and cybersecurity experts for roles across India, the UAE, USA, and other global hubs. Our staffing solutions cater to both permanent and contract-based hiring, supporting rapid tech team scaling.',
      keywords:
        'IT recruitment agency India, software developer jobs UAE, tech staffing company, remote IT jobs placement',
    },
  ];

  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <>
      <header className="our-verticals-header">
        <motion.section
          className="our-verticals-banner"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="our-verticals-overlay"></div>
          <motion.h1 className="our-verticals-title" variants={headerVariants}>
            OUR VERTICALS
          </motion.h1>
          <motion.div
            className="our-verticals-divider"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main>
        <div className="our-verticals-container">
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              className={`our-verticals-card ${sector.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="our-verticals-card-title">{sector.title}</h2>
              <p className="our-verticals-card-description">
                {sector.description}
              </p>
              <p className="our-verticals-card-keywords">
                <strong>Keywords:</strong> {sector.keywords}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default OurVerticals;
