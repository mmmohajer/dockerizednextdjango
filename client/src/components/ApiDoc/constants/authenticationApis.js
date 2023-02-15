export const AUTHENTICATION_APIS = [
  {
    category: 'Authentication',
    endpoints: [
      {
        title: 'Register a new user',
        method: 'POST',
        url: '/api/auth/users/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'first_name',
            type: 'string',
            isRequired: true,
            description: 'Maximum length of 256 characters.'
          },
          {
            name: 'last_name',
            type: 'string',
            isRequired: true,
            description: 'Maximum length of 256 characters.'
          },
          {
            name: 'email',
            type: 'string',
            isRequired: true,
            description: 'Maximum length of 256 characters.'
          },
          {
            name: 'password',
            type: 'string',
            isRequired: true,
            description: 'There are some rules to not allow the user to register a simple password.'
          },
          {
            name: 'captcha_uuid',
            type: 'string',
            isRequired: true,
            description:
              'This will come from API, it has been used in order to prevent multiple request by robots.'
          },
          {
            name: 'user_captcha_code',
            type: 'string',
            isRequired: true,
            description:
              'This should be the same as captch being beilt by the API, to verify this is a human making a request.'
          }
        ],
        description:
          'It will create a new user and assign the "Subscriber" group to this new user, if this group already exists in the database. Morevover, a new profile will be created for the new registered user. However, the user is not activated yet. So, an email with the activation link will be sent to the email address of the new user. Remember that the activation link consists of a token that expires in only 15 minutes, so the user has only 15 minutes, to click on that link.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              id: 1,
              uuid: 'cd57d184-17e1-4f48-bd10-97c20334db78',
              first_name: 'Mohammad',
              last_name: 'Mohajer',
              email: 'mail_address@gmail.com'
            },
            description: 'An email is sent to user email address with the activation link'
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
        title: 'Activate a new user account',
        method: 'POST',
        url: '/api/activate-user/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'token',
            type: 'string',
            isRequired: true,
            description:
              'A token created while a new user registers in the app. Remember that this token will expire after 5 minutes.'
          },
          {
            name: 'userId',
            type: 'integer',
            isRequired: true,
            description: 'The user id will be drawn out by decoding the token.'
          }
        ],
        description:
          'It will activate a new registered user, and it also create new access and refresh tokens making the user able to login.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              is_activated: true,
              message: 'User has been successfully activated!',
              access: 'ACCESS_TOKEN',
              refresh: 'REFRESH_TOKEN'
            },
            description: 'User account will be activated and new tokens will be created.'
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
        title: 'Login with email and password',
        method: 'POST',
        url: '/api/create-token/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'email',
            type: 'string',
            isRequired: true,
            description: 'User email address'
          },
          {
            name: 'password',
            type: 'string',
            isRequired: true,
            description: 'User password'
          },
          {
            name: 'keep_logged_in',
            type: 'boolean',
            isRequired: false,
            description:
              'If it is set to True, the token expiry duration wille thirty days, otherwise it will be only one day. By default it is set to False.'
          }
        ],
        description:
          'It will generate a pair of access and refresh tokens making the user able to login.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              access: 'ACCESS_TOKEN',
              refresh: 'REFRESH_TOKEN'
            },
            description: 'a pair of access and refresh tokens will be created.'
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
        title: 'Logout user',
        method: 'POST',
        url: '/api/logout/',
        authorizedGroups: ['Authenticated user'],
        bodyParams: [
          {
            name: 'refresh',
            type: 'string',
            isRequired: true,
            description: 'Refresh token'
          }
        ],
        description: 'It will block or manualy expire the refresh token.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              success: true,
              message: 'You have been successfully logged out'
            },
            description:
              'It will block or manualy expire the refresh token and resturn success as True.'
          },
          {
            type: 'error',
            code: 400,
            ex: { success: false, message: 'Error Message' },
            description: ''
          }
        ]
      }

      // ---------------------------------------
    ]
  }
];
