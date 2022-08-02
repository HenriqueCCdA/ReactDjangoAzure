export const BACKNED_URL = "_env_" in window ? window._env_.BACKNED_URL : 'http://localhost:8000/';

export const REGISTRATION_ENDPOINT = BACKNED_URL + 'api/users/register/';

export const VERIFY_EMAIL_ENDPOINT = BACKNED_URL + 'api/users/email/verify/';
