import { IonHeader, IonIcon, IonPage, IonText } from '@ionic/react';
import { menuOutline, notificationsOutline, addCircleOutline } from "ionicons/icons";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actCompleteTask } from "./../redux/actions/homeAction"
import { Link } from 'react-router-dom';

const Home: React.FC = (props) => {
  const { dispatch, tasksList }: any = props;
  const [taskOfDay, setTaskOfDay] = useState<string>("today");

  const renderTasks = () => {
    if (tasksList && tasksList.length > 0) {
      const index = tasksList.findIndex((item: any) => {
        return item.day === taskOfDay
      })
      if (index > -1) {
        if (tasksList[index].tasks && tasksList[index].tasks.length > 0) {
          return tasksList[index].tasks.map((task: any) => {
            return <div onClick={() => { handleCompleteTask(task.id) }} key={task.id} className={`task__item ${task.completed && "completed"}`}>
              <IonText>{task.title}</IonText>
            </div>
          })
        }
      }
    }
  }

  const handleCompleteTask = (value: number) => {
    dispatch(actCompleteTask({ id: value, day: taskOfDay }))
  }

  return (
    <IonPage className="home__container">
      <IonHeader>
        <IonIcon className="home__iconMenu" icon={menuOutline}></IonIcon>
        <div className="title__wrapper">
          <IonText className="title__text">Tasks</IonText>
          <IonIcon className="title__icon" color="primary" icon={notificationsOutline}></IonIcon>
        </div>
      </IonHeader>

      <div className="home__content">
        <div className="date__wrapper">
          <IonText onClick={() => { setTaskOfDay("today") }} className="date__item">Today</IonText>
          <IonText onClick={() => { setTaskOfDay("tomorrow") }} className="date__item">Tomorrow</IonText>
          <IonText onClick={() => { setTaskOfDay("thisWeek") }} className="date__item">This Week</IonText>
        </div>
        <div className="task__wrapper">
          {renderTasks()}
        </div>
      </div>

      <Link to="/add-task" className="home__iconWrapper">
        <IonIcon className="home__icon" icon={addCircleOutline}></IonIcon>
      </Link>

    </IonPage>
  );
};

const mapStateToProps = (state: any) => ({
  tasksList: state.home.tasksList
})

export default connect(mapStateToProps)(Home);