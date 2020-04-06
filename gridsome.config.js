module.exports = {
    templates: {
        // Add templates for content types here.
        // Read more: https://gridsome.org/docs/templates/
    },
    plugins: [
        {
            use: '@gridsome/source-contentful',
            options: {
                space: '3sm5b5m1wi2c', // required
                accessToken: 'CJ7ap9JyT2CCD_8sr4mPzaaXBR5DG7p8-L-y-ZKvUJg', // required
                host: 'cdn.contentful.com',
                environment: 'master',
                typeName: 'Contentful'
            }
        }
    ]
}