import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

interface Order {
  create: (something: unknown) => void
  capture: () => Promise<string>
}

interface Actions {
  order: Order
}

interface Paypal {
  Buttons: unknown
}

declare global {
  interface Window { paypal: Paypal; }
}

const SplitterExtensionDonate = () => {
  const [isReady, setIsReady] = useState(false)

  const prices: { [key: string]: string } = {
    'Virtual Tea': '2',
    'Virtual Coffee': '5',
    'Virtual Coctail': '10',
    'Virtual Glass of Wine': '15'
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=AYK9qXY8MGCV8y-pMjzy2FzZXH9OylI5Izu5bQEj0i8uq-ysuIlDq4xOUDs7k2ixieK6KfGEvR2I4E9D&enable-funding=venmo&currency=USD`;
    script.async = true;
    script.onload = () => {
      setIsReady(true);
    };
    script.onerror = () => {
      throw new Error("Paypal SDK could not be loaded.");
    };

    document.body.appendChild(script);
  }, [])

  useEffect(() => {
    if (!isReady) { return }

    function initPayPalButton() {
      const shipping = 0;
      const itemOptions = document.querySelector<HTMLSelectElement>("#smart-button-container #item-options");
      let quantity = parseInt('1');
      const quantitySelect = document.querySelector<HTMLSelectElement>("#smart-button-container #quantitySelect");
      if (!isNaN(quantity) && quantitySelect) {
        quantitySelect.style.visibility = "visible";
      }
      let orderDescription = '';
      if (orderDescription === '') {
        orderDescription = 'Item';
      }
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',

        },
        createOrder: (_data: unknown, actions: Actions) => {
          if (!itemOptions || !quantitySelect) { return }
          const idx = itemOptions.selectedIndex
          const selectedItemDescription = itemOptions.options[idx].value;
          const optVal = itemOptions.options[idx].value
          const price = prices[optVal]
          const selectedItemPrice = parseFloat(price || '2');
          let tax = 0;
          if (quantitySelect.options.length > 0) {
            quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
          } else {
            quantity = 1;
          }

          tax *= quantity;
          tax = Math.round(tax * 100) / 100;
          let priceTotal = quantity * selectedItemPrice + parseFloat(shipping.toString()) + tax;
          priceTotal = Math.round(priceTotal * 100) / 100;
          const itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;

          return actions.order.create({
            purchase_units: [{
              description: orderDescription,
              amount: {
                currency_code: 'USD',
                value: priceTotal,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: itemTotalValue,
                  },
                  shipping: {
                    currency_code: 'USD',
                    value: shipping,
                  },
                  tax_total: {
                    currency_code: 'USD',
                    value: tax,
                  }
                }
              },
              items: [{
                name: selectedItemDescription,
                unit_amount: {
                  currency_code: 'USD',
                  value: selectedItemPrice,
                },
                quantity: quantity
              }]
            }]
          });
        },
        onApprove: (_data: unknown, actions: Actions) => {
          return actions.order.capture().then((orderData: unknown) => {

            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.querySelector<HTMLDivElement>('#paypal-button-container');
            if (!element) { return }
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');

          });
        },
        onError: (err: unknown) => {
          console.log(err);
        },
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  }, [isReady])

  return (
    <Layout>
      <Head>
        <title>Nponomrev Blog about Web Development</title>
      </Head>
      <div className="container justify-center px-5 m-auto mx-lg">
        <div className="grid grid-cols-5 gap-6">
          <div />
          <div className="col-span-3">
            <div className="mt-2">
              <div className="text-sm text-gray-500">
                <div id="smart-button-container">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <p></p>
                      <select id="item-options">
                        <option value="Virtual Tea">
                          Virtual Tea - 2 USD
                        </option>
                        <option value="Virtual Coffee">
                          Virtual Coffee - 5 USD
                        </option>
                        <option value="Virtual Coctail">
                          Virtual Coctail - 10 USD
                        </option>
                        <option value="Virtual Glass of Wine">
                          Virtual Glass of Wine - 15 USD
                        </option>
                      </select>
                      <select style={{ visibility: 'hidden' }} id="quantitySelect"></select>
                    </div>
                    <div id="paypal-button-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SplitterExtensionDonate
