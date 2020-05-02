import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Post = () => {
    const { slug } = useParams();
    return <Wrapper>Post: {slug}</Wrapper>;
};

export default Post;

const Wrapper = styled.div``;
