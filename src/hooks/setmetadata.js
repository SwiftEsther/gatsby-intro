import {graphql, useStaticQuery} from 'gatsby';

const SetSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return data.site.siteMetadata;
}

export default SetSiteMetadata;
