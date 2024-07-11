import figlet from "figlet";

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response(figlet.textSync("God!"));
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
