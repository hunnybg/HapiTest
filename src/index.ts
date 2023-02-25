import { Server, Request, ResponseToolkit } from "@hapi/hapi";
const init = async () => {
    const server: Server = new Server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ["*"]
              }
        }
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            h.response('Hello World!');
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();