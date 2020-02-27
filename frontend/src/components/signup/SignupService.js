const baseUrl = process.env.REACT_APP_API_URL + '/api-superdraftfantasy/users';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response) {
    return new Promise((resolve) => response.json()
      .then((json) => resolve({
        status: response.status,
        ok: response.ok,
        json,
      })));
  }

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} requestUrl       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
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