'use client'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Paper, IconButton } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FileCard = ({ file, onDelete }) => {
   const {
       attributes,
       listeners,
       setNodeRef,
       transform,
       transition,
   } = useSortable({ id: file.id });

   const style = {
       transform: CSS.Transform.toString(transform),
       transition,
   };

   const parseVideo = () => {
       if (file.type === 'video/mp4') {
           // Call your parse function here
           console.log('Parsing video:', file.name);
       }
   };

   // Check if file is mp4
   const isMP4 = file.type === 'video/mp4';

   if (!isMP4) {
       return null; // Don't render non-MP4 files
   }

   return (
       <Paper
           ref={setNodeRef}
           style={style}
           sx={{
               p: 2,
               display: 'flex',
               alignItems: 'center',
               gap: 2,
               cursor: 'grab',
               '&:active': {
                   cursor: 'grabbing',
               },
               backgroundColor: '#fff',
               boxShadow: 1,
               borderRadius: 2,
               mb: 2
           }}
           {...attributes}
       >
           <IconButton {...listeners}>
               <DragIndicatorIcon />
           </IconButton>
           
           <div style={{ flex: 1 }}>
               <h4 style={{ margin: 0 }}>{file.name}</h4>
               <p style={{ margin: '4px 0 0', color: '#666', fontSize: '0.875rem' }}>
                   {file.type}
               </p>
           </div>

           <IconButton 
               size="small" 
               onClick={parseVideo}
               sx={{
                    color: '#4CAF50', // Green color
                    '&:hover': {
                        color: '#45a049'
                    }
                }}
           >
               <CheckCircleIcon />
           </IconButton>

           <IconButton 
                size="small" 
                onClick={onDelete}
                sx={{
                    color: '#f44336', // Red color
                    '&:hover': {
                        color: '#d32f2f'
                    }
                }}
           >
               <DeleteIcon />
           </IconButton>
       </Paper>
   );
};

export default FileCard;