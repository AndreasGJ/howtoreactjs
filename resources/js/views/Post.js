import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";

import Container from "@/components/Container";
import FlexibleContent from "@/components/FlexibleContent";
import useRequest from "@/hooks/useRequest";

/**
 * Name: Post
 */
const Post = () => {
    const params = useParams();

    const { data: { data: post } = {} } = useRequest(`/posts/${params.post}`);

    if (!post) {
        return (
            <Wrapper className="post">
                <Container>
                    <Skeleton
                        variant="rect"
                        height={48}
                        className="mt-5 mb-7"
                    />

                    <Skeleton
                        variant="rect"
                        height={15}
                        width="60%"
                        count={3}
                    />
                </Container>
            </Wrapper>
        );
    }
    console.log("post", post);
    return (
        <Wrapper className="post">
            <Container>
                <h1 className="text-5xl font-bold mt-5 mb-7">{post.title}</h1>

                <FlexibleContent rows={post.content} />
            </Container>
        </Wrapper>
    );
};

export default React.memo(Post);

const Wrapper = styled.article``;
