export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "System Programming",
    items: ["Python", "C++", "Agile Method"],
  },
  {
    category: "Embedded Systems & IoT",
    items: ["ESP-32", "Microcontroller Integration", "Sensor Integration", "Digital Circuits", "Hardware Prototyping", "ESP-IDF"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "REST API", "SQL", "NoSQL", "MongoDB", "Prometheus"],
  },
  {
    category: "AI / Machine Learning",
    items: ["Deep Learning", "CNN", "LSTM", "RNN", "CatBoost", "TensorFlow Lite", "Computer Vision"],
  },
  {
    category: "Robotics",
    items: ["ROS (Robot Operating System)", "Differential Drive", "Sensor Fusion"],
  },
];
