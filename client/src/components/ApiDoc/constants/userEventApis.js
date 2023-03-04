export const USER_EVENT_APIS = [
  {
    category: 'User Event',
    info: `<p>This endpoints are used to perform CRUD actions on a user event. User events are events like: looging in to the app, openning the webpage, clicking on a button, and so on.</p>
    <p>You can use a geolocation api to retrieve the client's ip address and location in order to realize the request comes from which ip address or location.</p>
    <p>In creating a new user event, note that if an Authorization param is set along with the header of the request, the event will be assigned to the current logged in user.</p>`,
    endpoints: [
      {
        title: 'Show all User Events',
        method: 'GET',
        url: '/api/user-event/',
        authorizedGroups: ['Admin'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        queryParams: [
          {
            name: 'page',
            type: 'integer',
            isRequired: false,
            description:
              'Number of page in the paginated list of data. If no page is set then the returned list will include all items.'
          }
        ],
        description:
          'It will list all the user events, and if a page query is in the url, the list will be in a paginated format, and each page includes 15 items.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: [
              {
                id: 3,
                uuid: '799c7288-cd6e-4016-89c4-3594102ddefb',
                user: 1,
                user_email: 'mmmohajer70@gmail.com',
                ip_address: '149.04.34.43',
                city: 'Ottawa',
                region: 'ON',
                country: 'CA',
                event: 'opened_the_app',
                timezone: 'America',
                created_at: '2023-02-23T12:59:27.865722-05:00',
                updated_at: '2023-02-23T12:59:27.865738-05:00'
              },
              '...'
            ],
            description:
              'List all user events. If a page param  is set in the query, the data will return in paginated format and each page includes 15 items.'
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
        title: 'Create a new user event',
        method: 'POST',
        url: '/api/user-event/',
        authorizedGroups: ['Anyone'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: false,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        bodyParams: [
          {
            name: 'event',
            type: 'string',
            isRequired: true,
            description:
              "This is the event that user created. It's a choice field and can be one of the following: ['opened_the_app', 'sent_login_req']."
          },
          {
            name: 'ip_address',
            type: 'string',
            isRequired: false,
            description:
              'This is the ip address of the user. Remember that the maximum length of ip_address can be 256 characters.'
          },
          {
            name: 'city',
            type: 'string',
            isRequired: false,
            description:
              'This is the ip address of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'region',
            type: 'string',
            isRequired: false,
            description:
              'This is the region of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'country',
            type: 'string',
            isRequired: false,
            description:
              'This is the country of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'timezone',
            type: 'string',
            isRequired: false,
            description:
              'This is the timezone of the user. Remember that the maximum length of captcha code can be 256 characters.'
          }
        ],
        description:
          'It will create a new user event, like button click, or login to the app, or open the web page, or application and etc. Note that if an Authorization param is set along with the header of the request, the event will be assigned to the current logged in user.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 4,
              uuid: 'be8e7c04-6fa4-4894-9351-d007b55bfda5',
              user: 1,
              user_email: 'mmmohajer70@gmail.com',
              ip_address: '149.04.34.43',
              city: 'Ottawa',
              region: 'ON',
              country: 'CA',
              event: 'opened_the_app',
              timezone: 'America',
              created_at: '2023-02-23T15:35:21.044558-05:00',
              updated_at: '2023-02-23T15:35:21.044636-05:00'
            },
            description: 'Returns the user event schema.'
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
        title: 'Retrieve a single User Event',
        method: 'GET',
        url: '/api/user-event/<int:id>',
        authorizedGroups: ['Admin'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description: 'It will retrieve a user event based on the id.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 4,
              uuid: 'be8e7c04-6fa4-4894-9351-d007b55bfda5',
              user: 1,
              user_email: 'mmmohajer70@gmail.com',
              ip_address: '149.04.34.43',
              city: 'Ottawa',
              region: 'ON',
              country: 'CA',
              event: 'opened_the_app',
              timezone: null,
              created_at: '2023-02-23T15:35:21.044558-05:00',
              updated_at: '2023-02-23T15:35:21.044636-05:00'
            },
            description: 'Retrieve a user event based on the id.'
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
        title: 'Update a user event',
        method: 'PUT',
        url: '/api/user-event/<int:id>',
        authorizedGroups: ['Admin'],
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
            name: 'event',
            type: 'string',
            isRequired: false,
            description:
              "This is the event that user created. It's a choice field and can be one of the following: ['opened_the_app', 'sent_login_req']."
          },
          {
            name: 'ip_address',
            type: 'string',
            isRequired: false,
            description:
              'This is the ip address of the user. Remember that the maximum length of ip_address can be 256 characters.'
          },
          {
            name: 'city',
            type: 'string',
            isRequired: false,
            description:
              'This is the ip address of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'region',
            type: 'string',
            isRequired: false,
            description:
              'This is the region of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'country',
            type: 'string',
            isRequired: false,
            description:
              'This is the country of the user. Remember that the maximum length of captcha code can be 256 characters.'
          },
          {
            name: 'timezone',
            type: 'string',
            isRequired: false,
            description:
              'This is the timezone of the user. Remember that the maximum length of captcha code can be 256 characters.'
          }
        ],
        description: 'It will update a new user event based on the id.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 4,
              uuid: 'be8e7c04-6fa4-4894-9351-d007b55bfda5',
              user: 1,
              user_email: 'mmmohajer70@gmail.com',
              ip_address: '149.04.34.43',
              city: 'Ottawa',
              region: 'ON',
              country: 'CA',
              event: 'opened_the_app',
              timezone: 'America',
              created_at: '2023-02-23T15:35:21.044558-05:00',
              updated_at: '2023-02-23T15:35:21.044636-05:00'
            },
            description: 'Returns the updated user event schema.'
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
        title: 'Delete a user event',
        method: 'DELETE',
        url: '/api/user-event/<int:id>',
        authorizedGroups: ['Admin'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description: 'It will delete the current existing user event.',
        responses: [
          {
            type: 'success',
            code: 204,
            ex: {},
            description: 'Returns no content.'
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
