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

    const onClickMore = () => {
        setOpen(true);
        console.log(
            Object.entries(props.project.links)
                .map(([key, value]) => `My key is ${key} and my value is ${value}`)
        )
    }

    const onClose = () => {
        setOpen(false);
    };

    const projectDescription = props.project.description.map(p =>
        <Typography paragraph="true">{p}</Typography>);

    const projectLinks = Object.entries(props.project.links)
        .map(([title, link]) => <a href={link}>{title}</a>)

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
                <DialogContentText sx={{ p: '1.5em' }}>
                    {projectDescription}
                    <ul>{projectLinks}</ul>
                </DialogContentText>
            </Dialog>
        </Card >
    );
}