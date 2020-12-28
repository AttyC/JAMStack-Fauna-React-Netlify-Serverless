const axios = require('axios');
require('dotenv').config();

const {DELETE_STORY} = require('./utils/storyQueries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse.js');

exports.handler = async (event) => {

  if (event.httpMethod !== 'DELETE') {
    return formattedResponse(405, { err: 'Method not supported' });
  }

  const { id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const { deleteStory: deletedStory} = await sendQuery(
      DELETE_STORY, 
      variables
      );
   
    return formattedResponse(200, deletedStory );
  
  } catch(err) {
    console.error(err);
    return  formattedResponse(500, {err: 'Something went wrong'});
  }

};