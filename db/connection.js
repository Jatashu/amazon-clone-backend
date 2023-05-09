const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/Amazonweb")
.then(() => console.log("connected data...."))
.catch ( (err) => console.log(err));