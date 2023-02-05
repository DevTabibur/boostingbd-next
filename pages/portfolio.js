import React, { Fragment } from 'react';
import Layout from '../containers/common/common-layout'
import BasicPortfolio from '../containers/portfolio/basic'

const FullWidth4Grid = () => (
    <Fragment>
        <Layout pathList={['portfolio']} pathTitle="See Our Works">
            <div className="masonry-filter">
                <BasicPortfolio
                    className="col-lg-3 col-md-4 col-sm-6 p-0 isotopeSelector full-width-grid mb-0"
                    fluid="container-fluid"
                />
            </div>
        </Layout>
    </Fragment>
)

export default FullWidth4Grid;