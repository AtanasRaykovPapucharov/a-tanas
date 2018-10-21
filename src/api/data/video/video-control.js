module.exports = (data) => {
  return {
    getAll: ctx => {
      return data.getAll().then(data => {
        return ctx.response.body = {
          data: data
        }
      })
    }
  }
}