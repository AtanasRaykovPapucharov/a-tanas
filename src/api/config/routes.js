module.exports = (router, controller, collections) => {

    router.get('/', async (ctx) => {
        console.log('API User connected!')
    })

    collections.forEach(element => {
        router.get(`/api/${element}`, controller[element].getAll)
    })

    router.get('*', async (ctx) => {
        await ctx.redirect('/')
    })
}