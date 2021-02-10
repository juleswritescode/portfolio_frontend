import React from 'react';
import { Layout } from './src/layout/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
