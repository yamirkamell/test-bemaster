import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../../components/_layout/layout';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { ContainerTitle, TitleComponent, TextComponentMovie, ContainerMovies, ContainerMoviesScroll, SubTitleComponent, ContainerBody } from './styled';
import { mockMovies } from '../../../../redux/contentCategory/types';
import { setContentMovie } from '../../../../redux/contentDetails/actions';
import { productsInitialState } from '../../../../redux/contentDetails/types';
import { resources, retuResource } from '../../../../_data/resources';

const ContentCategory = () => {
    const category = useAppSelector((state) => state.contentCategory);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSelectMovie = (item: productsInitialState) => {
        const newChoose = {
          name: item.name,
          id: item.id,
          img: item.img,
          description: item.description
        };
        dispatch(setContentMovie(newChoose));
        navigate('/content-details');
    };

  return (
    <Layout>
        <>
            <ContainerTitle $img={category.img}>
                <TitleComponent>{category.name}</TitleComponent>
            </ContainerTitle>
            <ContainerBody>
                <SubTitleComponent>{retuResource(resources._trends_label)}</SubTitleComponent>
                <ContainerMoviesScroll>
                    {category.movies?.map((item: mockMovies) => (
                        <div key={item.id} onClick={()=>{handleSelectMovie(item)}}> 
                            <ContainerMovies $img={item.img} onClick={() => { }}>
                                <TextComponentMovie id='name'> {item.name} </TextComponentMovie>
                            </ContainerMovies>
                        </div>
                        ))}        
                </ContainerMoviesScroll>
            </ContainerBody>
        </>
    </Layout>
  )
};

export default ContentCategory;