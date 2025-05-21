import React from 'react';
import './JobConsultancyInDubaiform.css'

const JobConsultancyInDubaiForm = () => {
  return (
    <>
      <section className="JobConsultancyInDubaiFormSection max-w-full mx-auto px-4 py-8">
        <h1 className="JobConsultancyInDubaiFormHeading text-3xl font-bold text-gray-800 mb-8">
          <span>Job Consultancy in Dubai: </span>
          <span>Unlock Lucrative Opportunities with This Insider Help!</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <article className="JobConsultancyInDubaiFormHeading md:w-1/2 text-gray-600">
            <p className="mb-4">
              Getting a trusted and reliable Job consultancy in Dubai was
              difficult, but not anymore. If you are looking to get services
              from a recruitment consultancy in Dubai, then MD Global Human
              Resource Consultancy is here to fulfill your requirements.
            </p>
            <p className="mb-4">
              Dubai, one of the seven emirates of the United Arab Emirates, is a
              global city and a business hub. It’s known for its modern
              architecture, luxury shopping, and vibrant nightlife. But beyond
              the glitz and glamour, Dubai is also a promising destination for
              job seekers from around the world.
            </p>
            <p className="mb-4">
              This is where job consultancies in Dubai come into play.
            </p>
            <p className="mb-4">
              Dubai's job market is vibrant and filled with opportunities, but
              navigating it successfully requires expert guidance.
            </p>
            <p className="mb-4">
              That's where MD Global Human Resource Consulting LLC comes in. As
              a leading recruitment agency in Dubai, we are dedicated to helping
              job seekers and employers connect seamlessly.
            </p>
          </article>
          <form
            action="#"
            className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-6"
          >
            <div className="JobConsultancyInDubaiFormHeading flex items-center space-x-4">
              <label className="w-1/3 text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="JobConsultancyInDubaiFormHeading flex items-center space-x-4">
              <label className="w-1/3 text-gray-700 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="JobConsultancyInDubaiFormHeading flex items-center space-x-4">
              <label className="w-1/3 text-gray-700 font-semibold">Phone</label>
              <input
                type="tel"
                placeholder="E.g., +1 300 400 5000"
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="JobConsultancyInDubaiFormHeading flex items-center space-x-4">
              <label className="w-1/3 text-gray-700 font-semibold">
                Upload File
              </label>
              <div className="w-2/3">
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-500 text-sm">No file chosen</span>
              </div>
            </div>
            <div className="JobConsultancyInDubaiFormHeading flex items-start space-x-4">
              <label className="w-1/3 text-gray-700 font-semibold pt-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="JobConsultancyInDubaiFormHeading w-2/3 p-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="JobConsultancyInDubaiFormHeading w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md"
              onClick={() => {
                preventDefault();
              }}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default JobConsultancyInDubaiForm;
 