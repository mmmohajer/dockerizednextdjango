export const SAMPLE_APIS = [
  {
    category: 'Sample API',
    endpoints: [
      {
        method: 'GET',
        url: '/api/sample-api/',
        queryParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        description: 'sample-api',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { name: 'Text', age: 10 },
            description: 'Success'
          },
          {
            type: 'error',
            code: 400,
            ex: { name: 'Text', type: 'string' },
            description: 'Error'
          }
        ]
      },

      {
        method: 'POST',
        url: '/api/sample-api/',
        bodyParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        queryParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        description: 'sample-api',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { name: 'Text', age: 10 },
            description: 'Success'
          },
          {
            type: 'error',
            code: 400,
            ex: { name: 'Text', type: 'string' },
            description: 'Error'
          }
        ]
      },

      {
        method: 'PUT',
        url: '/api/sample-api/<int:id>/',
        bodyParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        queryParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        description: 'sample-api',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { name: 'Text', age: 10 },
            description: 'Success'
          },
          {
            type: 'error',
            code: 400,
            ex: { name: 'Text', type: 'string' },
            description: 'Error'
          }
        ]
      },

      {
        method: 'DELETE',
        url: '/api/sample-api/<int:id>/',
        bodyParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        queryParams: [
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: true, description: 'Text Field' },
          { name: 'text', type: 'string', isRequired: false, description: 'Text Field' }
        ],
        description: 'sample-api',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: { name: 'Text', age: 10 },
            description: 'Success'
          },
          {
            type: 'error',
            code: 400,
            ex: { name: 'Text', type: 'string' },
            description: 'Error'
          }
        ]
      }
    ]
  }
];
