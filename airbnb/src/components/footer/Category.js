import React from "react";
import styled from "styled-components";
import category from "../../assets/mockdata/category.json";

const GroupContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 20px;
  @media (max-width: 744px) {
    border-bottom: 1px solid #dddddd;
  }
`;

const LinkText = styled.a`
  padding: 10px;
  font-size: 14px;
  @media (max-width: 744px) {
    padding: 5px;
  }
`;

const GroupTitle = styled.h1`
  padding: 10px;
  font-size: 16px;
  @media (max-width: 744px) {
    padding: 5px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dddddd;

  @media (max-width: 744px) {
    flex-flow: column nowrap;
  }
`;

const Category = () => (
  <CategoryContainer>
    {category.Category.map((item) => (
      <GroupContainer>
        <GroupTitle>{item.title}</GroupTitle>
        {item.links.map((el) => (
          <LinkText>{el}</LinkText>
        ))}
      </GroupContainer>
    ))}
  </CategoryContainer>
);

export default Category;
