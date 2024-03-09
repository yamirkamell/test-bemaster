import React from 'react';
import Layout from '../../../../../../components/_layout/layout';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { ContainerTitle, DescriptionComponent, Divider, SubTitleComponent, TitleComponent } from './styled';
import { resources, retuResource } from '../../../../../../_data/resources';

const ContentDetails = () => {
  
  const movie = useAppSelector((state) => state.contentDetails);

  return (
    <Layout>
        <>
            <ContainerTitle $img={movie.img}>
                <TitleComponent>{movie.name}</TitleComponent>
                <Divider />
                <SubTitleComponent>{retuResource(resources._detail_label)}</SubTitleComponent>
                <DescriptionComponent>{movie.description}</DescriptionComponent>
            </ContainerTitle>
        </>
    </Layout>
  )
};

export default ContentDetails;