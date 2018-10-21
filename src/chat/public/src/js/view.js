module.exports = ($, Handlebars) => {
    return {
        chat: (selectorId, data) => {
            return templateLoader($, Handlebars).load(selectorId, 'views/chat.html', data)
        }
    }
}

function templateLoader($, Handlebars) {
    const _compile = (templateUrl) => {
        return new Promise((resolve, reject) => {
            $.get(templateUrl, (htmlTemplate) => {
                let compiledTemplate = Handlebars.compile(htmlTemplate)
                resolve(compiledTemplate)
            })
        })
    }
    return {
        load: (selector, templateUrl, data) => {
            let selectedItem = $(selector)
            data = data || Object

            return _compile(templateUrl).then((compiledTemplate) => {
                selectedItem.html(compiledTemplate(data))
            })
        }
    }
}