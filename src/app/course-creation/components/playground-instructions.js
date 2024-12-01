'use client'
import { Poppins } from 'next/font/google';
import { Grid2 } from '@mui/material';
import { Button, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
 });
 

const Instructions = () => {
   const questions = [
       "What are the prerequisites for this course?",
       "What will students learn in this course?",
       "How long will this course take to complete?",
       "What kind of feedback will students receive?",
       "What are the expected outcomes?"
   ];

   return (
    <Grid2 container direction="column" sx={{ 
        height: '100%', 
        width: "100%", 
        p: 2
    }}>
        <Grid2 container direction="column" sx={{ 
            height: "93%", 
            overflowY: 'auto'
        }}>
            <h2 
            style={{
                color: "#000",
                fontWeight: 700,
                fontFamily: poppins.style.fontFamily   
            }}>Instructions</h2>
            {questions.map((question, index) => (
                <Grid2 key={index} container direction="column" sx={{ gap: 1, mb: 2 }}>
                    <h4 style={{ margin: 0, color: "#000", fontWeight: 400 }}>{question}</h4>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Enter your answer..."
                        style={{
                            width: '96%',
                            padding: '12px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            fontFamily: 'inherit',
                            backgroundColor:"#F5F5F5",
                            resize: 'none',
                            color: "#000"
                        }}
                    />
                </Grid2>
            ))}
        </Grid2>
        <Grid2 container sx={{ height: "7%", pt: 2 }} justifyContent="center" alignItems="center">
            <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                sx={{ 
                    backgroundColor: '#FFD364AA',
                    width: "100%",
                    color: '#000',
                    '&:hover': { 
                        backgroundColor: '#FFD364CC' 
                    }
                }}
            >
                Submit!
            </Button>
        </Grid2>
    </Grid2>
   );
};

export default Instructions;