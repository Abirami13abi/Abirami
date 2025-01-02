import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">About Me</h2>
        <p className="text-white mb-6">
          I'm a passionate and dedicated engineer with a focus on Physical Design and FPGA Development. 
          Currently pursuing my B.E. in ECE at Chettinad College of Engineering and Technology, I'm eager 
          to apply my knowledge and skills in a professional setting.
        </p>
        <h3 className="text-2xl font-bold text-green-500 mb-4">Education</h3>
        <ul className="list-disc list-inside text-white">
          <li>B.E. ECE - Chettinad College of Engineering and Technology, Karur (Present - 78.4%)</li>
          <li>HSC - Rani Meyyammai Hr Sec School, Puliyur CF Karur (2021 - 89%)</li>
          <li>SSLC - Vivekananda Matric Hr Sec School, Pasupathipalayam Karur (2019 - 83.2%)</li>
        </ul>
      </div>
    </section>
  );
};

