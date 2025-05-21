import React from 'react';
import './BenefitsJobConsultancy.css';

const BenefitsJobConsultancy = () => {
  const BenefitsJobConsultancy = [
    {
      title: '1. Access to Exclusive Job Opportunities',
      description:
        'Partnering with a job consultancy like MD Global opens doors to job opportunities that are not always advertised publicly. Our extensive network ensures you have access to some of the best positions in Dubai.',
    },
    {
      title: '2. Personalized Career Guidance',
      description:
        'Our consultants provide personalized career advice, helping you understand your strengths and areas for improvement. This tailored approach ensures you are well-prepared for your job search.',
    },
    {
      title: '3. Time and Stress Reduction',
      description:
        'Job hunting can be a time-consuming and stressful process. With MD Global, you can focus on your current responsibilities while we handle the search, matching you with suitable positions efficiently.',
    },
    {
      title: '4. Enhanced Job Application Materials',
      description:
        'We assist in crafting compelling resumes and cover letters that stand out to potential employers, increasing your chances of securing interviews.',
    },
    {
      title: '5. Interview Coaching',
      description:
        'Our interview preparation services ensure you approach each interview with confidence, equipped with the skills and knowledge to impress prospective employers.',
    },
  ];

  return (
    <section className="BenefitsJobConsultancySection py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="BenefitsJobConsultancyHeading text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Benefits of Job Consultancy in Dubai
      </h2>
     
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
      <div className="w-full lg:w-1/2">
          <img
            src="https://mdglobalhr.com/wp-content/uploads/2025/01/Job-Consultancy-In-Dubai.jpg"
            alt="Job Consultancy in Dubai"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          {BenefitsJobConsultancy.map((benefit, index) => (
            <div key={index} className="benefits flex items-start space-x-2">
              
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BenefitsJobConsultancy;
