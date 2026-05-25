import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const resumePath = path.join(process.cwd(), "app", "resume", "AkshayPathak_Resume.pdf");
  const file = await readFile(resumePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="AkshayPathak_Resume.pdf"',
      "Cache-Control": "public, max-age=3600"
    }
  });
}
