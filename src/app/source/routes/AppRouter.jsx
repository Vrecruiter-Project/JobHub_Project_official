import React, { useState } from 'react';
import { Suspense, lazy } from "react";
import Loading from '../../components/Loading/Loading.jsx';
import { RouteMaker } from '../../components/routes/routes';
import Termsconditions from '../../components/PageComponent/TermsComponent/Terms&conditions.jsx';
import Privacypolicy from '../../components/PageComponent/TermsComponent/Privacypolicy.jsx';
import AllCandidates from '../Pages/EmployerPage/EmployerDashboard/Components/AllCandidates/AllCandidates.jsx';
import InterviewTips from '../../components/PageComponent/FooterKnowledge/Interview.jsx';
import Event from '../../components/PageComponent/FooterKnowledge/Events.jsx';
const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('../Pages/About/About.jsx'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));
const CandidateSignIn = lazy(() => import('../Pages/CandidatePage/SignInUpPage/CandidateSignIn.jsx'));
const CandidateSignUp = lazy(() => import('../Pages/CandidatePage/SignInUpPage/CandidateSignUp.jsx'));
const LogInPage = lazy(() => import('../Pages/AdminPage/SigninUpPage/SignIn/LogIn.jsx'));
const SignUpPage = lazy(() => import('../Pages/AdminPage/SigninUpPage/SignUp/SignUpPage.jsx'));
const ContactVerify = lazy(() => import('../Pages/PhoneVerification/ContactVerify/ContactVerify.jsx'));
const AdminDetailsForm = lazy(() => import('../Pages/AdminPage/AdminDetailsForm'));
const EmployeeForm = lazy(() => import('../Pages/EmployerPage/EmployeerForm.jsx'));
const EmployerDashboard = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/EmployerDashboard.jsx'));
const JobDetailsForm = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/JobPostForm/JobDetailsForm.jsx'));
const FullJobDetails = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/FullJobDetails.jsx'));
const JobPostCard = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/JobPostCard.jsx'));
const EmployerProfile = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/Components/EmployerProfile/EmployerProfile.jsx'));
const CandidateDashboard = lazy(() => import('../Pages/CandidatePage/CandidateDashboard.jsx'));
const CandidateJobPostCard = lazy(() => import('../Pages/CandidatePage/Components/Candidate-Job-Card/CandidateJobPostCard.jsx'));
const CandidateFullJobDetails = lazy(() => import('../Pages/CandidatePage/Components/Candidate-Job-Card/CandidateFullJobDetails.jsx'));
const FormComponent = lazy(() => import('../Pages/CandidatePage/FormComponent.jsx'));
const MyJobs = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/MyJobs.jsx'));
const SelectedCandidates = lazy(() => import('../Pages/EmployerPage/EmployerDashboard/Components/SelectedCandidates/SelectedCandidates.jsx'));
const AdminDashboard = lazy(() => import('../Pages/AdminPage/AdminDashboard/AdminDashboard.jsx'));
const AdminProfile = lazy(() => import('../Pages/AdminPage/AdminDashboard/Components/AdminProfile/AdminProfile.jsx'));
const EmployerInsights = lazy(() => import('../Pages/AdminPage/AdminDashboard/Components/EmployerInsights/EmployerInsights.jsx'));
const JobListings = lazy(() => import('../Pages/AdminPage/AdminDashboard/Components/JobListings/JobListings.jsx'));
const ShortlistedTalent = lazy(() => import('../Pages/AdminPage/AdminDashboard/Components/ShortlistedTalent/ShortlistedTalent.jsx'));
const AdminLandingPage = lazy(() => import('../Pages/AdminPage/AdminDashboard/Components/AdminLandingPage/AdminLandingPage.jsx'));
const TelecallerJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/TelecallerJob/TelecallerJob'));
const DocVerifyJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/DocVerifyJob/DocVerifyJob'));
const DataEntryJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/DataEntryJob/DataEntryJob'));
const WebDesignerJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/WebDesignerJob/WebDesignerJob'));
const GraphicDesignerJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/GraphicDesignerJob/GraphicDesignerJob'));
const WebDeveloperJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/WebDeveloperJob/WebDeveloperJob'));
const ConstructionJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/ConstructionJob/ConstructionJob'));
const FrontOfficeJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/FrontOfficeJob/FrontOfficeJob'));
const BackOfficeJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/BackOfficeJob/BackOfficeJob'));
const HouseKeepingJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/HouseKeepingJob/HouseKeepingJob'));
const DeliveryJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/DeliveryJob/DeliveryJob'));
const HotelStaffJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/HotelStaffJob/HotelStaffJob'));
const WarehouseStaffJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/WarehouseStaffJob/WarehouseStaffJob'));
const FactoryJob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/FactoryJob/FactoryJob'));
const Securityguardjob = lazy(() => import('../../components/PageComponent/PopularJobs/DifferentCardPages/SecurityJob/Securityguardjob.jsx'));

