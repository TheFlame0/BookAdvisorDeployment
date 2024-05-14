import './profile.css';
// import React, { useEffect, useState } from 'react';
// import { database } from './firebaseConfig';
// import { ref, onValue } from 'firebase/database';
import Book from '../HomePage-Components/Book.jsx';

const profile = () => {
  // const [bookData, setBookData] = useState(null);

  // useEffect(() => {
  //   const bookRef = ref(database, '0'); // Adjust the path as needed
  //   onValue(bookRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       // Ensure all fields are strings
  //       const book = {
  //         book_authors: String(data.book_authors),
  //         book_desc: String(data.book_desc),
  //         book_rating: String(data.book_rating),
  //         book_rating_count: String(data.book_rating_count),
  //         book_review_count: String(data.book_review_count),
  //         book_title: String(data.book_title),
  //         genres: String(data.genres),
  //         image_url: String(data.image_url),
  //       };
  //       setBookData(book);
  //       console.log(book)
  //     } else {
  //       setBookData(null);
  //     }
  //   }, (error) => {
  //     console.error('Error fetching data: ', error);
  //   });
  // }, []);

  return (

    <>

          <div className="main-profile">
            <div className='container-name-img'>
              <div className="imgProfile-container">
                <img src="/src/imgs/prifile-img-cartoon.png" alt="Profile" className="imgProfile"/>
                <p> <b>Hamza Baaqil</b> </p>
              </div>
            </div>
          </div>
          <div className='layer'> </div>
              <div className="bookshelf-Profile">
                  <div className="MyBook-container">
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                      />
                            <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                      />
                     <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />


                  </div>
              </div>
              
           

    </>

  );
}



export default profile;