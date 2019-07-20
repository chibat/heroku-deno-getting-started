import { serve } from "https://deno.land/std@v0.11/http/server.ts";

async function main() {
  const port = Deno.env().PORT;
  const body = new TextEncoder().encode("Hello World\n");
  for await (const req of serve(":" + (port ? port : "8080"))) {
    req.respond({ body });
  }
}

main();
