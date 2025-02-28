import { useState } from "react";
import CandidateDashboardNav from "./Components/CandidateDashboardNavbar/CandidateDashboardNav";
import { Outlet } from "react-router-dom";
import PageComponent from "../../../components/PageComponent/PageComponent";
import RegistrationPage from "./RegistrationPage";
import { Modal, Box } from "@mui/material";

const CandidateDashboard = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true); // Hide the modal after submission
  };

  return (
    <>
      {/* Modal for the Registration Page */}
      {!isFormSubmitted && (
        <Modal
          open={!isFormSubmitted}
          aria-labelledby="form-popup"
          closeAfterTransition
          disableEscapeKeyDown
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

              scrollbarWidth: 'none',

              overflowY: 'auto',
              maxHeight: '80vh',
              border: 'none',

            }}
          >
            <RegistrationPage onSubmit={handleFormSubmit} />
          </Box>
        </Modal>
      )}

      {/* Main Dashboard Content */}
      <PageComponent>
        <CandidateDashboardNav />
        <Outlet />
      </PageComponent>
    </>
  );
};

export default CandidateDashboard;
