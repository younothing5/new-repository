const API KEY = '7cb85941a9b331492f3050f8414ec609';

const lat = '52.6264'

const lon = '10.0809'

const units = 'metric'

const request = async ({ url, method }) => {
  const response = await fetch(url, {
    method,
});

return console.log(response.json())
};

export default request;
