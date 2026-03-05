import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* ---------- Education Section ---------- */}
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in CSE</h3>
                <span className="qualification__subtitle">VTU – Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 – 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">Kerala Board</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 – 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">AKM – Kerala</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 – 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ---------- Experience Section ---------- */}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* SRV InfoTech – left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack Developer</h3>
                <span className="qualification__subtitle">
                  SRV InfoTech – Kannur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2026 – Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Webeaz Technologies – right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Trainee</h3>
                <span className="qualification__subtitle">
                  Webeaz Technologies – Kozhikode
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Nov 2025 – Dec 2025
                </div>
              </div>
            </div>

            {/* Mentorow – left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  CipherByte Technologies – Remote
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 – Aug 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* CipherByte Technologies – right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MERN Stack Trainee</h3>
                <span className="qualification__subtitle">
                  Mentorow – Kochi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">Oct 2023 – Jun 2024</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
