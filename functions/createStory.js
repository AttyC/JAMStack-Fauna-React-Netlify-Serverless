const axios = require('axios');
require('dotenv').config();

const {CREATE_STORY} = require('./utils/storyQueries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse.js');

exports.handler = async (event) => {

  if (event.httpMethod !== 'POST') {
    return formattedResponse(405, { err: 'Method not supported' });
  }

  const {title, subtitle, summary, body, image} = JSON.parse(event.body);
  const variables = { title, subtitle, summary, body, image, archived: false};

  try {
    const {createStory: createdStory} = await sendQuery(CREATE_STORY, variables);
   
    return formattedResponse(200, createdStory);
  
  } catch(err) {
    console.error(err);
    return  formattedResponse(500, {err: 'Something went wrong'});
  }

};