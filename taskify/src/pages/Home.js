import React, { useState, useEffect } from "react";
import Details from "../components/Details";

function Home() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks')
      const json = await response.json()

      if(response.ok){
        setTasks(json)
      }
      
    };
    fetchTasks();
  }, []);
  
  return (
    <div className="home">
      <div className="tasks">
        {tasks && tasks.map((task) => (
          <Details key={task._id} task={task}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
