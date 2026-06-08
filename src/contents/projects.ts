export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  github: string;
  live: string | null;
  period: string;
}

export const projects: Project[] = [
  {
    title: "MAGE 11 Official Website",
    description:
      "Official website for MAGE 11, a university-scale nationwide event. Serves as the information and registration hub where participants can register and receive automated WhatsApp notifications about the event.",
    bullets: [
      "Developed backend system for website including account registration and automated WhatsApp notifications.",
      "Maintained the system during the event duration, providing hotfixes on the system.",
    ],
    tags: ["Node.js", "Backend", "REST API", "WhatsApp API", "Web Development"],
    github: "#",
    live: null,
    period: "Feb 2025 – Nov 2025",
  },
  {
    title: "Just-in-Time Service Robot Delivery",
    description:
      "Early prototype of a service robot that delivers items just in time. Uses hall sensors in a chairless chair to read walking-sitting activity patterns via an LSTM deep learning model, so the robot arrives exactly when the worker sits down.",
    bullets: [
      "Created communication pipeline between processes using Robot Operating System (ROS).",
      "Trained LSTM model so that the robot can recognize activity pattern of the working person.",
    ],
    tags: ["ROS", "LSTM", "Deep Learning", "Python", "Robotics", "IoT"],
    github: "#",
    live: null,
    period: "Nov 2025 – Dec 2025",
  },
  {
    title: "Smart Power System Monitoring with ML-Based Device Classification",
    description:
      "A smart power monitoring system that classifies registered electrical devices using a CatBoost ML model. ESP-32 with PZEM-004 sensor sends electrical readings to a backend server recording data in Prometheus and displaying it via Grafana.",
    bullets: [
      "Developed back-end server, including communication between ESP-32 and Prometheus database and machine learning inference service.",
      "Trained machine learning model using CatBoost and Recurrent Neural Network for device classification.",
    ],
    tags: ["ESP-32", "IoT", "CatBoost", "RNN", "Prometheus", "Grafana", "Python"],
    github: "#",
    live: null,
    period: "Sep 2025 – Dec 2025",
  },
  {
    title: "Automatic Gate License Plate Recognizer",
    description:
      "Prototype of an automated parking gate system that integrates Node-RED, computer vision, MongoDB, and ESP-32 to open automatically upon detecting a registered vehicle license plate.",
    bullets: [
      "Developed an event-driven system using Node-RED to connect all components of the project into a complete and whole working system.",
    ],
    tags: ["Node-RED", "Computer Vision", "MongoDB", "ESP-32", "IoT"],
    github: "#",
    live: null,
    period: "Sep 2025 – Dec 2025",
  },
  {
    title: "Smart Obstacle Avoidance Differential Drive Mobile Robot",
    description:
      "A two-wheeled differential drive mobile robot with automatic obstacle avoidance. Distance data from ultrasonic sensors is fed to a TensorFlow Lite ANN model to decide the robot's action when faced with an obstacle.",
    bullets: [
      "Developed ESP32 firmware to process ultrasonic sensor data, drive motor outputs, and run TFLite inference.",
      "Designed hardware schematic and wired all components into a functioning system.",
    ],
    tags: ["ESP-32", "TensorFlow Lite", "Robotics", "Embedded C++", "ANN"],
    github: "#",
    live: null,
    period: "Oct 2025 – Nov 2025",
  },
  {
    title: "LED Matrix Embedded System Game",
    description:
      "An embedded system hardware running a target-shooting game on a 5×3 LED matrix, with two buzzers as stereo audio and an OLED panel displaying the player's score, all powered by an ESP32.",
    bullets: [
      "Developed ESP32 firmware using ESP-IDF framework, including gameplay logic, LED matrix display, game sound effects and music, and OLED I2C communication.",
    ],
    tags: ["ESP-IDF", "ESP-32", "Embedded C++", "I2C", "Hardware Design"],
    github: "#",
    live: null,
    period: "Sep 2025 – Dec 2025",
  },
];
