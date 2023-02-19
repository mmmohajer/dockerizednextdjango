export const CHAT_APIS = [
  {
    category: 'Chat',
    info: ``,
    endpoints: [
      {
        title: 'Show all Public rooms',
        method: 'GET',
        url: '/api/public-chat-room/',
        authorizedGroups: ['Anyone'],
        queryParams: [
          {
            name: 'page',
            type: 'integer',
            isRequired: false,
            description: 'Number of page in the paginated list of data'
          }
        ],
        description:
          'It will list all the public chat rooms in a paginated format. Every page includes up to 15 rooms.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              count: 1,
              next: null,
              previous: null,
              results: [
                {
                  id: 1,
                  uuid: '206d040e-7543-45f4-9002-c8109892acdd',
                  title: 'Public',
                  created_at: '2023-02-19T12:45:59.918842-05:00',
                  updated_at: '2023-02-19T12:45:59.918857-05:00'
                },
                '...'
              ]
            },
            description: 'List all public chat rooms. Each page includes 15 numbers of captchas.'
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
        title: 'Create a public chat room',
        method: 'POST',
        url: '/api/public-chat-room/',
        authorizedGroups: ['Admin'],
        bodyParams: [
          {
            name: 'title',
            type: 'string',
            isRequired: true,
            description: 'Title of the new chatroom'
          }
        ],
        description: 'It will create a new room to the list of all public rooms.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: '206d040e-7543-45f4-9002-c8109892acdd',
              title: 'Public',
              created_at: '2023-02-19T12:45:59.918842-05:00',
              updated_at: '2023-02-19T12:45:59.918857-05:00'
            },
            description: 'Returns the new chat schema.'
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
        title: 'Retrieve a public chat room',
        method: 'GET',
        url: '/api/public-chat-room/<int:id>',
        authorizedGroups: ['Anyone'],
        description: 'It will return the current chat schema based on the id.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: '206d040e-7543-45f4-9002-c8109892acdd',
              title: 'Public',
              created_at: '2023-02-19T12:45:59.918842-05:00',
              updated_at: '2023-02-19T12:45:59.918857-05:00'
            },
            description: 'Returns the current chat schema.'
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
        title: 'Update a public chat room',
        method: 'PUT',
        url: '/api/public-chat-room/<int:id>',
        authorizedGroups: ['Admin'],
        bodyParams: [
          {
            name: 'title',
            type: 'string',
            isRequired: false,
            description: 'Updated title of the current chatroom'
          }
        ],
        description: 'It will update the current chat info based on the id.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: '206d040e-7543-45f4-9002-c8109892acdd',
              title: 'General',
              created_at: '2023-02-19T12:45:59.918842-05:00',
              updated_at: '2023-02-19T12:53:23.123395-05:00'
            },
            description: 'Returns the current chat schema.'
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
        title: 'Delete a public chat room',
        method: 'DELETE',
        url: '/api/public-chat-room/<int:id>',
        authorizedGroups: ['Admin'],
        description: 'It will delete the current room based on the id.',
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

      // ---------------------------------------
    ]
  }
];
