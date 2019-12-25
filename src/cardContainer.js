import React, { Component, lazy, Suspense } from 'react';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux'

const CardComponent = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./card')), 2000);
    });
});

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    left: 50%;
    top: 50%;
    position: absolute;
    height: 32px;
    margin-left: -16px;
    margin-top: -16px;
`;

class CardContainer extends Component {

    render() {
        return (
            <Suspense fallback={<ScaleLoader css={override} color={this.props.store.theme.themeColor} />}>
                <CardComponent {...this.props} />
            </Suspense>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

export default connect(
    mapStateToProps
)(CardContainer)
