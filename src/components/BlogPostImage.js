import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../sanity-config';

export function BlogPostImage({ node }) {
    if (!node || !node.asset || !node.asset._ref) return null;

    var fluidProps = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 800 },
        sanityConfig.sanity
    );
    return (
        <figure>
            <Img fluid={fluidProps} alt={node.alt} />
            <figcaption>{node.caption || ''}</figcaption>
        </figure>
    );
}
