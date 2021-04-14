import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';


function App() {
    return <div><Header /> {notes.map(currentNote => <Note 
        key={currentNote.key}
        title={currentNote.title}
        content={currentNote.content}
    />)} <Footer /></div>;
}

export default App;