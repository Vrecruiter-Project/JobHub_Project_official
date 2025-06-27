import { useState } from "react";
import { gloabalTheme } from "../../../theme/theme";
import PageComponent from "../PageComponent";
import inter from "./1.mp4";
import inter1 from "./2.mp4";
import inter2 from "./3.mp4";
import confetti from "canvas-confetti";
export default function InterviewTips() {
  const videos = [inter, inter1, inter2];
  const [play, setPlay] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [num, setNum] = useState(0);
  const [completed, setCompleted] = useState(false);
  function handlePlay() {
    setPlay(!play);
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 450,
      spread: 70,
      origin: { y: 0.5 },
    });
  };


  function handleNextVideo() {
    // Handle video switching first
    if (videoIndex < videos.length - 1) {
      setVideoIndex(videoIndex + 1);
    } else {
      setVideoIndex(0);
    }

    // Then handle click counting
    if (num < 2) {
      // Changed to 2 because we start counting from 0
      setNum(num + 1);
    } else {
      setNum(3); // Ensure it shows 3/3
      setCompleted(true);
      triggerConfetti()
    }
  }

  return (
    <PageComponent>
      <div className="md:hidden w-full flex justify-center items-center py-9 flex-col">
        <article className="w-[80%]">
          <h2 className="text-sm">
            Most of the Candidates failed in their interview beacuse of{" "}
            <span className=" border-b  border-b-red-700">bad prepration</span>
          </h2>
          <h1 className="text-2xl font-semibold">
            {`Let's `} Jobhub helps you to{" "}
            <span
              className="underline"
              style={{ color: gloabalTheme.colors.primary }}
            >
              Crack your Interviews
            </span>
          </h1>
        </article>
        <div className="rounded-xl p-2 flex justify-center items mt-4">
          <div className=" w-[80%] bg-gradient-to-t  from-blue-500 via-lime-300 to-red-400 p-2 rounded-xl ">
            <video key={videoIndex} controls className="rounded-lg  ">
              <source
                src={videos[videoIndex]}
                type="video/mp4"
                className="rounded-lg"
              />
            </video>
          </div>
        </div>
        <div className="w-[80%] flex flex-col bg-slate-50 p-2 mt-4 rounded-lg">
          {!completed ? (
            <div className="flex  justify-between items-center">
              <span className="underline p-1 text-lg">Left {3 - num}/3</span>
              <div
                onClick={handlePlay}
                className="flex items-center cursor-pointer"
              >
                {play ? (
                  <span className="">
                    <i className="fa-solid fa-circle-pause text-2xl"></i>
                  </span>
                ) : (
                  <span className="">
                    <i className="fa-solid fa-circle-play  text-2xl"></i>
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Next</span>
                <span
                  onClick={handleNextVideo}
                  className="bg-lime-300 px-4 rounded-md  font-semibold"
                >
                  <i className="fa-solid fa-forward"></i>
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-lg font-semibold">All videos completed!</p>
              <button
                onClick={() => {
                  setNum(0);
                  setCompleted(false);
                  setVideoIndex(0);
                }}
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
              >
                Watch Again
              </button>
            </div>
          )}
        </div>
        <div className="p-3">
          <h2>
            Quick Videos for{" "}
            <span className="font-semibold underline">
              Interview Prepration
            </span>{" "}
            by our Experts
          </h2>
          <span className="text-xs">
            What inside in this video from jobhub interview prepration ?
          </span>
          <dl className="p-2 bg-gray-200 rounded-lg mt-2">
            <dt className="font-semibold underline">
              Self Introduction{" "}
              <span className="text-xs text-gray-400">90 sec</span>
            </dt>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - I studied [Degree] at [College] + learned [Top Skill].
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - I practiced this through [Project/Internship/Certificate].{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - {`I'm excited to join [Company] because [Specific Reason].`}{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <span className="block text-[10px] mt-2">
              For exapmple <br />
              {`*"Hello, I’m [Name]. I recently graduated with a [Degree] from [College/University], where I developed skills in [Skill 1] and [Skill 2] through projects like [Brief Example]. I’m passionate about [Industry/Field] and completed a certification in [Relevant Course] to strengthen my knowledge. I’m eager to start my career with [Company Name] and contribute with my enthusiasm and willingness to learn."*`}
            </span>
          </dl>
          <dl className="p-2 bg-gray-200 rounded-lg mt-2">
            <dt className="font-semibold underline">
              Previous Achivement/Skills{" "}
              <span className="text-xs text-gray-400">90 sec</span>
            </dt>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Ranked in top 10% of my batch with a [CGPA/Percentage] in
              [Degree]. <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Developed a [Project Name] that improved [Metric] by X% using
              [Skill]. <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Certified in [Course Name] by [Platform] with expertise in
              [Tool/Technique].{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <span className="block text-[10px] mt-2">
              For Example <br />
              {`*"I ranked in the top 10% of my Computer Science batch with a 9.2 CGPA at XYZ University. I developed an ‘Automated Attendance System’ using Python and facial recognition, which reduced manual tracking time by 60% for my college. Additionally, I’m certified in ‘Data Science with Python’ by Coursera, with hands-on expertise in Pandas and predictive modeling."*`}
            </span>
          </dl>
          <dl className="p-2 bg-gray-200 rounded-lg mt-2">
            <dt className="font-semibold underline">
              How your Contributions are value for us !{" "}
              <span className="text-xs text-gray-400">90 sec</span>
            </dt>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Ranked top 10% in class with [X GPA] - I convert knowledge into
              results fast.{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Built [Project] that improved [Metric] by X% using [Skill].{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <dd className="pl-2 text-xs mt-1 font-semibold">
              - Certified in [Relevant Skill] with hands-on [Tool] experience.{" "}
              <span className="text-xs text-gray-800">(30sec)</span>{" "}
            </dd>
            <span className="block text-[10px] mt-2">
              For Example <br />
              {`*"My academic rigor (top 10% rank with 9.2 CGPA) ensures I grasp complex concepts quickly. My project experience—like developing an attendance system that saved 60% time—proves I can turn knowledge into practical solutions. With certified skills in [relevant tools], I’ll deliver measurable results from day one while growing with your team."*`}
            </span>
          </dl>
        </div>
        <div className="p-5">
          <span className="text-[9px] block ">
            The content highlights that many candidates fail interviews due to
            poor preparation and introduces {"Jobhub.world"} as a resource to
            help improve interview skills through expert-backed video guidance.
            It features quick, focused videos covering key areas like
            self-introduction, broken into concise, easy-to-understand segments.
            The purpose is to educate and support job seekers in enhancing their
            preparation. However, this content is intended for general and
            informational purposes only and should not be considered as
            assurance of success in any interview.
          </span>
        </div>
      </div>
      
  <div className="hidden md:flex w-full max-w-6xl mx-auto px-4 py-12 flex-col items-center">
    {/* Header Section */}
    <article className="w-full max-w-4xl text-center mb-8">
      <h2 className="text-lg text-gray-600 mb-2">
        Most candidates fail interviews due to{" "}
        <span className="border-b-2 border-red-500">poor preparation</span>
      </h2>
      <h1 className="text-4xl font-bold text-gray-800">
        {`Let's `} Jobhub help you{" "}
        <span className="underline" style={{ color: gloabalTheme.colors.primary }}>
          Crack Your Interviews
        </span>
      </h1>
    </article>

    {/* Video Player Section */}
    <div className="w-full max-w-4xl mb-8">
      <div className="relative bg-gradient-to-t from-blue-500 via-lime-300 to-red-400 p-1 rounded-2xl shadow-xl">
        <video 
          key={videoIndex} 
          controls 
          className="w-full rounded-xl shadow-md aspect-video"
        >
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>
      </div>
    </div>

    {/* Video Controls */}
    <div className="w-full max-w-4xl bg-white p-4 rounded-xl shadow-md mb-12">
      {!completed ? (
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-700">
            Videos remaining: <span className="text-blue-600">{3 - num}/3</span>
          </span>
          <div 
            onClick={handlePlay} 
            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            {play ? (
              <i className="fa-solid fa-circle-pause text-3xl text-blue-600"></i>
            ) : (
              <i className="fa-solid fa-circle-play text-3xl text-blue-600"></i>
            )}
          </div>
          <button
            onClick={handleNextVideo}
            className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-md transition-all flex items-center gap-2"
          >
            Next <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      ) : (
        <div className="text-center py-6">
          <p className="text-2xl font-bold text-gray-800 mb-4">🎉 All videos completed!</p>
          <button
            onClick={() => {
              setNum(0);
              setCompleted(false);
              setVideoIndex(0);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all"
          >
            Watch Again
          </button>
        </div>
      )}
    </div>

    {/* Content Sections */}
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Quick <span className="text-blue-600">Interview Preparation</span> Videos
      </h2>
      <p className="text-gray-600 mb-6">
        Expert tips to help you ace your interviews
      </p>

      <div className="grid gap-6">
        {/* Self Introduction */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Self Introduction
            </h3>
            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">90 sec</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                I studied [Degree] at [College] + learned [Top Skill].{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                I practiced this through [Project/Internship/Certificate].{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                {`I'm excited to join [Company] because [Specific Reason].`}{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 italic">
              {`Example: "Hello, I'm [Name]. I recently graduated with a [Degree] from [College/University], where I developed skills in [Skill 1] and [Skill 2] through projects like [Brief Example]..."`}
            </p>
          </div>
        </div>

        {/* Previous Achievement/Skills */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Previous Achievements/Skills
            </h3>
            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">90 sec</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Ranked top 10% in class with [X GPA].{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Developed [Project] that improved [Metric] by X%.{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Certified in [Relevant Skill] with hands-on experience.{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 italic">
              {`Example: "I ranked in the top 10% of my Computer Science batch with a 9.2 CGPA at XYZ University. I developed an 'Automated Attendance System' using Python..."`}
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Your Value Contribution
            </h3>
            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">90 sec</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Fast learner with proven academic excellence.{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Practical problem-solving through projects.{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                Certified expertise in relevant tools.{" "}
                <span className="text-gray-500 text-xs">(30sec)</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="w-full max-w-4xl mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs text-gray-600">
        The content highlights that many candidates fail interviews due to poor preparation
        and introduces Jobhub.world as a resource to help improve interview skills through
        expert-backed video guidance. It features quick, focused videos covering key areas
        like self-introduction. This content is intended for general and informational
        purposes only and should not be considered as assurance of success in any interview.
      </p>
    </div>
  </div>

    </PageComponent>
  );
}
