export const BLOG_APIS = [
  {
    category: 'blog',
    info: ``,
    endpoints: [
      {
        title: 'Show all blogs',
        method: 'GET',
        url: '/api/blog/',
        authorizedGroups: ['Anyone'],
        queryParams: [
          {
            name: 'page_number',
            type: 'integer',
            isRequired: false,
            description: 'Number of page in the paginated list of data'
          }
        ],
        description: 'It will list all the blogs in a paginated format',
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
                  writer: 'Mohammad Mohajer',
                  title: 'Test',
                  content: '<p>Hello, <strong>troop context for </strong>test only</p>',
                  excerpt: 'Test Excerpt',
                  preview_photo: '/static/media/blogs/Aug_2023_SCL4ryD.jpg',
                  preview_photo_from_url: null,
                  slug: 'test',
                  is_draft: false,
                  published_date: '2023-08-09T18:17:42.719536-04:00',
                  is_popular: true,
                  created_at: '2023-08-09T18:17:42.719536-04:00',
                  updated_at: '2023-08-09T18:17:42.719536-04:00'
                },
                '...'
              ]
            },
            description: 'List all blogs. Each page includes 10 numbers of blogs.'
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
        title: 'Create a blog',
        method: 'POST',
        url: '/api/captcha/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'title',
            type: 'string',
            isRequired: true,
            description: 'This is the title of a blog.'
          },
          {
            name: 'slug',
            type: 'string',
            isRequired: false,
            description:
              'This is the slug of a blog, if you leave it blank, automatically a slug will be created from the title of the blog.'
          },
          {
            name: 'content',
            type: 'string',
            isRequired: true,
            description: 'This is the content of a blog, it can be html code.'
          },
          {
            name: 'excerpt',
            type: 'string',
            isRequired: false,
            description: 'This is the excerpt of a blog, i.e. a short description of the blog.'
          },
          {
            name: 'preview_photo',
            type: 'file',
            isRequired: false,
            description: 'Allowed format: .jpg, .jpeg, .png'
          },
          {
            name: 'is_popular',
            type: 'boolean',
            isRequired: false,
            description: 'true, means this is a popular post.'
          },
          {
            name: 'published_date',
            type: 'date',
            isRequired: false,
            description: 'Date of the blog post being published.'
          }
        ],
        description: 'It will create a new blog.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'c7e3d595-3785-48db-802a-fffea7c09d71',
              writer: 'Mohammad Mohajer',
              title: 'Test',
              content: '<p>Hello, <strong>troop context for </strong>test only</p>',
              excerpt: 'Test Excerpt',
              preview_photo: '/static/media/blogs/Aug_2023_SCL4ryD.jpg',
              preview_photo_from_url: null,
              slug: 'test',
              is_draft: false,
              published_date: '2023-08-09T18:17:42.719536-04:00',
              is_popular: true,
              created_at: '2023-08-09T18:17:42.719536-04:00',
              updated_at: '2023-08-09T18:17:42.719536-04:00'
            },
            description: 'Returns the blog schema.'
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
        title: 'Update a blog',
        method: 'PUT',
        url: '/api/blog/<str:slug>',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'title',
            type: 'string',
            isRequired: false,
            description: 'This is the title of a blog.'
          },
          {
            name: 'slug',
            type: 'string',
            isRequired: false,
            description:
              'This is the slug of a blog, if you leave it blank, automatically a slug will be created from the title of the blog.'
          },
          {
            name: 'content',
            type: 'string',
            isRequired: false,
            description: 'This is the content of a blog, it can be html code.'
          },
          {
            name: 'excerpt',
            type: 'string',
            isRequired: false,
            description: 'This is the excerpt of a blog, i.e. a short description of the blog.'
          },
          {
            name: 'preview_photo',
            type: 'file',
            isRequired: false,
            description: 'Allowed format: .jpg, .jpeg, .png'
          },
          {
            name: 'is_popular',
            type: 'boolean',
            isRequired: false,
            description: 'true, means this is a popular post.'
          },
          {
            name: 'published_date',
            type: 'date',
            isRequired: false,
            description: 'Date of the blog post being published.'
          }
        ],
        description: 'It will update the blog schema and returns the updated blog.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'c7e3d595-3785-48db-802a-fffea7c09d71',
              writer: 'Mohammad Mohajer',
              title: 'Test',
              content: '<p>Hello, <strong>troop context for </strong>test only</p>',
              excerpt: 'Test Excerpt',
              preview_photo: '/static/media/blogs/Aug_2023_SCL4ryD.jpg',
              preview_photo_from_url: null,
              slug: 'test',
              is_draft: false,
              published_date: '2023-08-09T18:17:42.719536-04:00',
              is_popular: true,
              created_at: '2023-08-09T18:17:42.719536-04:00',
              updated_at: '2023-08-09T18:17:42.719536-04:00'
            },
            description: 'Returns the blog schema.'
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
        title: 'Delete a blog',
        method: 'DELETE',
        url: '/api/blog/<str:slug>',
        authorizedGroups: ['Anyone'],
        description: 'It will delete the current existing blog.',
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
