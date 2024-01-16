const NodeMediaServer = require("node-media-server");
import dotenv from "dotenv";
dotenv.config();


const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000 || process.env.API_PORT,
    allow_origin: "*",
  },
}; 

var nms = new NodeMediaServer(config);
nms.run();
