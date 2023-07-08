import express, { Request, Response } from "express";
import next from "next";
import { NextServer, RequestHandler } from "next/dist/server/next";

const dev: boolean = process.env.NODE_ENV !== "production";
const app: NextServer = next({ dev });
const handle: RequestHandler = app.getRequestHandler();
const port: String | Number = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
