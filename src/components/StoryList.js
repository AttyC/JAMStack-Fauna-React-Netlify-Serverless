import React from 'react'
import StoryCard from './StoryCard';

export default function StoryList({stories, refreshStories}) {

  console.log('stories', stories)
  return (
    <div>
      <h2 className="my-4">Stories</h2>
      {/* {stories && stories.filter(story => !story.archived).map(story => <StoryCard 
        key={story._id} 
        story={story} 
        refreshStories={refreshStories}/>
      )} */}
       {stories.map(story => <StoryCard 
        key={story._id} 
        story={story} 
        refreshStories={refreshStories}/>
      )}
       <h2 className="my-4">Archived Stories</h2>
      {/* {stories && stories.filter(story => story.archived).map(story => <StoryCard 
        key={story._id} 
        story={story} 
        refreshStories={refreshStories}/>
      )} */}


    </div>
  )
}
