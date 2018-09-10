import React from 'react';
import Helmet from 'react-helmet';

// data is where all the graphQL info comes into play
export default function Template({data}) {
    const {markdownRemark: post} = data;
    // above is the same as: 
    // const post = data.markdownRemark
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    )
}


//remember graphQL doesn't use commas, just indents
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`