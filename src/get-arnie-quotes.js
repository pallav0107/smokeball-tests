const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async(urls) => {

    // get the promises
    const promises = urls.map(async(url) => {

        // execute the httpGet mock
        const { status, body } = await httpGet(url).then(error => error);

        // parse the body and extract message
        const { message } = JSON.parse(body);

        // based on status code return the object
        if (status === 200) {
            return { 'Arnie Quote': message };
        } else {
            return { 'FAILURE': message };
        }
    });

    // return all promises
    return Promise.all(promises);
};

module.exports = {
    getArnieQuotes,
};