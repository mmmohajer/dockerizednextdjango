export const nameValidators = [
  { type: 'required', message: 'Name is required' },
  {
    type: 'minRequired',
    message: 'Name must be at least 3 characters',
    minRequired: 3
  },
  {
    type: 'maxRequired',
    message: 'Name must be less than 100 characters',
    maxRequired: 100
  }
];

export const emailValidators = [
  {
    type: 'email',
    message: 'Please type a valid email address or leave it as empty'
  },
  {
    type: 'maxRequired',
    message: 'Email must be less than 100 characters',
    maxRequired: 100
  }
];

export const jobTitleValidators = [
  { type: 'required', message: 'Job Title is required' },
  {
    type: 'minRequired',
    message: 'Job Title must be at least 2 characters',
    minRequired: 2
  },
  {
    type: 'maxRequired',
    message: 'Job Title must be less than 100 characters',
    maxRequired: 100
  }
];

export const messageValidators = [{ type: 'required', message: 'Message is required' }];
