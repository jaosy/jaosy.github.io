import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';


export default function ProjectCard(props) {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const onClickMore = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    };

    const generateParagraphs = (projectDescription) => {
        console.log(projectDescription);
        if (projectDescription !== '')
            projectDescription.map(paragraph => <Typography paragraph='true'>paragraph</Typography>)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="100%"
                image={props.project.image}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.project.blurb}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickMore}>More</Button>
            </CardActions>

            <Dialog open={open}
                onClose={onClose}>
                <DialogTitle id="scroll-dialog-title">{props.project.title}</DialogTitle>
                <DialogContentText sx={{ p: '1.5em' }}>{() => { generateParagraphs(props.project.description) }}</DialogContentText>
            </Dialog>
        </Card >
    );
}