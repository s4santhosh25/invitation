import React, { Component, lazy, Suspense } from 'react';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/core';

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
            <Suspense fallback={<ScaleLoader css={override} color="red" />}>
                <CardComponent />
            </Suspense>
        );
    }

}

export default CardContainer;
