import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({ order }) => {
    const paypalConf = {
        currency: 'USD',
        env: 'sandbox',
        client: {
            sandbox: 'AcFx8E4ubOjOdlZGaxDVS0DX4IC38V-HDRPWFVWx6eEATLD54XksSUlufzQ8tStiZLfsPhr5aK4S__6C',
            production: 'EJEtyxCMB0MkxLcf5qi4aG3cSfN9_FKsr529OpGMDRmOHNuxrDSiFSR1thHWxVKxv3K75T6ZyhHW-V5L',
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'blue'

        }
    };

    const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalConf.currency,
                    },
                    description: 'Compra en test App',
                        custom: order.customer || '',
                        item_list: {
                            items: order.items
                    }
                }
            ],
            note_to_payer: 'Contactanos para cualquier aclaracion'
        };

        return actions.payment.create({ payment });
    };

    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert(`El pago fue procesado correctamente, ID: ${response.id}`);
        })
        .catch(err => {
            console.log(err);
            alert('Ocurrio un error al procesar el pago con Paypal')
        });
    };

    const onError = (error) => {
        console.log(error);
        alert('El pago no fue realizado, vuelva a intentarlo')
    };

    const onCancel = (data, actions) => {
        alert('Pago no realizado, el usuario cancelo el proceso')
    };

    return (
        <PayPalButton 
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error) => onError(error)}
            style={paypalConf.style}
            commit
            locale='en_US'
        />
    );
};
export default PaypalCheckoutButton;
