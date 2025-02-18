import './App.css';
import HomePage from './Components/Home'
import { Routes, Route } from "react-router-dom";

function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Routes/>
    </> 
    );
    

}

export default App






/*import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './App.css'; 

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const deleteDoneTasks = () => {
    const activeTasks = tasks.filter((task) => !task.done);
    setTasks(activeTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Done') return task.done;
    if (filter === 'Todo') return !task.done;
    return true;
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-4">To do List</h2>

          <Form.Group className="d-flex mb-3">
            <Form.Control
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New Todo"
              className="mr-2"
            />
            <Button variant="primary" onClick={addTask}>
              Add new task
            </Button>
          </Form.Group>

          
          <div className="mb-4 d-flex justify-content-between">
            <Button
              variant={filter === 'All' ? 'info' : 'secondary'}
              onClick={() => setFilter('All')}
              className="px-4"
            >
              All
            </Button>
            <Button
              variant={filter === 'Done' ? 'info' : 'secondary'}
              onClick={() => setFilter('Done')}
              className="px-4"
            >
              Done
            </Button>
            <Button
              variant={filter === 'Todo' ? 'info' : 'secondary'}
              onClick={() => setFilter('Todo')}
              className="px-4"
            >
              To do
            </Button>
          </div>

          
          {filteredTasks.map((task, index) => (
            <Row key={index} className="mb-3">
              <Col xs={6}>
                <Form.Check
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(index)}
                  label={
                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                      {task.text}
                    </span>
                  }
                />
              </Col>
              <Col xs={6} className="d-flex justify-content-end">
                <Button
                  variant="warning"
                  onClick={() => alert('Edit functionality can be added')}
                  className="mr-2"
                >
                  ✏️
                </Button>
                <Button variant="danger" onClick={() => deleteTask(index)}>
                  🗑️
                </Button>
              </Col>
            </Row>
          ))}

          
          <Row className="mt-4">
            <Col className="d-flex justify-content-between">
              <Button variant="danger" onClick={deleteDoneTasks} className="px-3">
                Delete done tasks
              </Button>
              <Button variant="danger" onClick={deleteAllTasks} className="px-3">
                Delete all tasks
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoApp; */











