
'use strict';


window.buy = () => {

    if (!window.PaymentRequest) {
        throw "Your browser doesn't suppport PaymentRequest";
    }

    let methodData = [{
            supportedMethods: ['visa', 'mastercard'],
            data: {
                supportedTypes: ['credit', 'debit']
            }
        }
    ];


    let products = [
        {
            label: 'House',
            amount: {
                currency: 'USD',
                value: '10.00'
            }
        },
        {
            label: 'Car',
            amount: {
                currency: 'USD',
                value: '24.99'
            }
        }
    ];


    let details = {
        total: {
            label: 'Total',
            amount: {
                currency: 'USD',
                value: 34.99
            }
        },
        displayItems: products
    }


    new PaymentRequest(methodData, details)
        .show()
        .then(function(uiResult) {
            alert('Success');
        })
        .catch(function(error) {
            alert('Error');
        });

}
