import Data from '../services/data.service';

export default (event, context, callback) => {
    var response;

    var data = new Data();
    var sites = data.sites();

    if (sites) {
        response = {
            statusCode: 200,
            body: JSON.stringify(sites),
        }
    } else {
        response = {
            statusCode: 500
        }
    }

    callback(null, response);
}