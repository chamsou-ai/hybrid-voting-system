import React, { useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";


const PostForm = () => {
  const [candidateName, setCandidateName] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log("Candidate Name:", candidateName);
    console.log("Post Content:", postContent);
    console.log("Selected Image:", selectedImage);
    // Reset the form
    setCandidateName("");
    setPostContent("");
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Container className=" d-flex al-c jus-c ">
      <Form onSubmit={handlePostSubmit} className="border p-3 w-100">
        <p className="fs-1">
          Create Post 
        </p>
        <Form.Group controlId="candidateName" >
          <Form.Label>Title of your post</Form.Label>
          <Form.Control
            type="text"
            
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Enter candidate name"
            required
          />
        </Form.Group>
        <Form.Group controlId="postContent">
          <Form.Label>Post Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write your post here..."
            required
            />
        </Form.Group>
        <Form.Group controlId="selectedImage">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" onChange={handleImageSelect} />
          {imagePreview && (
            <Image
            src={imagePreview}
            alt="Selected Image"
            className="mt-2 border rounded"
            fluid
            style={{ maxWidth: "100%", maxHeight: "500px"}}
            />
            )}
          
        </Form.Group>
        
        <Button variant="primary" type="submit" className="btn btn-primary btn-lg mt-2  col-md-3 w-100">
        Create Post
        </Button>
      </Form>
    </Container>
    
  );
};

export default PostForm;
