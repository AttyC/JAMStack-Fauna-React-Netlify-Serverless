import React from 'react'

export default function StoryCard({story, refreshStories}) {

  const archiveStory = async () => {

    story.archived = true;
    try {
      await fetch('/api/updateStory', {
        method: 'PUT',
        body: JSON.stringify(story)
      });
      refreshStories();
    } catch(error) {
        console.error("Something went wrong", error);      
    }
  }

  const deleteStory = async () => {
    const id = story._id;

    try {
      await fetch('/api/deleteStory', {
        method: 'DELETE',
        body: JSON.stringify({id})
      });
      refreshStories();
    } catch(error) {
        console.error("Something went wrong", error);      
    }
  }


  return (
    <div className="card">
      <div className="card-header">
        {story.title}
      </div>
      <div className="card-body">
        {/* <a href={story.url}>{story.url}</a> */}
        <p>{story.summary}</p>
      </div>
<div className="card-footer">
  <button className="btn btn-warning mr-2" onClick={archiveStory}>Archive</button>
  <button className="btn btn-danger" onClick={deleteStory}>Delete</button>
</div>
    </div>
  )
}
