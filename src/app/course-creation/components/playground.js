'use client'
import { Grid2 } from '@mui/material';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import FileCard from './filecard';
import Instructions from './playground-instructions';
import { Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

const Playground = () => {
    const [items, setItems] = useState([]);

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files).map((file, index) => ({
            id: `${file.name}-${index}`,
            name: file.name,
            type: file.type,
            content: file
        }));

        setItems(prevItems => [...prevItems, ...uploadedFiles]);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                
                const newItems = [...items];
                const [removed] = newItems.splice(oldIndex, 1);
                newItems.splice(newIndex, 0, removed);
                
                return newItems;
            });
        }
    };

    const handleDelete = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    };

    return (
        <Grid2 container sx={{ height: "100%", width: "100%" }}>
            <Grid2 container direction="column" 
            sx={{ 
                height: "100%",
                width: "60%",
                p: 2,
            }}>
                <Grid2 container sx={{ 
                    height: "93%",
                    backgroundColor: '#FFD36433',
                    borderRadius: 4,
                    p: 2,
                    overflowY: 'auto',
                    width: "100%",
                }}>
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={items} strategy={rectSortingStrategy}>
                            <Grid2 spacing={2} sx={{ width: "100%" }}>
                                {items.length === 0 ? (
                                    <Grid2 
                                        container 
                                        alignItems="center" 
                                        justifyContent="center" 
                                        sx={{ 
                                            height: "100%",
                                            minHeight: "200px",
                                            color: "text.secondary",
                                            textAlign: "center",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        You haven't added any files. Click on Upload Files to Start!
                                    </Grid2>
                                ) : (
                                    items.map((item) => (
                                        <Grid2 key={item.id} sx={{width:"100%"}}>
                                            <FileCard 
                                                file={item} 
                                                onDelete={() => handleDelete(item.id)}
                                            />
                                        </Grid2>
                                    ))
                                )}
                            </Grid2>
                        </SortableContext>
                    </DndContext>
                </Grid2>

                <Grid2 container sx={{ height: "7%", width: "100%", pt: 2 }} justifyContent="center" alignItems="center">
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<UploadIcon />}
                        sx={{ 
                            backgroundColor: '#FFD364AA',
                            width: "100%",
                            color: '#000',
                            '&:hover': {
                                backgroundColor: '#FFD364CC'
                            }
                        }}
                    >
                        Upload Files
                        <input
                            type="file"
                            multiple
                            hidden
                            onChange={handleFileUpload}
                        />
                    </Button>
                </Grid2>
            </Grid2>

            <Grid2 container sx={{ 
                height: "100%",
                width: "40%",
            }}>
                <Instructions />
            </Grid2>
        </Grid2>
    );
};

export default Playground;