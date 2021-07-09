import * as api from "../api";
import * as type from "../constants/actionTypes"

// Action Creators - functions that return actions

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: type.FETCH_ALL, payload: data });
	} catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post)

		dispatch({ type: type.CREATE, payload: data });
	} catch (error) {
        console.log(error.message);
    }
};


export const updatePost = (id,post) => async (dispatch) => {
	try {
		const {data} = await api.updatePost(id,post)
		dispatch({type:type.UPDATE, payload:data})
	} catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) =>{
	try {
		await api.deletePost(id)

		dispatch({type:type.DELETE, payload:id})
	} catch (error) {
		console.log(error);
	}
}

export const likePost = (id) => async (dispatch) => {
	try {
		const {data} = await api.likePost(id)
		dispatch({type:type.UPDATE, payload:data})
	} catch (error) {
        console.log(error.message);
    }
};