import { useEffect, useState } from "react";
import useApi from "./useApi";
import nProgress from "nprogress";

export default function useFetchSchdule(fetchScheduleFunc) {
  const [schedules, setSchedules] = useState([]);
  const schedule = useApi(fetchScheduleFunc);

  useEffect(
    () => {
      fetchSchedules();
    },
    // eslint-disable-next-line
    []
  );

  const fetchSchedules = async () => {
    try {
      const res = await schedule.request();
      setSchedules(res.data.schedules);
    } catch (err) {}
  };

  const onScheduleUpdate = async (func, scheduleId) => {
    nProgress.start();

    try {
      await func(scheduleId);
      const updatedSchedules = schedules.filter(
        (schedule) => schedule._id !== scheduleId
      );

      setSchedules(updatedSchedules);
      nProgress.done();
    } catch (err) {
      nProgress.done();
    }
  };

  return { schedules, onScheduleUpdate, isLoading: schedule.isLoading };
}
