// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://github.com/JeysDemo/nextjs-with-apollo.git/' : '',
    images: {
        unoptimized: true,
    },
}