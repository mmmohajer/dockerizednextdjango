export const PROFILE_APIS = [
  {
    category: 'Profile',
    info: ``,
    endpoints: [
      {
        title: 'Show all profiles to Admin',
        method: 'GET',
        url: '/api/profile/',
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
                  uuid: 'b924a1f8-54e0-49a6-a259-0084466ec476',
                  user: {
                    id: 1,
                    uuid: '4808150d-66ff-4ad2-80d6-981170481fa4',
                    first_name: '',
                    last_name: '',
                    email: 'mmmohajer70@gmail.com',
                    groups: ['Admin', 'Developer']
                  },
                  phone_number: '+12269770855',
                  birth_date: '1991-05-18',
                  city: 'Ottawa',
                  country: 'Canada',
                  address: '719 Yellowstone court',
                  postal_code: 'K2J 5S4',
                  photo: 'http://localhost/static/media/users/IMG_5763_kRUE0cc.jpg',
                  status: 'ACTIVE'
                },
                '...'
              ]
            },
            description:
              'List all profiles to the admin of app. Each page includes 15 numbers of profiles.'
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
        title: 'Update a profile by Admin',
        method: 'PATCH',
        url: '/api/profile/<int:id>/',
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
            name: 'phone_number',
            type: 'string',
            isRequired: false,
            description: 'It must be in the format of +XXXXXXXXXXX'
          },
          {
            name: 'city',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'country',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'address',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'postal_code',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'photo',
            type: 'file',
            isRequired: false,
            description: 'Allowed format: .jpg, .jpeg, .png'
          },
          {
            name: 'status',
            type: 'string',
            isRequired: false,
            description: 'Allowed values are: "ACTIVE", "INACTIVE", "DISABLE".'
          }
        ],
        description: 'It will update the information for a profile.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'b924a1f8-54e0-49a6-a259-0084466ec476',
              user: {
                id: 1,
                uuid: '4808150d-66ff-4ad2-80d6-981170481fa4',
                first_name: '',
                last_name: '',
                email: 'mmmohajer70@gmail.com',
                groups: ['Admin', 'Developer']
              },
              phone_number: '+12269770855',
              birth_date: '1991-05-18',
              city: 'Ottawa',
              country: 'Canada',
              address: '719 Yellowstone court',
              postal_code: 'K2J 5S4',
              photo: 'http://localhost/static/media/users/IMG_5763_kRUE0cc.jpg',
              status: 'ACTIVE'
            },
            description: 'Returns the updated profile.'
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
        title: 'Delete a profile by Admin',
        method: 'DELETE',
        url: '/api/profile/<int:id>/',
        authorizedGroups: ['Admin'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description:
          'It will delete the specified profile by the id of the profile being passed in the url.',
        responses: [
          {
            type: 'success',
            code: 204,
            ex: {},
            description: 'Delete the specified profile, and returns no content.'
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
        title: 'Get my profile',
        method: 'GET',
        url: '/api/profile/me/',
        authorizedGroups: ['Authenticated user'],
        headerParams: [
          {
            name: 'Authorization',
            type: 'string',
            isRequired: true,
            description: 'JWT ACCESS_TOKEN'
          }
        ],
        description: "It will provide the information for the current user's profile.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'b924a1f8-54e0-49a6-a259-0084466ec476',
              user: {
                id: 1,
                uuid: '4808150d-66ff-4ad2-80d6-981170481fa4',
                first_name: '',
                last_name: '',
                email: 'mmmohajer70@gmail.com',
                groups: ['Admin', 'Developer']
              },
              phone_number: '+12269770855',
              birth_date: '1991-05-18',
              city: 'Ottawa',
              country: 'Canada',
              address: '719 Yellowstone court',
              postal_code: 'K2J 5S4',
              photo: 'http://localhost/static/media/users/IMG_5763_kRUE0cc.jpg',
              status: 'ACTIVE'
            },
            description: "Provide the information of the current user's profile."
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
        title: "Update current user's profile",
        method: 'PUT',
        url: '/api/profile/me/',
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
            name: 'phone_number',
            type: 'string',
            isRequired: false,
            description: 'It must be in the format of +XXXXXXXXXXX'
          },
          {
            name: 'city',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'country',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'address',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'postal_code',
            type: 'string',
            isRequired: false,
            description: 'Maximum of 256 characters'
          },
          {
            name: 'photo',
            type: 'file',
            isRequired: false,
            description: 'Allowed format: .jpg, .jpeg, .png'
          },
          {
            name: 'status',
            type: 'string',
            isRequired: false,
            description: 'Allowed values are: "ACTIVE", "INACTIVE", "DISABLE".'
          }
        ],
        description: 'It will update the information for a profile.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'b924a1f8-54e0-49a6-a259-0084466ec476',
              user: {
                id: 1,
                uuid: '4808150d-66ff-4ad2-80d6-981170481fa4',
                first_name: '',
                last_name: '',
                email: 'mmmohajer70@gmail.com',
                groups: ['Admin', 'Developer']
              },
              phone_number: '+12269770855',
              birth_date: '1991-05-18',
              city: 'Ottawa',
              country: 'Canada',
              address: '719 Yellowstone court',
              postal_code: 'K2J 5S4',
              photo: 'http://localhost/static/media/users/IMG_5763_kRUE0cc.jpg',
              status: 'ACTIVE'
            },
            description: 'Returns the updated profile.'
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
        title: "Delete current user's profile",
        method: 'DELETE',
        url: '/api/profile/me/',
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
          "It will delete the current profile and it's associated user by the id of the profile being passed in the url.",
        responses: [
          {
            type: 'success',
            code: 204,
            ex: {},
            description: "Delete the profile and it's associated user and returns no content."
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
