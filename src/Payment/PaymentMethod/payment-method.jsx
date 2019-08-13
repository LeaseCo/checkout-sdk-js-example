import React, { Fragment } from 'react';
import RadioInput from '../../components/RadioInput/radio-input';
import PaymentForm from './PaymentForm/payment-form';

import { getLeaseCoProxy } from '../../config';

export default class PaymentMethod extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <RadioInput
                    name={ 'paymentMethod' }
                    value={ this.props.method.id }
                    label={ this._getLabel() }
                    onChange={ this.props.onClick } />

                { this._shouldShowPaymentForm() &&
                    <PaymentForm
                        methodId={ this.props.method.id }
                        onChange={ this.props.onChange } />
                }
            </Fragment>
        );
    }

    _shouldShowPaymentForm() {
        if (this.props.selected !== this.props.method.id) {
            return false;
        }

        return this.props.method.method === 'credit-card' || this.props.method.method === 'zzzblackhole';
    }

    _isLeaseCo() {
        return this.props.method.id === getLeaseCoProxy();
    }

    _getLabel() {
        if (this._isLeaseCo()) {
            const checkoutLogo = window.leaseco.merchantConfig.merchantWhiteLabel ?
                window.leaseco.merchantConfig.uiLogoLink :
                "https://checkout.leaseco.io/leaseco-green.png";
            return <img style={{maxHeight: 36}} src={`${checkoutLogo}`} />
        }
        return this.props.method.method === 'paypal' ? 'PayPal' : this.props.method.config.displayName;
    }
}