const AppRouter = () => {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouteMaker
          routes={{
            "/*": <Home />,
            "/about": <About />,
            "/contact": <Contact />,
            "/candidatelogin": <CandidateSignIn />,
            "/candidatesignup": <CandidateSignUp />,
            "/login": <LogInPage />,
            "/signup": <SignUpPage />,
            "/verification": <ContactVerify />,
            "/admin-registration-form": <AdminDetailsForm />,
            "/employeregistration": <EmployeeForm />,
            "/telecaller": <TelecallerJob />,
            "/documentverification": <DocVerifyJob />,
            "/dataentry": <DataEntryJob />,
            "/webdesigner": <WebDesignerJob />,
            "/graphicdesigner": <GraphicDesignerJob />,
            "/webdeveloper": <WebDeveloperJob />,
            "/construction": <ConstructionJob />,
            "/frontoffice": <FrontOfficeJob />,
            "/backoffice": <BackOfficeJob />,
            "/housekeeping": <HouseKeepingJob />,
            "/delivery": <DeliveryJob />,

            "/securityguard": <Securityguardjob />,
            "/hotelstaff": <HotelStaffJob />,
            "/warehousestaff": <WarehouseStaffJob />,
            "/factory": <FactoryJob />,
            "/Termsandconditions": <Termsconditions />,
            "/Privacypolicy": <Privacypolicy />,
            "/interviewtips": <InterviewTips />,
            "/events": <Event/>,
            // Employer Dashboard with nested routes
            "/employerdashboard": {
              element: <EmployerDashboard />,
              children: [
                { path: "/employerdashboard/", element: <JobPostCard /> },
                { path: "employerprofile", element: <EmployerProfile /> },
                {
                  path: "jobpostdetailsform",
                  element: <JobDetailsForm />
                },
                {
                  path: "jobpostdetails",
                  element: <FullJobDetails />
                },
                { path: "my-jobs", element: <MyJobs /> },
                { path: "all-candidates", element: <AllCandidates /> },
                { path: "selected-candidates", element: <SelectedCandidates /> },
              ],
            },
            "/candidatedashboard": {
              element: <CandidateDashboard />,
              children: [
                // {path: "",
                {
                  path: "/candidatedashboard/",
                  element: <CandidateJobPostCard />,
                  children: [
                    {
                      path: "candidatejobpostdetails",
                      element: <CandidateFullJobDetails />
                    },
                  ]
                },
                {
                  path: "registration",
                  element: <FormComponent />
                },
              ],
            },
            "/admin": {
              element: <AdminDashboard />,
              children: [
                { 
                  path: "/admin/", 
                  element: <AdminLandingPage /> 
                },
                { 
                  path: "adminprofile", 
                  element: <AdminProfile /> 
                },
                {
                  path: "employer-insights",
                  element: <EmployerInsights />
                },
                {
                  path: "job-listings",
                  element: <JobListings />
                },
                { 
                  path: "shortlisted-talent", 
                  element: <ShortlistedTalent /> 
                },
              ],
            },
          }}

        />
      </Suspense>
    </>
  );
};

export default AppRouter;
