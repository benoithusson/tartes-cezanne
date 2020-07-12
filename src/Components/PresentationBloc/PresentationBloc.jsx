import React from 'react';
import styles from './PresentationBloc.module.scss';
import Button from '../Button/Button';

/*
    Presentation bloc is composed of three parts :
    . Logo or text
    . Title
    . Button
*/

const PresentationBloc = (props) => {
   return (
       <div className={styles.blocWrapper}>

           {/* NavBar */}
           {props.children}

            {/* Logo or Text */}
            {props.logo 
                ? 
                    <div className={styles.logo}>
                        <h1>{props.logo}</h1>
                    </div>
                :
                    <div></div>
            }
            {/* Title */}
            {props.titleBlocPresentation
                ? 
                    <div className={styles.title}>
                        <h2>{props.titleBlocPresentation}</h2>
                        {props.figcaption 
                            ? <figcaption>{props.figcaption}</figcaption> 
                            : <div></div>
                        }
                    </div>
                :
                    <div></div>
            }
            {/* Button */}
            {props.textButton
                ? 
                    <div className={styles.button}>
                        <Button
                            newBgColor="rgba(4, 128, 4, 0.7)"
                            newColor="white"
                            // newWidth=""
                            // newHeight=""
                            // newBorderRadius=""
                            // newFontFamily=""
                            // newFontSize=""
                            // newBorder=""
                            // newTransition=""
                            // bgColorOnHover=""
                            // borderOnHover=""
                            // borderRadiusOnHover=""
                            // colorOnHover=""
                        >
                            {props.textButton}
                        </Button>
                    </div>
                :
                    <div></div>
            }
       </div>
   )

}

export default PresentationBloc;