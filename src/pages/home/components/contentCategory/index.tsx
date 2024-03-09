import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import Layout from '../../../../components/_layout/layout';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { ContainerTitle, TitleComponent, TextComponentMovie, ContainerMovies, ContainerMoviesScroll, SubTitleComponent, ContainerBody } from './styled';
import { mockMovies } from '../../../../redux/contentCategory/types';

const ContentCategory = () => {
    const category = useAppSelector((state) => state.contentCategory);
    //const navigate = useNavigate();

    useEffect(()=>{
        console.log(category);
    })

  return (
    <Layout>
        <>
            <ContainerTitle $img={category.img}>
                <TitleComponent>{category.name}</TitleComponent>
            </ContainerTitle>
            <ContainerBody>
                <SubTitleComponent>Tendencias</SubTitleComponent>
                <ContainerMoviesScroll>
                    {category.movies?.map((item: mockMovies) => (
                        <div key={item.id}> 
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