import ConfigurationHelper from '../utils/ConfigurationUtils.js';

const baseUrl = ConfigurationHelper.getBaseUrl();

function parseJSON(response) {
    return new Promise((resolve) => response.json()
      .then((json) => resolve({
        status: response.status,
        ok: response.ok,
        json,
      })));
  }

function request(requestUrl, options) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + requestUrl, options)
        .then(parseJSON)
        .then((response) => {
          if (response.ok) {
            return resolve(response.json);
          }
          return reject(response.json.status + " Error: " + response.json.message);
        })
        .catch((error) => reject({
          networkError: error.message,
        }));
    });
  }

const SignupService = {

    signup(user) {
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        };
        return request('/sign-up', options);
    }

}

export default SignupService;
