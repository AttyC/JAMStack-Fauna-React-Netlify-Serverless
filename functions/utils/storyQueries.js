const GET_STORIES = `
query {
  allStories {
    data {
      _id
      title
      subtitle
      body
      image
      archived
    }
  }
}`;

const CREATE_STORY = `
mutation($title: String!, $subtitle: String!, $summary: String, $body: String!, $image: String) {
  createStory(data: {
    title: $title,
    subtitle: $subtitle,
    summary: $summary,
    body: $body,
    image: $image,
    archived: false
  }) {
    _id
    title
    subtitle
    summary
    body
    image
    archived
  }
}
`;


const UPDATE_STORY = `
  mutation($id: ID!, $title: String!, $subtitle: String!, $summary: String, $body: String!, $image: String) {
    updateStory(    
      id: $id,
      data: {
        title: $title,
        subtitle: $subtitle,
        summary: $summary,
        body: $body,
        image: $image,
        archived: $archived
    }) {
      _id
      title
      subtitle
      summary
      body
      image
      archived
    }
  }
`;

const DELETE_STORY = `
  mutation($id: ID!){
    deleteStory( id: $id) {
      _id
    }
    
  }
`;

module.exports = {
  GET_STORIES,
  CREATE_STORY,
  UPDATE_STORY,
  DELETE_STORY
}