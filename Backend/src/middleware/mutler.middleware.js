import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./resumes");
  },
  filename: function (req, file, cb) {
    const preSuffix = Date.now();
    cb(null, preSuffix + file.originalname);
  },
});

export const upload = multer({ storage });
