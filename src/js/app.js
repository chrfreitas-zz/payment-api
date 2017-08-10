
'use strict';

window.buy = () => {

    if (!window.PaymentRequest) {
        throw "Your browser doesn't suppport PaymentRequest";
    }

    let methodData = [
        {
            supportedMethods: ['visa', 'mastercard']
        }
    ];

    let details = {
        total: {
            label: 'Something that costs money',
            amount: {
                currency: 'GBP',
                value: '9.99'
            }
        }
    };


    new PaymentRequest(methodData, details)
      .show()
      .then(function(uiResult) {
        //sucess
      })
      .catch(function(error) {
        //error
      });

}
