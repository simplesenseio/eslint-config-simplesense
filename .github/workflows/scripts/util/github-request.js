(() => {
  'use strict';

  const { request } = require('https');

  const {
    GITHUB_API_URL,
    GH_ACCESS_TOKEN,
  } = process.env;

  async function sendRequest({ path, method }, data = null, reqHeaders = {}) {
    return new Promise((resolve, reject) => {
      const params = {
        host: GITHUB_API_URL.replace('https://', ''),
        port: 443,
        method,
        path,
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${ GH_ACCESS_TOKEN }`,
          'User-Agent': 'NodeJs HTTPS Request',
          ...reqHeaders,
        },
      };

      if (null !== data) {
        data = JSON.stringify(data);
        params.headers['Content-Length'] = Buffer.byteLength(data);
      }

      // eslint-disable-next-line consistent-return
      const req = request(params, (res) => {
        const { statusCode } = res;

        if (statusCode < 200 || statusCode >= 300) {
          const err = new Error(`${ params.path } received HTTP response code of ${ statusCode }`);

          err.code = statusCode;
          console.log('Request error', params, err);
          return reject(err);
        }
        const resData = [];

        res.on('data', (chunk) => resData.push(chunk));
        res.on('end', () => {
          if (0 === resData.length) return resolve({});
          const contents = Buffer.concat(resData).toString();

          try {
            const body = JSON.parse(contents);

            return resolve(body);
          } catch (err) {
            console.log('Request error', params, contents, err);
            return reject(err);
          }
        });
      });

      req.on('error', reject);
      if (null !== data) {
        req.write(data);
      }
      req.end();
    });
  }

  async function get(path) {
    if ('string' !== typeof path) throw new TypeError('Invalid path');
    return sendRequest({ path, method: 'GET' });
  }

  async function patch(path, { data = null, headers = {}} = {}) {
    if ('string' !== typeof path) throw new TypeError('Invalid path');
    return sendRequest({ path, method: 'PATCH' }, data, headers);
  }

  async function post(path, { data = null, headers = {}} = {}) {
    if ('string' !== typeof path) throw new TypeError('Invalid path');
    return sendRequest({ path, method: 'POST' }, data, headers);
  }

  async function put(path, { data = null, headers = {}} = {}) {
    if ('string' !== typeof path) throw new TypeError('Invalid path');
    return sendRequest({ path, method: 'PUT' }, data, headers);
  }

  module.exports = {
    get,
    patch,
    post,
    put,
  };
})();
