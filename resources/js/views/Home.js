import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "@/components/Container";
import postsApi from "@/api/posts";
/**
 * Name: Home
 */
const Home = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsApi.getPosts().then(({ data: { data = [] } = {} }) => {
            setPosts(data);
        });
    }, []);

    return (
        <Wrapper className="home">
            <Container>
                <div className="flex items-stretch flex-wrap space-x-3">
                    {posts &&
                        posts.map((post) => (
                            <Link
                                key={post.id}
                                className="bg-white rounded shadow-sm mb-3 block"
                                to={`/blog/${post.slug}`}
                            >
                                <div className="flex items-center justify-center h-16">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            loading="lazy"
                                            alt={post.title}
                                        />
                                    ) : (
                                        <FiImage className="text-3xl" />
                                    )}
                                </div>
                                <div className="px-3 py-4">
                                    <h3>{post.title}</h3>
                                </div>
                            </Link>
                        ))}
                </div>
            </Container>
        </Wrapper>
    );
};

export default React.memo(Home);

const Wrapper = styled.div``;
