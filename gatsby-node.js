/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path');

//  boundActionsCreators lets you use the action creators of Gatsby
 exports.createPages = ({boundActionCreators, graphql}) => {
    
    // createPage is from the Gatsby API
    const {createPage} = boundActionCreators;

    // this is the file that brings in our various posts
    const postTemplate = path.resolve('src/templates/post.js');

    // we ae are grabbing all of our pages and frontmatter data
    // allMarkdownRemark is coming from the Markdown plugin, duh
    // edges are the nodes themselves
    // remark automatically creates an id for us
    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);            
        }

        res.data.allMarkdownRemark.edges.forEach( ({node}) => {
            // We're iterating over each page that it's found via our query, and then register them as pages to let Gatsby know they exist
            // creatPages is pulled form the Gatsby API which we called above, earlier
            createPage({
                // we're setting the actual path of the page to whatever we told frontmatter 'path' was.
                path: node.frontmatter.path,
                // component is going to be loaded into our 'postTemplate' variable
                component: postTemplate
            })
        } )

    })
 }