import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Homepage = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-2">
          🎉 Welcome to Nepali Mela UK 🎉
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
      </div>
      
      <div className="mt-8 space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-600 mb-3">🇬🇧 About Nepali Mela UK</h2>
          <p className="text-lg text-gray-700">
            Nepali Mela UK is the premier cultural festival celebrating Nepali heritage in the United Kingdom. 
            This vibrant event brings together the Nepali community and friends to showcase authentic cuisine, 
            traditional performances, and entrepreneurial spirit through various stalls and exhibitions.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-orange-600 mb-3">🏪 Nepali Entrepreneur Stalls</h2>
          <p className="text-lg text-gray-700">
            Discover amazing products and services from Nepali entrepreneurs based in the UK. From traditional 
            handicrafts and clothing to modern businesses, our stalls represent the diverse talents and 
            entrepreneurial spirit of the Nepali community in the UK.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">💻 AckResponse Technology Stall</h2>
          <p className="text-lg text-gray-700 mb-4">
            Visit our cutting-edge technology stall and discover how AckResponse is revolutionizing 
            digital transformation and cloud solutions. We specialize in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">☁️ Cloud Solutions</h4>
              <p className="text-sm text-gray-600">Google Cloud, AWS, Azure expertise with custom solutions</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">🔄 DevOps & CI/CD</h4>
              <p className="text-sm text-gray-600">Automated deployment pipelines and infrastructure as code</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">📱 Web & Mobile Apps</h4>
              <p className="text-sm text-gray-600">Modern application development with latest technologies</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">🤖 AI & Automation</h4>
              <p className="text-sm text-gray-600">Intelligent solutions for business process automation</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-600 mb-3">🍜 Food Festival & Cuisine</h2>
          <p className="text-lg text-gray-700">
            Savor authentic Nepali cuisine prepared by local Nepali chefs and home cooks. From steaming 
            momos and aromatic dal bhat to traditional sweets and street food favorites, experience the 
            true taste of Nepal right here in the UK.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-600 mb-3">🎭 Cultural Performances</h2>
          <p className="text-lg text-gray-700">
            Enjoy mesmerizing traditional dances, live music performances, and cultural shows featuring 
            talented Nepali artists from the UK community. Experience the rich cultural heritage through 
            music, dance, and storytelling.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">🤝 Community & Networking</h2>
          <p className="text-lg text-gray-700">
            Connect with fellow Nepali professionals, entrepreneurs, and community members. Build 
            meaningful relationships, share experiences, and discover opportunities for collaboration 
            and growth within the Nepali community in the UK.
          </p>
        </section>

        <section className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Namaste! 🙏</h2>
          <p className="text-lg mb-4">
            Join us at Nepali Mela UK for an unforgettable celebration of culture, community, and innovation. 
            Visit our AckResponse stall to learn about cutting-edge technology solutions and discover how 
            we're bridging traditional values with modern innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-red-600 font-bold flex gap-3 group items-center px-6 py-3 rounded-xl duration-300 hover:px-8 hover:shadow-lg transform hover:scale-105">
              Visit Our Tech Stall
              <IoMdArrowForward
                size={20}
                className="group-hover:-rotate-180 transform transition-transform duration-300"
              />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold flex gap-3 group items-center px-6 py-3 rounded-xl duration-300 hover:bg-white hover:text-red-600 transform hover:scale-105">
              Explore All Stalls
              <IoMdArrowForward
                size={20}
                className="group-hover:-rotate-180 transform transition-transform duration-300"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
