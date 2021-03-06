const express = require("express");
const connectDb = require("./config/db");

const app = express();
connectDb();

const PORT = process.env.PORT || 5000;

app.get("", (req, res) => res.send("I'm running"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
