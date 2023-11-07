const mongoose = require("mongoose");
mongoose.set("strict", false); // Use "strict" to disable strict mode
const mongoDB = "mongodb+srv://harshithreddy8:R17DcQmp36r4xfNP@cluster0.nmmzsdr.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

