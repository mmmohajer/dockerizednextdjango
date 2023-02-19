export const CAPTCHA_APIS = [
  {
    category: 'Captcha',
    info: ``,
    endpoints: [
      {
        title: 'Show all Captchas',
        method: 'GET',
        url: '/api/captcha/',
        authorizedGroups: ['Anyone'],
        queryParams: [
          {
            name: 'page',
            type: 'integer',
            isRequired: false,
            description: 'Number of page in the paginated list of data'
          }
        ],
        description: 'It will list all the profiles in a paginated format',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              count: 'NUMBER_OF_ALL_PROFILES',
              next: 'URL_TO_THE_NEXT_PAGE or null',
              previous: 'URL_TO_THE_PREVIOUS_PAGE or null',
              results: [
                {
                  id: 1,
                  uuid: 'c7e3d595-3785-48db-802a-fffea7c09d71',
                  captcha: 'ybUi8w',
                  is_active: true,
                  created_at: '2023-02-19T11:13:21.160230-05:00',
                  updated_at: '2023-02-19T11:13:21.160241-05:00'
                },
                '...'
              ]
            },
            description: 'List all captchs. Each page includes 15 numbers of captchas.'
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
        title: 'Request to get a captcha',
        method: 'POST',
        url: '/api/captcha/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'captcha',
            type: 'string',
            isRequired: false,
            description:
              'This is the captch code, if you leave it blank, automatically a new captcha code will be created. Remember that the maximum length of captcha code can be 12 characters.'
          },
          {
            name: 'is_active',
            type: 'boolean',
            isRequired: false,
            description:
              'If is not set, automatically the captcha at the time of creation will be active.'
          }
        ],
        description:
          "It will create a new active captcha and return it as a result. Note that the captcha will be verified only if it's status is active.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'afc98e1a-5261-43ff-aa22-b5c4a87b4388',
              captcha: 'fGPaDp',
              is_active: true,
              created_at: '2023-02-19T11:23:56.712428-05:00',
              updated_at: '2023-02-19T11:23:56.712492-05:00'
            },
            description: 'Returns the captcha schema.'
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
        title: 'Update a captcha',
        method: 'PUT',
        url: '/api/captcha/<int:id>',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'captcha',
            type: 'string',
            isRequired: false,
            description:
              'This is the captch code, if you leave it blank, automatically a new captcha code will be created. Remember that the maximum length of captcha code can be 12 characters.'
          },
          {
            name: 'is_active',
            type: 'boolean',
            isRequired: false,
            description: 'Determines whether or not the captcha must be active.'
          }
        ],
        description:
          'It will create update the captcha schema and returns a new captcha schema with a new code.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'afc98e1a-5261-43ff-aa22-b5c4a87b4388',
              captcha: 'fGPaDp',
              is_active: true,
              created_at: '2023-02-19T11:23:56.712428-05:00',
              updated_at: '2023-02-19T11:23:56.712492-05:00'
            },
            description: 'Returns the captcha schema.'
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
        title: 'Delete a captcha',
        method: 'DELETE',
        url: '/api/captcha/<int:id>',
        authorizedGroups: ['Anyone'],
        description: 'It will delete the current existing captcha.',
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
