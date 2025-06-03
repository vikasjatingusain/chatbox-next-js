import { NextApiResponse } from "next";

// app/api/chat/route.ts

export async function GET(req: Request, res:NextApiResponse) {
   const { searchParams } = new URL(req.url);
  const prompt = searchParams.get('prompt') || '';

  const fastApiUrl = `http://127.0.0.1:8000/generate?prompt=${encodeURIComponent(prompt as string)}`;

  console.log(fastApiUrl);

  const fastRes = await fetch(fastApiUrl, {method: "POST"});
  if (!fastRes.body) return res.status(500).send('No body');

  return new Response(fastRes.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
