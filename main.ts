import { serve } from "https://deno.land/std@v0.12/http/server.ts";

const DEFAULT_PORT = "8080";
const port = Deno.env().PORT ? Deno.env().PORT : DEFAULT_PORT;

const body = new TextEncoder().encode("Hello World\n");
const s = serve(":" + port);
window.onload = async () => {
  console.log("http://localhost:" + port);
  for await (const req of s) {
    req.respond({ body });
  }
};

