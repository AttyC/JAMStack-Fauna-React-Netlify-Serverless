const axios = require('axios');
require('dotenv').config();

const {UPDATE_STORY} = require('./utils/storyQueries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse.js');

exports.handler = async (event) => {

  if (event.httpMethod !== 'PUT') {
    return formattedResponse(405, { err: 'Method not supported' });
  }
  const {title, subtitle, summary, body, image, archived, _id: id} = JSON.parse(event.body);
  const variables = {title, subtitle, summary, body, image, archived, id};

  try {
    const {updateStory: updatedStory} = await sendQuery(
      UPDATE_STORY, 
      variables
      );
   
    return formattedResponse(200, updatedStory);
  
  } catch(err) {
    console.error(err);
    return  formattedResponse(500, {err: 'Something went wrong'});
  }

};