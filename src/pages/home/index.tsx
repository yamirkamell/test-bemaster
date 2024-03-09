import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/_layout/layout';
import { ContainerCategories, ContainerMain, ImgComponent, TextComponent } from './styled';
import MockCategories from '../../mocks/api-categories/GET.json';
import { productsInitialState } from '../../redux/content-category/types';
import Slider from './components/slider/slider';

const Home = () => {

    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user);

  return (
    <Layout>
      <>
      <Slider />
        <ContainerMain>
          {MockCategories.categories?.map((item: productsInitialState) => (
            <ContainerCategories>
              <TextComponent id="name"> {item.name} </TextComponent>
              <ImgComponent id="img" src={item.img} />
            </ContainerCategories>
          ))}
        </ContainerMain>
        </>
    </Layout>
  )
};

export default Home;