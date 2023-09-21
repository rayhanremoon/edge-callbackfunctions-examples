import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  console.log("Hello from the logging service");

  return new Response("The request to this URL was logged", {
    headers: { "content-type": "text/html" },
  });
};
