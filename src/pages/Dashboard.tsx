import { IonPage } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <IonPage className="dashboard__container">
            Dashboard
            <Link to="/" >Home</Link>

        </IonPage>
    );
};

export default Dashboard;



