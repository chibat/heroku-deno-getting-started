import {
  Controller,
  Get,
  Area,
  App,
} from "alosaur";
import * as flags from "std/flags/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

@Controller()
export class HomeController {
  @Get()
  text() {
    return "Hello world";
  }
}

@Area({
  controllers: [HomeController],
})
export class HomeArea {}

const app = new App({
  areas: [HomeArea],
});

app.listen({ port: port });
