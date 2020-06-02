import { IonHeader, IonIcon, IonPage, IonText } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage className="home__container">
      <IonHeader className="home__header">
        <IonText>To Do App</IonText>
        <IonText>X</IonText>
      </IonHeader>

      <IonIcon name="close-outline"></IonIcon>
      
    </IonPage>
  );
};

export default Home;
