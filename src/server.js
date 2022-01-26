const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT | 5000;

    // Middlewares
    this.middlewares();

    // App routes
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Reading and parsing of body
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/indicadores", require("./routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }
}

module.exports = Server;
