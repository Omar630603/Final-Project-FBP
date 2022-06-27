import React from 'react'
import DetailMovie from '../Components/DetailMovie/DetailMovie'
import {useMatch} from "react-router-dom";
import {useState,useEffect} from "react";
import {collection,query,where,doc,getDocs, getDoc} from "firebase/firestore";
import db from "../Firebase/FirebaseFirestore";

function DetailPage() {
	const match=useMatch("/detail/*");
	const id=match.params["*"]

	const [movie,setMovie]=useState([]);

	getDoc(doc(db,"movies", id)).then(docSnap => {
		if(docSnap.exists()) {
			setMovie(
				docSnap.data()
			);
		} else {
			console.log("No such document!");
		}
	})

	return (
		<div>
			<DetailMovie detail={movie}></DetailMovie>
		</div>
	)
}

export default DetailPage;