export const AUTHENTICATION_APIS = [
  {
    category: 'Authentication',
    info: `<p>For registering a new user we need to send a request to get a captcha code, and we need to send captcha_uuid and user_captcha code along with the post request to verify if a human is sending the request. </p>
    <p>As soon as user successfully registers to the app, an email will be sent to the user's email address with an activation link, in which there is a token which expires after 15 minutes. </p>`,
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
            name: 'group_name',
            type: 'array',
            isRequired: false,
            description:
              'List of the groups that will be assigned to the user, for example, we can assign Admin, or Developer group to the user.'
          },
          {
            name: 'ip_address',
            type: 'string',
            isRequired: false,
            description:
              'If you send ip address along with the request, it will increase the security of logging in to the application, such that if someone makes more than 5 unsuccessful login attempts within 24 hours, the associated ip address will be banned to send a new login request.'
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
        title: 'Logout a user',
        method: 'POST',
        url: '/api/logout/',
        authorizedGroups: ['Anyone'],
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
      },

      // ---------------------------------------

      {
        title: 'Update access token',
        method: 'POST',
        url: '/api/auth/jwt/refresh/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'refresh',
            type: 'string',
            isRequired: true,
            description: 'Refresh token'
          }
        ],
        description:
          'It will update access token. Remember that you need to update access token before it expires.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              access: 'ACCESS_TOKEN'
            },
            description: 'Gives you the updated access token.'
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
        title: 'Resend activation email',
        method: 'POST',
        url: '/api/resend-activation-email/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'email',
            type: 'string',
            isRequired: true,
            description: 'User email address'
          }
        ],
        description: "It will send a new activation email to user's email address",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              email_sent: true,
              message: 'Email has been successfully sent!'
            },
            description: "Email with the activation link will be sent to the user's email address"
          },
          {
            type: 'error',
            code: 400,
            ex: { email_sent: false, message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Send reset password email',
        method: 'POST',
        url: '/api/send-reset-password-email/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'email',
            type: 'string',
            isRequired: true,
            description: 'User email address'
          }
        ],
        description: "It will send an email with a link to reset user's password",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              email_sent: true,
              message: 'Please check your inbox to reset your password!'
            },
            description: "Email with the activation link will be sent to the user's email address"
          },
          {
            type: 'error',
            code: 400,
            ex: { email_sent: false, message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: "Reset user's password (When forgot the password)",
        method: 'POST',
        url: '/api/reset-password/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'userId',
            type: 'integer',
            isRequired: true,
            description: 'The id of the user'
          },
          {
            name: 'token',
            type: 'string',
            isRequired: true,
            description: 'Token drawn out from the link in the email being sent.'
          },
          {
            name: 'password',
            type: 'string',
            isRequired: true,
            description: 'New password'
          }
        ],
        description: "It will update the user's password.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              password_reset: true,
              message: 'Pasword has been reset successfully!'
            },
            description: "User's password will be updated."
          },
          {
            type: 'error',
            code: 400,
            ex: { password_reset: false, message: 'Error Message' },
            description: ''
          }
        ]
      },

      // ---------------------------------------

      {
        title: 'Authenticate the user',
        method: 'POST',
        url: '/api/auth/authenticate-user/',
        authorizedGroups: ['Anyone'],
        description: 'It will authenticate the user.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              Authenticated: true
            },
            description:
              'Authenticated is a boolean value determining whether or not the user has authenticated successfully.'
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
        title: 'Google auth ahthorization data',
        method: 'POST',
        url: '/api/auth/google-auth/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'code',
            type: 'string',
            isRequired: true,
            description: 'The code comes from the returned url after user logs in via google button'
          }
        ],
        description:
          "It will return the 'Authorization Data' from Google API, which includes access_token, id_token, etc.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              'Authorization Data': 'Object of data'
            },
            description:
              'Using the returned info you can retrieve the user email address and google profile information.'
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
        title: 'login/register with Google',
        method: 'POST',
        url: '/api/auth/google-auth-handle-token/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'id_token',
            type: 'string',
            isRequired: true,
            description: 'The id_token returned from the Google API.'
          }
        ],
        description:
          'If the user already exists, it will build access and refresh tokens to login the user, otherwise it will register the new user and will assign a profile to the newly registered user and then it will build access and refresh tokens to login the user.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              access: 'ACCESS_TOKEN',
              refresh: 'REFRESH_TOKEN'
            },
            description: 'Using the returned access and refresh tokens user can login.'
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
        title: 'Microsoft auth ahthorization data',
        method: 'POST',
        url: '/api/auth/microsoft-auth/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'code',
            type: 'string',
            isRequired: true,
            description:
              'The code comes from the returned url after user logs in via Microsoft button'
          }
        ],
        description:
          "It will return the 'Authorization Data' from Microsoft API, which includes access_token, id_token, etc.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              'Authorization Data': 'Object of data'
            },
            description:
              'Using the returned info you can retrieve the user email address and Microsoft profile information.'
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
        title: 'login/register with Microsoft',
        method: 'POST',
        url: '/api/auth/microsoft-auth-handle-token/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'id_token',
            type: 'string',
            isRequired: true,
            description: 'The id_token returned from the Microsoft API.'
          }
        ],
        description:
          'If the user already exists, it will build access and refresh tokens to login the user, otherwise it will register the new user and will assign a profile to the newly registered user and then it will build access and refresh tokens to login the user.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              access: 'ACCESS_TOKEN',
              refresh: 'REFRESH_TOKEN'
            },
            description: 'Using the returned access and refresh tokens user can login.'
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
        title: 'Facebook auth ahthorization data',
        method: 'POST',
        url: '/api/auth/facebook-auth/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'code',
            type: 'string',
            isRequired: true,
            description:
              'The code comes from the returned url after user logs in via Facebook button'
          }
        ],
        description:
          "It will return the 'Authorization Data' from Facebook API, which includes access_token, id_token, etc.",
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              'Authorization Data': 'Object of data'
            },
            description:
              'Using the returned info you can retrieve the user email address and Facebook profile information.'
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
        title: 'login/register with Facebook',
        method: 'POST',
        url: '/api/auth/facebook-auth-handle-token/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'id_token',
            type: 'string',
            isRequired: true,
            description: 'The id_token returned from the Facebook API.'
          }
        ],
        description:
          'If the user already exists, it will build access and refresh tokens to login the user, otherwise it will register the new user and will assign a profile to the newly registered user and then it will build access and refresh tokens to login the user.',
        responses: [
          {
            type: 'success',
            code: 200,
            ex: {
              access: 'ACCESS_TOKEN',
              refresh: 'REFRESH_TOKEN'
            },
            description: 'Using the returned access and refresh tokens user can login.'
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
        title: 'Delete a user',
        method: 'DELETE',
        url: '/api/auth/delete-users/<int:id>/',
        authorizedGroups: ['Anyone'],
        bodyParams: [
          {
            name: 'password',
            type: 'string',
            isRequired: true,
            description:
              'This is the password of the user you want to delete. Remember that the password field can be bypassed only if the user belongs to the "Admin" group. Admin of the app can delete a user without knowing their password.'
          }
        ],
        description: 'id in the url is the id of the user that you want to delete.',
        responses: [
          {
            type: 'success',
            code: 204,
            ex: {},
            description: 'Return nothing as the response.'
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
