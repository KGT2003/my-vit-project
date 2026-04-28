import "./App.css";
import Project from "./assets/Project.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="projects-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {/* Project 1 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={Project} alt="Quiz App" />
          <h3>Quiz App</h3>
          <p>
            A simple 4-question quiz with single choice, multiple choice, and true/false questions.
            At the end, users see a summary of their score.
          </p>

          <div className="tags">
            <span>React Native</span>
          </div>

          <div className="project-links">
            <a href="">Live Demo</a>
            <a href="https://kgt2003.github.io/expo-quiz-app/">GitHub</a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={Project2} alt="Exercise App" />
          <h3>Exercise App</h3>
          <p>
            A fitness app where users can set timers for running and track completed reps.
          </p>

          <div className="tags">
            <span>React</span>
          </div>

          <div className="project-links">
            <a href="">GitHub</a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={Project3} alt="To-Do App" />
          <h3>To-Do List App</h3>
          <p>
            A simple to-do list where users can add and remove tasks easily.
          </p>

          <div className="tags">
            <span>React Native</span>
          </div>

          <div className="project-links">
            <a href="https://kgt2003.github.io/react-expo-todo-list/">GitHub</a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}