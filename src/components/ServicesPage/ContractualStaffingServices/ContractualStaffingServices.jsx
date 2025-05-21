import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './ContractualStaffingServices.css';
// import FAQSITRecruitment from '../ITRecruitmentAgenciesInDubai/FAQSITRecruitment';
import img from './../../../assets/images/About/Banner.jpg';

const ContractualStaffingServices = () => {
    const [openIndex, setOpenIndex] = useState(null);
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

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  const ChooseContractStaffing = [
    {
      heading: 'Flexibility',
      text: 'One of the biggest advantages of contractual staffing is the flexibility it offers. Companies can bring in skilled professionals on a short-term basis to handle specific tasks, meet tight deadlines, or cover for an absent employee. This ensures that projects are completed without affecting the overall productivity of the organization.',
    },
    {
      heading: 'Cost Efficiency',
      text: 'Hiring permanent employees comes with long-term financial commitments, such as salaries, benefits, and training costs. With contractual staffing, businesses can avoid these expenses. Instead, they can hire employees on a project or seasonal basis, making it a more cost-effective solution.',
    },
    {
      heading: 'Access to Specialized Talent',
      text: 'Through contractual staffing, companies gain access to highly skilled professionals who may not be available for full-time positions. This is especially useful for projects that require niche expertise or advanced technical skills. Contractual workers bring in fresh perspectives and can immediately start adding value.',
    },
    {
      heading: 'Reduced Risk',
      text: "Contractual staffing reduces the risks associated with long-term employment. If a business's needs change or if a contractor's performance doesn’t meet expectations, the contract can simply not be renewed. This provides a layer of flexibility that permanent hiring doesn’t offer.",
    },
    {
      heading: 'Scalability',
      text: 'Whether your business is growing rapidly or you’re facing a temporary surge in demand, contractual staffing services offer scalability. You can quickly hire more talent without the need for lengthy recruitment processes or onboarding procedures. This helps businesses remain agile and responsive to market changes.',
    },
  ];

  const industries = [
    {
      title: 'IT and Technology',
      desc: 'The tech industry, with its constant innovation, thrives on contractual staffing. IT companies frequently hire contractors for short-term projects like software development or cyber security.',
    },
    {
      title: 'Healthcare',
      desc: 'The healthcare industry often hires contract nurses, technicians, and administrative staff to deal with workforce shortages, especially during busy periods like flu season.',
    },
    {
      title: 'Manufacturing',
      desc: 'Manufacturing companies frequently rely on contract workers during peak production times, such as around the holidays or during major product launches.',
    },
    {
      title: 'Creative Industries',
      desc: 'From graphic designers to content writers, the creative industries heavily rely on freelancers and contract employees to meet project-based demands.',
    },
  ];

  const FutureofContractStaffing = [
    {
      heading: 'Global Trends in Staffing',
      text: 'The global workforce is shifting towards more flexible employment arrangements. As businesses adapt to changing economic conditions, the demand for contractual staffing is only set to grow.',
    },
    {
      heading: 'The Role of Technology in Contractual Staffing',
      text: 'Technology is making it easier for businesses to manage contractual workers. With tools for project management, remote collaboration, and performance tracking, companies can seamlessly integrate contractors into their operations.',
    },
    {
      heading: 'Evolving Workplace Culture and Flexible Work',
      text: `As the concept of work evolves, so does the attitude toward employment. Flexible work arrangements, including contractual staffing, are becoming the norm, offering benefits for both companies and employees.

Conclusion:

Contractual staffing is more than just a trend—it’s a strategic approach to workforce management. By leveraging our contractual staffing services, businesses can maintain operational efficiency, reduce costs, and adapt to market changes swiftly. Whether you're looking to hire for a short-term project or need seasonal staff, our services offer the perfect solution.`,
    },
  ];

  const FAQS = [
    {
      heading: 'What is difference between permanent and contractual staffing?',
      text: 'Permanent staffing involves long-term employment, while contractual staffing is for a specific period or project.',
    },
    {
      heading:
        'How can a company ensure the legal aspects of contractual staffing are met?',
      text: 'By adhering to labor laws, drafting clear contracts, and consulting with legal professionals, companies can ensure compliance.',
    },
    {
      heading: 'What are the best practices for managing contractual workers?',
      text: 'Clear communication , setting expectations, regular performance montioring and creating a positive work environment are key .',
    },
    {
      heading: 'Which industries use contractual staffing the most?',
      text: 'Industries such as IT ,healthcare,manufacturing and creative services heavily rely on contractual staffing.',
    },
    {
      heading: 'How is technology shaping the future of contractual staffing?',
      text: 'Technology is making it easier to manage contractual staff through tools like project management software and remote work platforms.',
    },
  ];
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

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
            Contractual Staffing Services
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="contactualStaffingmain px-4 py-12 w-full mx-auto space-y-16">
        <section className="space-y-6 w-full text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Contract Staffing Services: The Smart Solution for Flexible
            Workforce Needs
          </h2>
          <article className="space-y-4 text-justify">
            <p>
              In today's fast-paced business environment, companies need to
              adapt quickly to the changing demands of the market. One of the
              most effective ways to achieve this flexibility is through{' '}
              <strong>contractual staffing services</strong>.
            </p>
            <p>
              This staffing model allows organizations to scale their workforce
              up or down based on project requirements, seasonal demands, or
              temporary business needs without the long-term commitment of
              permanent hires.
            </p>
          </article>

          <article className="mt-10">
            <h3 className="OurCSMPForHeading text-3xl text-center font-semibold mb-4">
              Why To Choose Contract Staffing Services?
            </h3>
            <ul className="space-y-4">
              {ChooseContractStaffing.map((val, index) => (
                <li
                  key={index}
                  className="ChooseListItem bg-blue-50 p-4 rounded-md shadow-sm"
                >
                  <p>
                    <strong>
                      {index + 1}. {val.heading}:
                    </strong>{' '}
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="w-full gap-8 items-center">
          <h3 className="OurCSMPForHeading text-3xl text-black text-center font-semibold mb-2">
            Our Contract Staffing Services
          </h3>
          <div className="flex w-full ">
            <div className="space-y-4 w-1/2 text-gray-700">
              <p className="OurContractStaffingP">
                We specialize in offering contractual staffing services that
                meet the unique requirements of your business. Our team of
                experienced recruiters understands the complexities of different
                industries and can provide you with qualified professionals who
                match your project’s needs.
              </p>
              <p className="OurContractStaffingP">
                Whether you need short-term assistance or longer project-based
                engagements, we’ve got you covered.
              </p>
              <p className="OurContractStaffingP">
                By partnering with us, you can enjoy the benefits of:
              </p>
              <ul className="OurContractStaffingP list-disc list-inside">
                <li>Access to a diverse talent pool</li>
                <li>
                  Quick staffing solutions to meet urgent project deadlines
                </li>
                <li>Cost-effective hiring without the long-term commitments</li>
              </ul>
              <p className="OurContractStaffingP">
                We are dedicated to helping your business thrive by providing
                the right talent, at the right time, and on the right terms. Our
                solutions ensure you stay focused on your core business
                operations while we handle the staffing needs.
              </p>
            </div>

            <div>
              <img
                src="https://mdglobalhr.com/wp-content/uploads/2024/10/2147650887-1.jpg"
                alt="Contract Staffing"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="text-center  w-full">
          <h3 className="OurCSMPForHeading w-full text-gray-700 text-3xl font-semibold">
            Industries That Benefit from Contractual Staffing
          </h3>
          {/* Content can be added here later */}
          <div className="flex  w-full gap-12 ">
            <div className="w-1/2">
              {industries.map((industry, index) => (
                <div key={index} className="industriesMP">
                  <h4 className="font-bold text-left industriesMPHeading text-xl text-gray-600">
                    {industry.title}
                  </h4>
                  <p className="text-gray-600 text-left">{industry.desc}</p>
                </div>
              ))}
            </div>
            <form className="w-1/2 space-y-4 bg-white shadow-md rounded-xl p-6">
              <input
                type="text"
                placeholder="Name"
                className="ContractualStaffingInput w-[90%] border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="ContractualStaffingInput w-[90%] border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="ContractualStaffingInput w-[90%] border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              />

              <textarea
                placeholder="Message"
                rows="5"
                className="ContractualStaffingInput w-[90%] border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none"
              />

              <button
                type="submit"
                className="ContractualStaffingInput bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>
        <section className="w-full ">
          <h2 className="OurCSMPForHeading text-center text-3xl font-medium text-gray-600 ">
            The Future of Contract Staffing Services
          </h2>
          <ul>
            {FutureofContractStaffing.map((val, index) => {
              return (
                <li key={index}>
                  <h2 className="font-bold text-lg">{val.heading}</h2>
                  <p className="text-gray-600">{val.text}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="w-full">
          <h2 className="OurCSMPForHeading text-center text-3xl font-medium text-gray-600">
            FAQ's on Contract Staffing Services
          </h2>
          <div className="faq-container px-4 md:px-8 lg:px-16 py-10 text-gray-800">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`faq-item border rounded-xl p-4 mb-4 cursor-pointer bg-white shadow-sm ${
                  openIndex === index ? 'border-black' : 'border-gray-300'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center text-gray-800 font-medium">
                  <span>{`Q ${index + 1}. ${faq.heading}`}</span>
                  <span className="text-lg">
                    {openIndex === index ? '▲' : '▼'}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer mt-3 text-gray-700">
                    {faq.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ContractualStaffingServices;
