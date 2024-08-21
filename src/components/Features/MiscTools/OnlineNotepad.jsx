import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styling

const OnlineNotepad = () => {
    const [text, setText] = useState('');

    const handleTextChange = (value) => {
        setText(value);
    };

    const modules = {
        toolbar: [
            [{ 'font': [] }, { 'size': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['direction', { 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']  // Remove formatting button
        ],
    };

    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'super', 'sub',
        'header', 'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'direction', 'align',
        'link', 'image', 'video'
    ];

    return (
        <div className="my-8 px-4">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Advanced Online Notepad</h1>
            <p className="text-center text-sm md:text-lg mb-6">Create and edit your notes with rich formatting options.</p>

            <div className="w-full lg:w-3/4 mx-auto">
                <ReactQuill
                    placeholder='Start Writing here please....'
                    value={text}
                    onChange={handleTextChange}
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 min-h-[100vh]"
                />
            </div>
        </div>
    );
};

export default OnlineNotepad;
