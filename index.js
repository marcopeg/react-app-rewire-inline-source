
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

function rewireInlineSourcePlugin (config, env, settings = {}) {
    var htmlWebpackPluginIdx = null
    var inlinePlugin = new HtmlWebpackInlineSourcePlugin()

    // Default settings
    settings.inlineSource = settings.inlineSource || '.(js|css)$'

    config.plugins.map((plugin, idx) => {
        if (plugin.options && plugin.options.template) {
            htmlWebpackPluginIdx = idx
            plugin.options.inlineSource = settings.inlineSource
        }
        return plugin
    })

    if (htmlWebpackPluginIdx === null) {
        config.plugins.push(inlinePlugin)
    } else {
        config.plugins.splice(htmlWebpackPluginIdx + 1, 0, inlinePlugin)
    }

    return config
}

module.exports = rewireInlineSourcePlugin
