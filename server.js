const express = require("express");
const app = express();
const PORT = 3000;

// phục vụ frontend
app.use(express.static("public"));

// test API
app.get("/api", (req, res) => {
  res.json({ message: "Backend chạy OK" });
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
