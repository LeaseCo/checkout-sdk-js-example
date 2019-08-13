let PROXY_PAYMENT_METHOD = 'instore';

export function setLeaseCoProxy(method = 'instore'){
    PROXY_PAYMENT_METHOD = method;
}

export function getLeaseCoProxy() {
    return PROXY_PAYMENT_METHOD;
}