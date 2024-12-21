import express, { Request, Response } from "express";
import helmet from "helmet";
import multer from "multer";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to File upload server" });
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong" });
});

// receive a array or single file
app.post(
  "/upload",
  upload.array("upload-files"),
  (req: Request, res: Response) => {
    console.log(req.files);
    res.json({ message: "File upload successful" });
  },
);

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
