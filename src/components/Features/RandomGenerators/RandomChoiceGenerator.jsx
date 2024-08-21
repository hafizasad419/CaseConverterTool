import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomChoiceGenerator = () => {
    const generateChoice = async () => {
        // Define your choices
        const choices = [
            "Do 10 push-ups without stopping.",
            "Sing a song in public.",
            "Try to lick your elbow.",
            "Eat a spoonful of mustard.",
            "Hold an ice cube in your hand until it melts.",
            "Tell a joke.",
            "Do a silly dance.",
            "Attempt a cartwheel.",
            "Recite a poem from memory.",
            "Try to balance a book on your head for 30 seconds.",
            "Do 20 jumping jacks.",
            "Try to touch your toes without bending your knees.",
            "Make a funny face.",
            "Try to hold a plank for 30 seconds.",
            "Do a handstand against a wall.",
            "Recite the alphabet backwards.",
            "Try to touch your nose with your tongue.",
            "Make a paper airplane and throw it as far as you can.",
            "Try to juggle three objects.",
            "Do a somersault.",
            "Name all the planets in the solar system.",
            "Count backwards from 100 to 1.",
            "Try to solve a Rubik's Cube.",
            "Do a split.",
            "Recite the Pledge of Allegiance.",
            "Try to balance a pencil on your finger.",
            "Do a headstand.",
            "Recite the first 10 digits of pi.",
            "Try to do a pull-up.",
            "Do a backflip (with a spotter if necessary)."
          ];
        // Select a random choice
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    };

    return (
        <RandomGeneratorLayout
            title="Random Choice Generator"
            description="Generate a random choice from a predefined list."
            generateContent={generateChoice}
            downloadLabel="Choice"
        />
    );
};

export default RandomChoiceGenerator;
