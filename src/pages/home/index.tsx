import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/_layout/layout';
import { ContainerCategories, ContainerMain, ImgComponent, TextComponent } from './styled';
import MockCategories from '../../mocks/api-categories/GET.json';
import { productsInitialState } from '../../redux/contentCategory/types';
import { setContentCategory } from '../../redux/contentCategory/actions';
import Slider from './components/slider/slider';
import { useAppDispatch } from '../../redux/hooks/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectCategory = (item: productsInitialState) => {
    const newChoose = {
      name: item.name,
      id: item.id,
      img: item.img,
      movies: item.movies
    };
    dispatch(setContentCategory(newChoose));
    navigate('/content-category');
  };

  return (
    <Layout>
      <>
        <Slider />
        <ContainerMain>
          {MockCategories.categories?.map((item: productsInitialState) => (
            <ContainerCategories onClick={() => { handleSelectCategory(item)}}>
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