import React, { useState } from "react";
import "./App.css";
import answers from "./assets/behavioral-interview-answers.pdf";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const questionsAndAnswers = [
  {
    question:
      "🌟 Unlocking the Interview: Click 'Next' to reveal the answers! 🌟",
  },
  {
    question:
      "Tell us about yourself, including your work ethic, and how do you see yourself doing with XYZ within the next 2-5 years?",
    answer:
      "I am a positive, enthusiastic, and dedicated web developer with a master's in Computer Systems and Software Design (GPA: 3.9). I have built up a diverse range of skills working on challenging personal and collaborative web development projects. I enjoy working in a team environment because it allows me to value diverse perspectives and contribute as a resource when needed.\n\nI take my job seriously and stay on top of the industry by making sure my skills are up to date. If selected as your Web Developer, I'm committed to putting XYZ's commercial needs first and delivering work to a first-class standard.\n\nOver the next 2-5 years, I see myself contributing significantly to the growth of XYZ by utilizing my web development skills in a dynamic environment. I aim to advance to a senior web developer position, where I can lead a team and guide new talents on their career path, similar to my journey. I am excited about the opportunity to contribute to XYZ's mission to [XYZ's mission] and being a part of its growth and innovation.",
  },
  {
    question:
      "Are you willing to put the interests of the organization ahead of your own?",
    answer:
      "Absolutely, I believe in prioritizing the interests of the organization to achieve collective success. The goals of XYZ, the products and services it offers, and the support provided to employees all convey that this is a wonderful place to work, and I am excited to utilize advanced technologies contributing to the advancement in the field of [XYZ's field, for ex, health informatics] and making significant contributions to XYZ's success.",
  },
  {
    question:
      "Do you think you would do well at this job if given the chance/opportunity?",
    answer:
      "Yes, I am confident in my ability to excel at this job given my skill set and experience. With a background in web development, I have the expertise to create reliable, scalable, and high-performance web applications, which match the technical requirements outlined in the job description. My proficiency in the web development lifecycle, from design to testing and maintaining, and experience of delivering fully functional products equip me with necessary skills to perform best in this role.\n\nFurthermore, my hands-on experience in designing and building responsive web applications aligns perfectly with the goal of developing dynamic and user-friendly interfaces. I am dedicated to maintaining and optimizing applications for diverse platforms, ensuring a smooth user experience.\n\nMy work style is characterized by a fast-paced approach, with in-depth technical knowledge and an understanding of current industry trends in web development. My strong project management skills and collaborative spirit emphasize my dedication to contributing to XYZ's success in professional web development.\n\nIn addition, my commitment to staying abreast of emerging technologies aligns seamlessly with the company's focus on continuous improvement and driving advancements. I'm thrilled about the prospect of bringing my positive, growth-oriented mindset to the team and fostering collaboration to achieve exceptional outcomes for XYZ in the dynamic field of web development.",
  },
  {
    question:
      "What have you done to improve your knowledge in the last year and what do co-workers say about you?",
    answer:
      "In the past year, I have actively enhanced my web development skills by self-learning new frameworks like Express.js and Next.js through online documentation and tutorials. This hands-on approach allowed me to successfully implement these frameworks in practical projects, such as creating an online shopping store application with React.js, Express.js, and Stripe for payments.\n\nAdditionally, I actively participated in web development and software engineering forums, expanding my knowledge and establishing connections with industry professionals. Regularly reading established journals and websites keeps me informed about the latest trends and best practices. I am eager to contribute these skills to the role of a web developer at XYZ, leveraging the latest technologies for innovative projects.\n\nMy coworkers would describe me as a well-spoken and empathetic communicator who understands and articulates the team's needs. They appreciate my active listening skills and openness to diverse perspectives. In team collaborations, colleagues often label me as a dedicated team player due to my inclusive approach, valuing every team member's opinion. During challenging times, I contribute to creating a positive and healthy team environment by maintaining a supportive and encouraging atmosphere. These qualities, coupled with my collaborative nature and attention to detail, have been valuable in achieving successful project outcomes.",
  },
  {
    question: "What's your greatest strength and biggest weakness?",
    answer:
      "My greatest strength is my passionate approach to learning and my commitment to applying knowledge to solve real-world problems. I believe this is important in the field of Computer Science as technologies evolve daily. I enjoy facing challenges, and I view them as valuable learning opportunities. This perspective helps me stay updated with new technologies and platforms in the fast-paced nature of the industry.\n\nAs a recent graduate, I perceive my limited work experience as a current weakness. However, I view this as an opportunity for growth rather than an obstacle. I am always eager to learn and adapt quickly to new environments, which is why I am confident that I will rapidly build up my skill set and contribute effectively to any team or project I join. While my professional journey is just beginning, I bring with me a strong academic background, and I am excited about applying my theoretical knowledge into practical solutions.",
  },
  {
    question:
      "Tell me about a time when you helped resolve a dispute between others.",
    answer:
      "While working on a challenging Software Engineering project to develop a time and attendance system, a conflict started among team members. One teammate appeared disengaged, affecting overall team dynamics and causing discomfort among other members. Recognizing the issue's impact on collaboration and productivity, I undertook the responsibility of addressing the conflict to create a more cohesive and effective team environment.\n\nInitiating an in-person conversation with the disengaged teammate, I found that his hesitancy came from a lack of experience in team projects and a fear of making mistakes. Drawing from my own early experiences, I shared the importance of seeking help from peers and reassured him that mistakes were valuable learning opportunities. Meanwhile, I proactively spoke to other developers to understand their concerns.\n\nTo address the conflict, I organized a team meeting and strategically divided the project tasks based on individual strengths, fostering a collaborative approach. This not only resolved the disengaged teammate's concerns but also showcased that the project was manageable and less intimidating than he initially thought. It also shifted other team members' perspectives positively, leading to increased participation, timely task completion, and a significant improvement in overall teamwork.\n\nThe resolution not only diffused the initial conflict but also positively transformed team dynamics. The once disengaged teammate became an active contributor, and collaboration within the team significantly improved. What initially posed a challenge evolved into a positive outcome, fostering a strong working relationship between developers. This experience enhanced my skills in navigating interpersonal conflicts, promoting effective communication, and steering towards mutually beneficial resolutions in software development team environments.",
  },
  {
    question: "How long would you expect to work for us if hired?",
    answer:
      "I am looking for long-term employment with XYZ, where I can truly immerse myself in your brand and ambitions and grow significantly as a Web Developer. I am impressed with AI-powered technologies embraced by XYZ and aim to bring my expertise as a web developer to help ensure XYZ advances in the field of health informatics. I envision making contributions to XYZ's success over the long term.",
  },
  {
    question:
      "Would you be able to work overtime? Nights and some Weekends if needed?",
    answer:
      "Unless there is an emergency, I am open to working overtime, nights, and weekends as needed by the company. I am willing to go above and beyond to contribute to the company's growth and success, recognizing that it aligns with my own professional development.",
  },
  {
    question: "In your opinion, what is the role of a Web Developer?",
    answer:
      "In my opinion, the role of a web developer is not limited to just writing code and building and maintaining websites. I perceive a web developer as a problem solver and a significant contributor to the overall user experience. A web developer understands the unique needs of clients and end-users and turns those requirements into efficient web solutions. A web developer should be able to work together with designers, project managers, and other team members to ensure that the technical implementation aligns with the project goals.\n\nAs a web developer, it is essential to stay updated with industry trends and modern technologies. This is a proactive approach that allows web developers to apply best practices, ensuring optimal performance and compatibility across various platforms. A web developer should also have effective communication skills, as they often need to explain complex technical concepts to non-technical stakeholders, creating a collaborative and transparent working environment.\n\nA Web Developer plays a crucial role in shaping the digital presence of a business or brand. The role requires beyond coding, such as creating seamless, visually appealing, and user-friendly web applications that contribute to the success and growth of the organization.",
  },
  {
    question: "How has your education prepared you for this role?",
    answer:
      "My education has provided me with a strong foundation and the necessary skills to excel in a Web Developer role. With a master's in Computer Systems and Software Design and a bachelor's in Computer Science, I gained hands-on experience with different web technologies, including HTML5, CSS, and JavaScript. I have applied these skills in projects that involved building dynamic and responsive web interfaces, contributing to enhanced user experiences. Moreover, I am proficient in several programming languages, including Java and Python, and have a comprehensive understanding of algorithms and data structures.\n\nOne notable project during my education involved developing a time and attendance system. This challenging project required not only technical proficiency but also a deep understanding of user needs. By utilizing modern libraries such as React.js and frameworks like Next.js, I successfully contributed to creating a user-friendly and efficient system. This project resulted in a significant reduction in paperwork by 80%, showcasing my ability to implement practical solutions that address real-world challenges.\n\nFurthermore, my coursework exposed me to various web development frameworks and methodologies like Node.js and allowed me to collaborate in many projects, enhancing my teamwork and communication abilities. For instance, working with a team to build a website for an organization required effective communication and coordination between developers, project manager, and other stake holders.\n\nIn summary, my education, combined with practical experiences, has equipped me with a technical and interpersonal skill set and a problem-solving mindset. I am confident that my exposure to technologies like HTML5, CSS, JavaScript, Node.js, React.js, and Next.js, and my experience of working on challenging projects, positions me well to contribute effectively to web development projects.",
  },
  {
    question: "How do you handle changes to requirements?",
    answer:
      "When faced with changes to requirements, I approach the situation strategically, drawing on my experience as a Project Manager for a web-based park-a-lot system. In this role, after achieving our second milestone and presenting it to the client, they expressed the need for certain functionality changes. Here's how I effectively handled the situation:\n\nFirstly, I emphasized the importance of documentation by having solid requirements gathering and creating a comprehensive document of the existing requirements. This documentation served as a baseline, and any proposed changes went through a formal change approval procedure.\n\nI ensured clear communication with all parties involved, making sure they understood the potential consequences of the changes. For example, in my case, additional resources were required for the proposed changes. Utilizing a what-if analysis tool, I predicted the project outcome, aiding in making informed decisions.\n\nFollowing a change control procedure, I thoroughly assessed the impact of the changes on the project schedule, budget, resources' capacity, and potential risks. This process helped us identify the need for more resources, a crucial aspect to accommodate the modifications.\n\nOnce the change was approved, I promptly created an updated project schedule, prioritizing tasks accordingly. Consistent communication with the project team throughout this process ensured everyone was aware of the changes, fostering a transparent and collaborative work environment.\n\nThis approach not only facilitated the successful completion of our project on time but also contributed to the overall delivery by preventing misunderstandings and ensuring alignment with the updated requirements.",
  },
  {
    question: "What makes you qualified for this position?",
    answer:
      "My technical expertise and experience in web development projects make me qualified for the Web Developer position at XYZ. I have in-depth knowledge of front-end web development, with proficiency in HTML5, CSS, JavaScript, and modern frameworks like React.js. This skill set positions me to effectively implement technical designs and create exceptional mobile and desktop web applications that align with the company's objectives.\n\nI have worked on several projects implementing web development life cycle, which allowed me to understand and contribute to the project from initial planning, through designing, building, testing, and maintaining the application. I ensure that the products I contribute to are not only well-designed but also efficient and reliable. I thoroughly understand project requirements and am commitment to delivering high-quality, fully functional products.\n\nMy expertise extends to responsive design and performance optimization. I have successfully designed and built responsive website applications, adapting seamlessly to various screen sizes. Additionally, my dedication to optimizing applications for maximum speed aligns with Deep Health's focus on creating reliable, scalable, and high-performance web applications.\n\nIn conclusion, my diverse range of skill sets from technical proficiency to comprehensive understanding of the web development lifecycle, and commitment to innovate web solutions make me a highly qualified candidate ready to contribute to the success of Deep Health's dynamic team.",
  },
  {
    question: "What do you understand about privacy and code of conduct?",
    answer:
      "Privacy means respecting and safeguarding individuals' personal information and maintaining confidentiality. As a web developer, it is important to follow privacy guidelines and implement proper coding practices, using encryption methods and follow data protection rules and regulations so that unauthorized party cannot access or misuse sensitive data. It is also necessary to be transparent with the end-users and inform them about collection, storing, and utilization of their data.\n\nA code of conduct is a set of ethical guidelines for employees and employers within a workplace. As a web developer, it is essential to follow company's regulations and fundamental values, respect its culture and norms, behave with honesty, and contribute to maintain a professional and inclusive working environment. Web developers should be responsible and ethically use the technology and ensure product development is within legal and ethical standards.",
  },
  {
    question:
      "What is the most difficult aspect of working as a Web Developer?",
    answer:
      "One of the most challenging aspects of working as a web developer is keeping pace with the One of the most difficult aspects of working as a web developer is keeping up with the rapid evolution of technology stacks. The web development field is dynamic, with new languages, frameworks, and libraries emerging regularly. So, a web developer needs to stay updated with modern technologies, which requires continuous learning and flexibility.\n\nI perceive life as an ever learning and growing opportunity. I enjoy the process of learning new skills and staying ahead of the game in web development. This approach helps me not only navigate the challenges posed by evolving technologies but also find fulfillment in the continuous learning and growing journey. I stay informed about latest technologies by reading online articles, attending conferences, and engaging in online discussions.",
  },
  {
    question: "Can you tell us about your previous work experience?",
    answer:
      "In my previous role as a Graduate Research Assistant at Jacksonville State University, I was deeply involved in cutting-edge research in the field of technology. I performed comprehensive analysis and deep study in using modern technologies including Docker and Podman as containerized servers in single-board computers like RPi and Odroid. I was honored to receive 'The Best Presenter Award' for my research paper titled 'Performance Evaluation of the Docker Technology on Different Raspberry Pi Models.' With my year and a half time as a research assistant, I was able to work on four different research projects with a focus on critical performance factors such as memory capacity, disk utilization, and network bandwidth. Two of my works are already published and other two are under evaluation for IEEE and ACM conferences.\n\nThis experience has equipped me with a strong foundation in learning new technologies, thorough understanding and analysis of the technology, problem solving skills, and my coding abilities - skills that directly align with the demands of a Web Developer role. Moreover, working with other like-minded professional enhanced effective collaboration and communication skills - attributes crucial in a team-oriented web development environment.",
  },
  {
    question: "Are you a team player? Give me an example of teamwork?",
    answer:
      "Yes, I am a dedicated team player.\n\nIn a recent role as Project Manager, I successfully led a team in delivering a web-based parking system. Despite varying programming backgrounds within the team, I strategically assigned tasks based on individual strengths. For example, leveraging a team member's database expertise, we achieved effective collaboration with backend developers. Regular communication and transparent reporting ensured the team's coordinated effort, resulting in the successful delivery of the project. This experience highlights my ability to lead and collaborate within a diverse team to achieve a common goal.\n\nI am excited about the prospect of bringing my teamwork skills to a dynamic team focused on creating innovative solutions for end-users.",
  },
  {
    question: "What can you bring to this company?",
    answer:
      "I bring a unique combination of a fast-paced work ethic, in-depth technical knowledge, and a profound understanding of current trends in web development within the healthcare industry. My expertise includes web development, strong project management skills, and effective collaboration within a team, recognizing the critical role of professional web development in contributing to XYZ's success.\n\nI also bring positive and growth-oriented mindset that aligns with the dynamic nature of the industry, and I possess the ability to seamlessly integrate into a team while showcasing a genuine passion for web development. I am confident that my results-driven approach will contribute significantly to XYZ's projects and overall success.",
  },
  {
    question:
      "Congratulations on Navigating the Interview Journey! Wish you all the best for your next dream job! 🚀",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questionsAndAnswers.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <div className="header">
        <h1>Interview with XYZ</h1>
        <h3>Web Developer</h3>
      </div>
      <div className="candidate-info">
        <div className="info-card">
          <p className="name">Mausam Parajuli</p>
          <p>
            <FaLocationDot /> Thornton, CO
          </p>
          <p>
            <FaPhone /> 2562949697
          </p>
          <p>
            <MdEmail /> mausamparajuli313@gmail.com
          </p>
        </div>
      </div>
      <div className="container">
        <div className="question-container">
          <h2>{questionsAndAnswers[currentQuestion].question}</h2>
          <p style={{ whiteSpace: "pre-line" }}>
            {questionsAndAnswers[currentQuestion].answer}
          </p>
        </div>
        <div className="buttons">
          <button onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questionsAndAnswers.length - 1}
          >
            Next
          </button>
        </div>
        <div className="centered-button">
          <a href={answers} download className="download-button">
            Download Answers
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
