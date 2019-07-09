import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
    const { edges } = data.allAirtable;
    console.log("thats the shit ->", edges);

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            {edges.map((edge, index) => {
                const { title } = edge.node.data;
                return <h3 key={index}>{title}</h3>
            })}
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
};

export const query = graphql`
    query IndexQuery {
        allAirtable {
            edges {
                node {
                    data {
                        title
                        markdown
                    }
                }
            }
        }
    }
`;

export default IndexPage
