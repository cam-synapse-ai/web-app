'use client'
import { Poppins } from 'next/font/google';
import { Grid2 } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const poppins = Poppins({
   weight: ['400', '500', '600', '700'],
   subsets: ['latin'],
});

const SingleQnA = ({ question, onNext, isLastQuestion }) => {
   const [isTypingDone, setIsTypingDone] = useState(false);
   const [answer, setAnswer] = useState('');

   const handleNext = () => {
        if (answer.trim()) {
            onNext(answer);
            setAnswer('');
        }
    };

   return (
       <Grid2 container direction="column" alignItems="center" justifyContent="center"
           sx={{
               height: "100%",
               width: "100%",
               px: 3,
               position: "relative",
               ...poppins.style
           }}>
           <Grid2 container sx={{ width: "60%", gap: 4 }}>
               <Grid2 xs={12} sx={{width: "100%"}}>
                   <TypeAnimation
                       sequence={[
                           question,
                           () => setIsTypingDone(true)
                       ]}
                       wrapper="h2"
                       speed={50}
                       style={{
                           color: "#000",
                           fontWeight: 500,
                           fontFamily: poppins.style.fontFamily   
                       }}
                   />
               </Grid2>
               <Grid2 xs={12} sx={{width: "100%"}}>
                   <input 
                       type="text"
                       value={answer}
                       onChange={(e) => setAnswer(e.target.value)}
                       placeholder="Enter your answer"
                       style={{
                           width: '100%',
                           padding: '16px',
                           fontSize: '18px',
                           border: 'none',
                           borderBottom: '2px solid #FFD364AA',
                           outline: 'none',
                           background: 'transparent',
                           color: '#000',
                           caretColor: '#000',
                           opacity: isTypingDone ? 1 : 0,
                           transition: 'opacity 0.3s ease-in-out'
                       }}
                   />
               </Grid2>
           </Grid2>            
           <Grid2 
               onClick={handleNext}
               sx={{ 
                   position: "absolute",
                   bottom: 0,
                   right: 0,
                   backgroundColor: '#FFD364AA',
                   borderRadius: 2,
                   padding: '8px 16px',
                   display: 'flex',
                   alignItems: 'center',
                   cursor: 'pointer',
                   '&:hover': {
                       backgroundColor: '#FFD364CC'
                   },
                   opacity: answer.trim() ? 1 : 0.5,
                   pointerEvents: answer.trim() ? 'auto' : 'none',
                   transition: 'opacity 0.3s ease-in-out'
               }}>
               <span style={{ 
                   marginRight: '8px', 
                   fontFamily: poppins.style.fontFamily, 
                   color: "#000"
               }}>{isLastQuestion ? 'Finish' : 'Next'}</span>
               <ArrowForwardIcon sx={{color: "#000"}}/>
           </Grid2>
       </Grid2>
   );
}

export default SingleQnA;
