const axios = require('axios');
require('dotenv').config();

const {GET_LINKS} = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse.js');

exports.handler = async (event) => {
  
  if (event.httpMethod !== 'GET') {
    return formattedResponse(405, { err: 'Method not supported' });
  }

  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formattedResponse(200,data);
  
  } catch(err) {
    console.error(err);
    return  formattedResponse(500, {err: 'Something went wrong'});
  }

};