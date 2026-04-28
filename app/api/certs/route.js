import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public/certs");

  const files = fs.readdirSync(dir);

  const certs = files.map(file => `/certs/${file}`);

  return Response.json(certs);
}