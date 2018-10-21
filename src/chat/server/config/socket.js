module.exports = (app, io, db) => {
    io.attach(app)
    db.init('users')

    io.on('join', async (ctx, data) => {
        console.log(ctx.socket.id);
        console.log(data);
        await io.broadcast('response', data)
    })

    io.on('message', async ctx => {
        await io.broadcast('response', ctx.data)
    })
}