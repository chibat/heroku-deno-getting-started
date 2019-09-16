import { serve } from "https://deno.land/std@v0.12/http/server.ts";

function getPort(): number {
  const DEFAULT_PORT = 8080
  for (let i = 1; i < Deno.args.length; i++) {
    if (Deno.args[i] === '-p' && ++i < Deno.args.length) {
      return Number(Deno.args[i]);
    }
  }
  return DEFAULT_PORT;
}

const port = getPort();

if (isNaN(port)) {
  console.error('Port is not number.');
  Deno.exit(1);
}

const body = new TextEncoder().encode("Hello World\n");
const s = serve(":" + port);
window.onload = async () => {
  console.log("http://localhost:" + port);
  for await (const req of s) {
    req.respond({ body });
  }
};

