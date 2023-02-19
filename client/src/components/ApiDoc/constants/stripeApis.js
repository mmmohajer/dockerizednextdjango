export const STRIPE_APIS = [
  {
    category: 'Stripe',
    info: `<p>With payment intent, the payment must be done instantly, and you must send the amount along with the request.</p>
    <p>However, with setup intent you can just save the user's payment method, and there is no need to send amount for any instant transactions.</p>`,
    endpoints: [
      {
        title: 'Create a payment intent',
        method: 'POST',
        url: '/api/create-payment-intent/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'amount',
            type: 'integer',
            isRequired: true,
            description: 'Amount of money in cents.'
          },
          {
            name: 'save_card_for_future_usage',
            type: 'boolean',
            isRequired: false,
            description:
              'If true, it will save the card information and will assign that card to the stripe customer, so in the future, users can see the list of their saved cards for any possible payments. By default, this value is False.'
          }
        ],
        description:
          'It will return a client secret, by which in the front-end you can display stripe payment form.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              client_secret: 'pi_CLIENT_SECRET_CODE'
            },
            description:
              'Using the client secret, the stripe payment form can be displayed in the front end.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Retrieve a payment intent',
        method: 'POST',
        url: '/api/retrieve-payment-intent/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'id',
            type: 'string',
            isRequired: true,
            description: 'Payment_intent id.'
          }
        ],
        description: 'It will return all the details of a payment intent.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              payload: {
                id: 'ID',
                object: 'payment_intent',
                amount: 1000000,
                amount_capturable: 0,
                amount_details: {
                  tip: {}
                },
                amount_received: 0,
                application: null,
                application_fee_amount: null,
                automatic_payment_methods: {
                  enabled: true
                },
                canceled_at: null,
                cancellation_reason: null,
                capture_method: 'automatic',
                charges: {},
                client_secret: 'CLIENT_SECRET',
                confirmation_method: 'automatic',
                created: 1676826262,
                currency: 'cad',
                customer: 'cus_CUSTOMER_ID',
                description: null,
                invoice: null,
                last_payment_error: null,
                latest_charge: null,
                livemode: false,
                metadata: {
                  id: '1234556678',
                  order_is_confirmed: 'False',
                  quantity: '2'
                },
                next_action: null,
                on_behalf_of: null,
                payment_method: null,
                payment_method_options: {
                  card: {
                    installments: null,
                    mandate_options: null,
                    network: null,
                    request_three_d_secure: 'automatic'
                  }
                },
                payment_method_types: ['card'],
                processing: null,
                receipt_email: null,
                review: null,
                setup_future_usage: 'off_session',
                shipping: null,
                source: null,
                statement_descriptor: null,
                statement_descriptor_suffix: null,
                status: 'requires_payment_method',
                transfer_data: null,
                transfer_group: null
              }
            },
            description:
              'Using the client secret, the stripe payment form can be displayed in the front end.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Create a setup intent',
        method: 'POST',
        url: '/api/create-setup-intent/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description:
          'It will return a client secret, by which in the front-end you can display stripe payment form. Remember that, it would not be used for instant payments. It will store the card information for any future payments.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              client_secret: 'seti_CLIENT_SECRET_CODE'
            },
            description:
              'Using the client secret, the stripe payment form can be displayed in the front end.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Retrieve a setup intent',
        method: 'POST',
        url: '/api/retrieve-payment-intent/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'id',
            type: 'string',
            isRequired: true,
            description: 'Payment_intent id.'
          }
        ],
        description: 'It will return all the details of a payment intent.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 'seti_ID',
              object: 'setup_intent',
              application: null,
              cancellation_reason: null,
              client_secret: 'seti_CLIENT_SECRET',
              created: 1676827559,
              customer: 'cus_CUSTOMER_ID',
              description: null,
              flow_directions: null,
              last_setup_error: null,
              latest_attempt: null,
              livemode: false,
              mandate: null,
              metadata: {
                quantity: '2',
                id: '1234556678',
                order_is_confirmed: 'False'
              },
              next_action: null,
              on_behalf_of: null,
              payment_method: null,
              payment_method_options: {
                card: {
                  mandate_options: null,
                  network: null,
                  request_three_d_secure: 'automatic'
                }
              },
              payment_method_types: ['card'],
              single_use_mandate: null,
              status: 'requires_payment_method',
              usage: 'off_session'
            },
            description:
              'Using the client secret, the stripe payment form can be displayed in the front end.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Add active card for a customer',
        method: 'POST',
        url: '/api/add-active-card-to-stripe-customer/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'token',
            type: 'string',
            isRequired: true,
            description: 'Token which is created in the front-end using stripe API.'
          }
        ],
        description:
          'It will add the card information to the current customer as a new payment method.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { payload: 'CURRENT_CUSTOMER_INFO' },
            description: 'Return the current customer details.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'List all possible payment methods for the current customer',
        method: 'GET',
        url: '/api/stripe-customer-source-handler/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description: 'It will List all possible payment methods for the current customer.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              active_sources: {},
              default_source: null
            },

            description:
              'Return all possible payment methods and the default one for the current customer.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Update payment method for the current customer',
        method: 'POST',
        url: '/api/stripe-customer-source-handler/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'default_source_id',
            type: 'string',
            isRequired: true,
            description: 'It will be the id of new default payment method.'
          }
        ],
        description: 'It will List all possible payment methods for the current customer.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { payload: 'UPDATED_CUSTOMER_DETAILS' },

            description:
              'Return all possible payment methods and the default one for the current customer.'
          },
          {
            type: 'error',
            code: 400,
            ex: { message: 'Error Message' },
            description: ''
          }
        ]
      }
    ]
  }
];
