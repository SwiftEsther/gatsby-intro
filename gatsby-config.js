module.exports={
    siteMetadata: {
        title: 'Frontend Masters Gatsby Workshop',
        description: 'A site I built while following the Frontend Masters Gatsby Workshop',
    },
    plugins: ['gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-mdx',
            options: {
                default: require.resolve('./src/components/layout')
            }
        }
    ],
};