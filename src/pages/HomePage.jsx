import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import PresentationBloc from '../Components/PresentationBloc/PresentationBloc';
import SectionBloc from '../Components/SectionBloc/SectionBloc';
import imageCroissants from '../assets/images/croissants.jpg';
import imageTarteFlambee from '../assets/images/tarte-flambee.jpg';
import styles from './HomePage.module.scss';

class HomePage extends React.Component {

   constructor(props) {
       super(props);
       this.state = {};
   }

   render() {
       return (
           <div className={styles.homePageWrapper}> 
           
                <PresentationBloc 
                    logo="Tartes Cezanne"
                    altAttribute="Black Logo of Tartes Cézanne : Man with hat"
                    titleBlocPresentation="Essen ist nur ein Bedürfnis. Genießen ist eine Kunst."
                    figcaption="Duc de La Rochefoucault"
                    textButton="Wo wir sind"
                >
                    <NavBar/>
                </PresentationBloc>

                <SectionBloc 
                    titleSectionBloc="Unsere Bäckerei"
                    textSectionBloc="To create a cafe environment 
                    where all the elements come together. Great coffee, 
                    delicious and interesting food with locally sourced seasonal ingredients, 
                    and friendly professional service in an environment that stimulates the senses."
                    imageSectionBloc={imageCroissants}
                    flexDirectionDefault="row-reverse"
                    linkSectionBloc="Wo wir sind ?"
                    />

                <SectionBloc 
                    titleSectionBloc="Unsere Spezialitäten"
                    textSectionBloc="We are passionate about 
                    soucing our produce locally and you'll always 
                    find the season on our menu. We especially love tropical produce 
                    and we're always featuring the best of the tropics !"
                    imageSectionBloc={imageTarteFlambee}
                    linkSectionBloc="Unsere Feintkostladen entdecken"
                />
           </div> 
       )
   }
}

export default HomePage;