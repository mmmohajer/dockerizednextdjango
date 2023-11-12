export const passwordValidatorsInUpdatePasswordModal = [
  { type: 'required', message: 'This field is required' },
  {
    type: 'minRequired',
    message: 'Password must be at least 3 characters',
    minRequired: 3
  },
  {
    type: 'maxRequired',
    message: 'Password must be at less than 128 characters',
    maxRequired: 128
  }
];
