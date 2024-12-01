'use client';
import { Grid2 } from '@mui/material';
import SingleQnA from "./components/single-qna";
import Playground from "./components/playground";  // Import the Playground
import { useState } from 'react';

const questions = [
 "What is the name of the course you're trying to build?",
 "What is the Course About? (Explain under 50 words)",
 "Who is the Target Audience? (Students or Employees)"
];

const CourseCreation = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [opacity, setOpacity] = useState(1);
    const [isQuestionsComplete, setIsQuestionsComplete] = useState(false);
    const [showPlayground, setShowPlayground] = useState(false);
 
    const handleNext = (answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestion]: answer,
        }));
 
        if (currentQuestion >= questions.length - 1) {
            setOpacity(0);
            setTimeout(() => {
                setIsQuestionsComplete(true);
                setOpacity(1);
            }, 300);
        } else {
            setOpacity(0);
            setTimeout(() => {
                setCurrentQuestion((prev) => prev + 1);
                setOpacity(1);
            }, 300);
        }
    };
 
    return (
        <Grid2 container sx={{ height: "100%", width: "100%" }}>
            <Grid2
                sx={{
                    opacity,
                    transition: 'opacity 0.5s ease-in-out',
                    height: '100%',
                    width: '100%',
                }}
            >
                {isQuestionsComplete ? (
                    <Playground />
                ) : (
                    <SingleQnA
                        key={currentQuestion}
                        question={questions[currentQuestion]}
                        onNext={handleNext}
                        isLastQuestion={currentQuestion >= questions.length - 1}
                    />
                )}
            </Grid2>
        </Grid2>
    );
 };

export default CourseCreation;