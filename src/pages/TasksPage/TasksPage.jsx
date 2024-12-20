import { useDispatch, useSelector } from "react-redux";
import s from "./TasksPage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { fetchTasksListApi } from "../../redux/tasks/operations";
import { selectUser } from "../../redux/users/selectors";
import TasksList from "../../components/TasksList/TasksList";
import {
  selectTasksList,
  selectTasksListError,
  selectTasksListLoading,
} from "../../redux/tasks/selectors";
import Loader from "../../components/Loader/Loader";
import useDelayedShow from "../../utils/useDelayedShow";

const TasksPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasksList);
  const loading = useSelector(selectTasksListLoading);
  const isError = useSelector(selectTasksListError);
  const isShown = useDelayedShow(!loading, 50);

  useEffect(() => {
    dispatch(fetchTasksListApi(user.id));
  }, [dispatch, user]);
  return (
    <>
      {loading && !isError && <Loader />}
      {!loading && !isError && (
        <main>
          {/* <!-- -------------------HEADING section---------------- --> */}

          <section className={clsx("section", s.hdSection, isShown && s.shown)}>
            <div className={clsx("container", s.hdContainer)}>
              <h1 className={clsx(s.hdHeading)}>Tasks</h1>
              <p className={clsx(s.hdDesc)}>
                <span id="done-tasks">{tasks.length}</span>/20
              </p>
            </div>
          </section>
          {/* <!-- -------------------Tasks category List section---------------- --> */}
          {/* <section className={clsx("section", s.tcSection, s.shown)}>
        <div className={clsx("container", s.tcContainer)}>
          <ul className={clsx(s.tcList)}></ul>
          <div className={clsx(s.gradient)}></div>
        </div>
      </section> */}
          {/* <!-- -------------------Tasks List section---------------- --> */}
          <section className={clsx("section", s.tSection, isShown && s.shown)}>
            <div className={clsx("container", s.tContainer)}>
              <TasksList />
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default TasksPage;
