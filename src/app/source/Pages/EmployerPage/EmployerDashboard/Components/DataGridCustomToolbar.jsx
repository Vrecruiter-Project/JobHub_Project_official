import { IconButton } from "@mui/material";
import { GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const useCustomToolbar = (backClickNavPath = "/admin/home") => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(backClickNavPath);
  };

  const onAddDataclick = (func) => func;

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation
          .lock("landscape")
          .catch((err) => console.error("Orientation lock failed:", err));
      }
    } else {
      document.exitFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation.unlock();
      }
    }
    // toggleFullScreen();
  };
  
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer className="flex justify-between">
        <IconButton onClick={handleBackClick} sx={{ mb: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <GridToolbar />
        <div>
          <button
            className="text-[#1976d2] font-medium text-[14px] h-12 w-24 rounded-md text-md"
            onClick={onAddDataclick}
          >
            ADD DATA
          </button>
          <IconButton onClick={handleFullScreenToggle}>
            <FullscreenIcon />
          </IconButton>
        </div>
      </GridToolbarContainer>
    );
  };
  return { onAddDataclick, CustomToolbar };
};

export default useCustomToolbar;
