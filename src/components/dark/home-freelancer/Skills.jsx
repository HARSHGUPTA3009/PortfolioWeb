import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const imgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  };

  const imgInnerStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const skills = [
    { img: '/dark/assets/imgs/resume/s2.png', title: 'Fullstack Dev' },
    { img: '/dark/assets/imgs/resume/s3.png', title: 'DSA (JAVA)' },
    { img: '/dark/assets/imgs/resume/genai.svg', title: 'GenAI' },
    { img: '/dark/assets/imgs/resume/python.png', title: 'Python' },
    { img: '/dark/assets/imgs/resume/blockchain.png', title: 'Web3' },
    { img: '/dark/assets/imgs/resume/github.png', title: 'Github' },
  ];

  return (
    <div className="my-skills2">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <h6 className="sub-title main-color mb-15">Professional Skills</h6>
          <h2>
            My Skills & <span className="fw-200">Expertise</span>
          </h2>
        </div>
        <div className="row md-marg">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-lg-2 col-md-4 col-6">
              <motion.div
                className="item mb-30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 0.05 * idx }}
              >
                <div className="box-bord main-bg">
                  <div className="img" style={imgStyle}>
                    <img src={skill.img} alt={skill.title} style={imgInnerStyle} />
                  </div>
                </div>
                <h6 className="fz-18 mt-10 text-center">{skill.title}</h6>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;
