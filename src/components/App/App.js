import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Agenda from "../Agenda/Agenda";
import "../Days/Days.css";
import DeleteEventDay from "../DeleteEvent/DeleteEventDay";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
      <Route path="/delete-eventDay/:id" component={DeleteEventDay} />
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Route } from "react-router-dom";
// import "./components/App/App.css";
// /* import DeleteEventDay from './DeleteEventDay.jsx' */
// import Agenda from "./components/Agenda/Agenda";
// /* import EditModal from '../src/components/EditModal/EditModal' */

// function App() {
//   return (
//     <BrowserRouter>
//       <Route path="/" component={Agenda} />
//       {/*     <Route path="/delete-eventDay/:id" component={EditModal} /> */}
//       {/*   <Route path="/Edit-event/:id" component={EditModal} /> */}
//     </BrowserRouter>
//   );
// }

// export default App;
