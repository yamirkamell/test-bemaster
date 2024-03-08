import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/_layout/layout';
import { ContainerCategories, ContainerMain } from './styled';

const Home = () => {

    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user);

  return (
    <Layout>
        <ContainerMain>
            <ContainerCategories>

            </ContainerCategories>
        </ContainerMain>
    </Layout>
  )
};

export default Home;