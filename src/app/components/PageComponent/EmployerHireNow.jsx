import React from 'react';
import EmpHireSvg from "../../assets/Images/HireNowImage/EmployorHireNow.svg";

const EmployerHireNow = () => {
    return (
        <div className="w-full flex justify-center items-center py-2 bg-gray-100">
            <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-h-64 bg-white rounded-2xl flex flex-col md:flex-row items-center p-6 md:p-10 transition-shadow duration-300"
  style={{ boxShadow: '0 8px 30px rgba(155 255 0 / 62%)' }}>
                
                <div className="md:w-1/2 space-y-4 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-600">
                        Jobhub <span className='text-black'>For Employers</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-black">Want to hire?</h2>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
  Find the best candidates from <span className="bg-green-300 p-1 underline rounded-sm">thousands plus</span> active job seekers!
</p>

                    <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300"
                            onClick={() => window.location.href = '/verification'}
                    >
                        Post Job
                    </button>
                </div>

                <div className="hidden md:flex md:w-1/2 mt-8 md:mt-0 justify-center">
                    <img src={EmpHireSvg} alt="Employer Hire Now" className="w-full max-w-md lg:max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default EmployerHireNow;
