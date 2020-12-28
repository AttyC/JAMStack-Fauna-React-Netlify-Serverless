import React, { useEffect, useState } from 'react';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
//Grab all of the stories
//display all of the stories
//add delete and archive functionality
function App() {
    const [stories, setStories] = useState([]);
    const loadStories = async () => {
        try {
            const res = await fetch('/.netlify/functions/getStories');
            const stories = await res.json();
            setStories(stories);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadStories();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">List O' Stories</h1>
            <StoryForm refreshStories={loadStories} />
            <StoryList stories={stories} refreshStories={loadStories} />
        </div>
    );
}

export default App;
