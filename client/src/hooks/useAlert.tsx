// import { useState } from "react";
// interface IAlert {
//   status?: number;
//   message?: string;
// }
// const useAlert = (): [IAlert, ({ status, message }: IAlert) => void] => {
//   const [alert, setAlert] = useState<IAlert>({
//     status: 0,
//     message: "",
//   });
//   const setAlertValues = ({ status, message }: IAlert) => {
//     console.log("auto----------");
//     setAlert({ status, message });
//     setTimeout(() => {
//       console.log("timeout ");
//       setAlert({ status: 0, message: "" });
//     }, 2000);
//   };
//   return [alert, setAlertValues];
// };

// import { useReducer } from "react";

// // export default useAlert;

// const useAlert = () => {
//   interface IAlertReducerState {
//     status: number | null;
//     message: string;
//   }
//   interface IAlertReducerAction {
//     status: number;
//     message: string;
//     type: "SET_ALERT";
//   }
//   const alertReducer = (
//     state: IAlertReducerState,
//     action: IAlertReducerAction
//   ) => {
//     switch (action.type) {
//       case "SET_ALERT":
//         state.status = action.status;
//         state.message = action.message;
//         setTimeout(() => {
//           state.status = null;
//           state.message = "";
//         }, 2000);
//         return state;
//     }
//   };
//   const initialState: IAlertReducerState = {
//     status: null,
//     message: "",
//   };
//   const [alert, setAlert] = useReducer(alertReducer, initialState);
//   return [alert, setAlert];
// };
// export default useAlert;
