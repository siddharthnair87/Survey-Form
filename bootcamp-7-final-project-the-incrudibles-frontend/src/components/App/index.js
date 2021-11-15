import { useEffect, useState } from "react";
import UserForm from "../UserForm";
import Loading from "../Loading";
import css from "./App.module.css";

function App() {
  const [graduateDetails, setGraduateDetails] = useState();
  const [isPending, setIsPending] = useState(true);

  let grad_id = "b2882d56-33b2-4dab-9a9c-0a2062f86bf2";

  if (window.location.search.slice(11)) {
    grad_id = window.location.search.slice(11);
  }

  useEffect(() => {
    setTimeout(() => {
      async function getInitialFormData() {
        try {
          const res = await fetch(
            `https://incrudibles.herokuapp.com/graduates/${grad_id}`
          );
          const data = await res.json();
          setGraduateDetails(data.payload);
          setIsPending(false);
        } catch (error) {
          console.error(error);
        }
      }
      getInitialFormData();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.background}>
      {isPending || !graduateDetails ? <Loading /> : <div></div>}
      {graduateDetails && <UserForm graduateDetails={graduateDetails} />}
    </div>
  );
}

export default App;
