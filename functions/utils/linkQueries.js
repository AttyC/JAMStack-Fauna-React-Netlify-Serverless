const GET_LINKS = `
query {
  allLinks {
    data {
      name
      url
      description
      archived
      _id
    }
  }
}`;

const CREATE_LINK = `
mutation($name: String!, $url: String!, $description: String!) {
  createLink(data: {name: $name, 
    url: $url,
  	description: $description,
  	archived: false
  }) {
    _id
    url
    name
    description
    archived
  }
}
`;


const UPDATE_LINK = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!) {
    updateLink(    
      id: $id,
      data: {
        name: $name, 
        url: $url,
        description: $description,
        archived: $archived
    }) {
      _id
      url
      name
      description
      archived
    }
  }
`;

const DELETE_LINK = `
  mutation($id: ID!){
    deleteLink( id: $id) {
      _id
    }
    
  }
`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK
}