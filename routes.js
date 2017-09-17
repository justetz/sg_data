const epilogue = require('epilogue')
const express = require('express')

module.exports = connection => {
    let router = express.Router()

    epilogue.initialize({
        app: router,
        sequelize: connection
    })

    for(let name of Object.keys(connection.models)) {
        const model = connection.model(name)
        const tName = model.getTableName()

        let configuration = {
            model: model,
            endpoints: [`/${tName}`, `/${tName}/:${model.primaryKeyAttribute}`]
        }

        if('queryIncludes' in model) {
            configuration.include = model.queryIncludes(connection)
        }

        let resource = epilogue.resource(configuration)
    }

    router.get('/', (req, res) => {
        var output = ''
        for (var key in router.stack) {
            if (router.stack.hasOwnProperty(key)) {
                var val = router.stack[key]
                if(val.route) {
                    val = val.route
                    if(val.stack[0].method === 'get') {
                        output += `<li><a href="${val.path}">${val.path} (${val.stack[0].method})</a></li>`
                    } else {
                        output += `<li>${val.path} (${val.stack[0].method})</li>`
                    }
                }
            }
        }

        res.send('<ul>' + output + '</ul>')
    })

    return router
}
