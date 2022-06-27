import React from "react";
import { useState, useEffect } from "react";
import "./Style/myFav.css";
import db from "../Firebase/FirebaseFirestore";
import { firebaseauth } from "../Firebase/FirebaseAuth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import useFirebaseAuthentication from "../Firebase/FirebaseAuthentication ";
import List from "../Components/List/List";

const MyFavorite = () => {
  const [listName, setListName] = useState("");
  const [hideCreate, setHideCreate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [list, setList] = useState([]);
  const authUser = useFirebaseAuthentication(firebaseauth);

  const listQuery = query(
    collection(db, "lists"),
    where("CreatedBy", "==", authUser ? authUser.uid : "")
  );
  //   useEffect(() => {
  //     getDocs(listQuery).then((querySnapshot) => {
  //       setList(
  //         querySnapshot.docs.map((doc) => {
  //           const data = doc.data();
  //           data.id = doc.id;
  //           return data;
  //         })
  //       );
  //     });
  //   }, [list]);
  const showHide = () => {
    setHideCreate(!hideCreate);
  };

  const createList = (e) => {
    e.preventDefault();
    if (listName.length > 0) {
      const user = firebaseauth.currentUser;
      const listRef = collection(db, "lists");
      const list = {
        name: listName,
        movies: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        CreatedBy: user.uid,
      };
      addDoc(listRef, list)
        .then(() => {
          setSuccessMessage(`${listName} has been created`);
          setListName("");
        })
        .catch(() => {
          setErrorMessage(`${listName} could not be created`);
        });
    } else {
      setErrorMessage("Please enter a list name");
    }
  };
  return (
    // change name
    <div className="myfavorite-container">
      <div className="titleMyfavorite">
        <h2>My Favorite</h2>
        <button onClick={showHide}>Add List</button>
      </div>
      {successMessage ? (
        <p className="successMessage">{successMessage}</p>
      ) : null}
      {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
      {hideCreate ? (
        <div>
          <form className="addList" onSubmit={createList}>
            <input
              type="text"
              name="listName"
              placeholder="Enter Your List Name"
              onChange={(event) => {
                setListName(event.target.value);
              }}
            />
            <button>Create List</button>
          </form>
        </div>
      ) : null}
      {list.map((value) => {
        return <List key={value.id} list={value} />;
      })}
    </div>
  );
};

export default MyFavorite;
