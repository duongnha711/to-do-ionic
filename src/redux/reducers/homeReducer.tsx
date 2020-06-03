import { COMPLETE_TASK, ADD_TASK } from "../constants/constants";

//demoData
const demoData = [
  {
    day: "today",
    tasks: [
      {
        id: 1,
        title: "Today, you have to do something - task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Today, you have to do something - task 2",
        completed: false,
      },
      {
        id: 3,
        title: "Today, you have to do something - task 3",
        completed: true,
      },
    ],
  },
  {
    day: "tomorrow",
    tasks: [
      {
        id: 1,
        title: "Tomorrow, you have to do something - task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Tomorrow, you have to do something - task 2",
        completed: false,
      },
      {
        id: 3,
        title: "Tomorrow, you have to do something - task 3",
        completed: false,
      },
    ],
  },
  {
    day: "thisWeek",
    tasks: [
      {
        id: 1,
        title: "This week, you have to do something - task 1",
        completed: false,
      },
      {
        id: 2,
        title: "This week, you have to do something - task 2",
        completed: false,
      },
      {
        id: 3,
        title: "This week, you have to do something - task 3",
        completed: false,
      },
    ],
  },
];

const tasksList: object[] = localStorage.getItem("tasksList")
  ? JSON.parse(localStorage.getItem("tasksList")!)
  : demoData;

const initialState = {
  tasksList,
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMPLETE_TASK: {
      const { id, day } = action.payload;
      const { tasksList } = state
      const arrTasksList: any[] = [...tasksList];
      const indexOfDay = arrTasksList.findIndex((item: any) => day === item.day);
      const indexOfTask = arrTasksList[indexOfDay].tasks.findIndex(
        (item: any) => item.id === id
      );
      arrTasksList[indexOfDay].tasks[indexOfTask].completed = !arrTasksList[
        indexOfDay
      ].tasks[indexOfTask].completed;
      localStorage.setItem("tasksList", JSON.stringify(arrTasksList));
      return { ...state, tasksList: arrTasksList };
    }

    case ADD_TASK: {
      const { tasksList } = state;
      const { payload } = action;

      const indexOfDay = tasksList.findIndex(
        (item: any) => payload.day === item.day
      );
      const arrTasksList: any[] = [...tasksList];
      arrTasksList[indexOfDay].tasks.push({
        id: arrTasksList[indexOfDay].tasks.length + 1,
        title: payload.title,
        completed: false,
      });
      localStorage.setItem("tasksList", JSON.stringify(arrTasksList));
      return { ...state, tasksList: arrTasksList };
    }

    default:
      return { ...state };
  }
};

export default homeReducer;
