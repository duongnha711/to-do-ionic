import { IonPage, IonText, IonInput, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { actAddTask } from "./../../redux/actions/homeAction"

interface ITask {
    day: string;
    title: string
}

const AddTask: React.FC = (props) => {
    const [taskAdd, setTaskAdd] = useState<ITask>({ day: "today", title: "" })
    const { dispatch }: any = props
    const history = useHistory()

    const handleChooseDate = (value: string) => {
        setTaskAdd({
            ...taskAdd,
            day: value
        })
    }

    const handleEnterTask = (value: any) => {
        setTaskAdd({
            ...taskAdd,
            title: value
        })
    }

    const handleAddTask = () => {
        dispatch(actAddTask(taskAdd))
        history.push("/")
    }

    return (
        <IonPage>
            <div className="add__container">
                <IonText className="title__text">Add new</IonText>
                <IonInput onIonChange={e => handleEnterTask(e.detail.value!)} className="add__input" placeholder="Enter Task"></IonInput>
                <IonText>
                    <h5>WHEN</h5>
                </IonText>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol onClick={() => { handleChooseDate("today") }} className={taskAdd.day === "today" ? "chose" : "ABC"} size="4">Today</IonCol>
                            <IonCol onClick={() => { handleChooseDate("tomorrow") }} className={taskAdd.day === "tomorrow" ? "chose" : "ABC"} size="4">Tomorrow</IonCol>
                            <IonCol size="4">Select date</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </div>
            <IonText onClick={handleAddTask} className="add__task">Add Task</IonText>
        </IonPage>
    );
};

export default connect()(AddTask);