const HomeBanner = () => {
    return (
        <div className="bg-green-700 w-full flex justify-center hidden md:flex">
            <div className="w-[93%] p-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="text-white text-sm sm:text-xl text-center md:text-left">
                    Your dream job is just a click away
                </div>
                <div className="text-white text-sm sm:text-xl text-center md:text-left">
                    Have any questions? +91 8512827174
                </div>
                <div className="flex">
                    <a
                        href="https://www.facebook.com/people/JobHubworld/61575148695953/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white"
                    >
                        <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jobhub-world-5559a7361/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white"
                    >
                        <i className="fa-brands fa-linkedin-in text-xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white"
                    >
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
