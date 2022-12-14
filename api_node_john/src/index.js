import app from "./app.js";

app.listen(app.get("port"));

console.log("Api desde el puerto ", app.get("port"));
