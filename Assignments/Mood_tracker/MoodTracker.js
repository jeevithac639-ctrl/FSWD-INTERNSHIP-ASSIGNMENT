// MoodTracker.js
import React, { useState } from 'react';

function MoodTracker() {
    const [mood, setMood] = useState('');
    const moods = ['Happy', 'Sad', 'Excited', 'Tired'];

    return (
        <div>
            <h1>How are you feeling?</h1>
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">Select</option>
                {moods.map((m) => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <p>You are feeling: {mood}</p>
            {mood && <p style={{ color: mood === 'Happy' ? 'green' : mood === 'Sad' ? 'red' : 'blue' }}>{mood} mood detected!</p>}
        </div>
    );
}

export default MoodTracker;
