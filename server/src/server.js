import app from "./app.js";
import dotenv from "dotenv/config";

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`server is running on : http://localhost:${port}`);
});
