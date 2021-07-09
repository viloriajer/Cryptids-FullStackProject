import React, { useState,useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import {useSelector} from 'react-redux'


//Get current id of particular post
export const Form = ({ currentId, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
    const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id === currentId) : null)

    useEffect(()=>{
        if(post){
            setPostData(post)
        }
    },[post])

	const [postData, setPostData] = useState({
		creator: "",
		name: "",
		description: "",
		tags: "",
		selectedFile: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}
        clear()
	};

	const clear = () => {
        setCurrentId(null)
        setPostData({
            creator: "",
            name: "",
            description: "",
            tags: "",
            selectedFile: "",
        })
    };

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">{currentId? "Editing" : "Post"} a Cryptid</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={(e) => {
						setPostData({ ...postData, creator: e.target.value });
					}}
				/>
				<TextField
					name="name"
					variant="outlined"
					label="Name"
					fullWidth
					value={postData.name}
					onChange={(e) => {
						setPostData({ ...postData, name: e.target.value });
					}}
				/>
				<TextField
					name="description"
					variant="outlined"
					label="Description"
					fullWidth
					value={postData.description}
					onChange={(e) => {
						setPostData({ ...postData, description: e.target.value });
					}}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={(e) => {
						setPostData({ ...postData, tags: e.target.value.split(",") });
					}}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};
