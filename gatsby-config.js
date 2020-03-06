module.exports = {
  siteMetadata: {
    title: 'mrdotb Software Developer',
    author: 'mrdotb',
    description: 'mrdotb blog & portfolio',
    siteUrl: 'https://mrdotb.com/',
    social: {
      github: 'https://github.com/mrdotb/',
      linkedin: 'https://www.linkedin.com/in/baptiste-chaleil-9494a775/'
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/page`,
        name: 'page',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'mrdotb'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158581235-1'
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        query: '',
        name: 'mrdotb blog & portolio',
        short_name: 'mrdotb blog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#26282a',
        display: 'minimal-ui',
        icon: 'content/assets/mrdotb-logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography',
        omitGoogleFont: true
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]},
                  filter: {fields: {collection: {eq: "blog"}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'mrdotb blog',
          },
        ],
      },
    }
  ],
}
