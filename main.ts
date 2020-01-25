import { serve } from "https://deno.land/std@v0.31.0/http/server.ts";
import * as flags from "https://deno.land/std@v0.31.0/flags/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

const body = new TextEncoder().encode("Hello World\n");
const s = serve({ port: port });
console.log("http://localhost:" + port);
for await (const req of s) {
  req.respond({ body });
}
