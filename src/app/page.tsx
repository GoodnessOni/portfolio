import Image from "next/image";
import Nav from "@/components/Nav";
import HeroMesh from "@/components/HeroMesh";
import WorkSection from "@/components/WorkSection";
import Experience from "@/components/Experience";
import PortraitTilt from "@/components/PortraitTilt";
import Contact, { Halves } from "@/components/Contact";
import { awards, tools } from "@/data/site";
import { projects } from "@/data/projects";
import { asset, cvPath } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <header className="hero grid-bg">
          <HeroMesh />
          <div className="wrap">
            <div>
              <span className="status">
                <span className="dot" />
                Currently AI/ML Intern at Teazy Tech, AI UniPod UNILAG
              </span>
              <div className="eyebrow mono">Goodness Oluwapelumi Oni · Lagos, Nigeria</div>
              <h1>
                Systems thinker.
                <br />
                <em>AI builder.</em>
              </h1>
              <div className="roles">
                <span>Founder &amp; CEO, OGverse Innovations</span>
                <span>AI/ML Engineer</span>
                <span>Systems Engineering, UNILAG</span>
              </div>
              <p className="bio">
                I&apos;m an AI/ML engineer and the founder of OGverse Innovations. I build AI products end to end, from the models to the backend and payments behind them, and I lead the technical teams that ship them.
              </p>
              <div className="cta">
                <a className="btn btn-dark" href="#work">
                  View work <span className="arrow">→</span>
                </a>
                <a className="btn btn-ghost" href={asset(cvPath)} download="Goodness_Oni_Master_CV.pdf">
                  Download CV <span className="arrow">↓</span>
                </a>
              </div>
              <div className="facts">
                <div>
                  <b>6</b>
                  <span>Leadership roles held</span>
                </div>
                <div>
                  <b>3</b>
                  <span>First-place finishes</span>
                </div>
                <div>
                  <b>Top 20</b>
                  <span>Dangote Cement, of 300+</span>
                </div>
              </div>
            </div>
            <PortraitTilt>
              <div className="arcbg" />
              <div className="float">
                <span className="medal" aria-hidden="true">
                  ✦
                </span>
                <div>
                  <b>Problem solver</b>
                  <small>I turn hard problems into working products</small>
                </div>
              </div>
              <div className="frame">
                <Image src={asset("/img/portrait.webp")} alt="Portrait of Goodness Oni" width={600} height={900} priority sizes="(max-width: 760px) 100vw, 410px" />
                <div className="glare" aria-hidden="true" />
                <div className="cap">
                  <span className="mono">Goodness Oni / Founder</span>
                  <span className="mono" style={{ color: "var(--orange-ink)" }}>
                    OGverse
                  </span>
                </div>
              </div>
            </PortraitTilt>
          </div>
          <Halves />
        </header>

        <WorkSection />

        <section className="awards" aria-labelledby="recognition-title">
          <div className="mesh2" />
          <div className="wrap">
            <div className="label mono">Recognition</div>
            <h2 id="recognition-title">
              Results, <em>with the certificate one click away.</em>
            </h2>
            <div className="aw">
              {awards.map((a) => (
                <div key={a.s}>
                  <b>{a.b}</b>
                  <span>{a.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Experience />

        <section className="tools" id="tools">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="label mono">Skills</div>
                <h2>
                  Skills I build with, <em>across AI, backend and hardware.</em>
                </h2>
              </div>
              <p>The tools and languages I use to take a product from idea to working system.</p>
            </div>
            <div className="tgrid">
              {tools.map((t) => (
                <div key={t.h}>
                  <h3>
                    <small>{t.n}</small>
                    {t.h}
                  </h3>
                  <ul>
                    {t.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap about">
            <div>
              <div className="label mono">About</div>
              <p className="lead">
                Systems Engineering at UNILAG taught me to see the <em>whole system</em>: the model, the API, the payment flow and the people who use it.
              </p>
              <p className="body">
                I learned web development with DSN in 2022 and AI/ML with Digital SkillUp Africa in 2025, then founded OGverse Innovations, now registered with the CAC. Today I lead product and engineering there, lead the AI/ML squad at Techstars UNILAG, and run sponsorship and partnerships work for ASES.
              </p>
            </div>
            <div className="stats">
              <div className="stat navy">
                <b>
                  4.67<sup> / 5.00</sup>
                </b>
                <span>CGPA, Systems Engineering, 300 Level</span>
              </div>
              <div className="stat">
                <b>{projects.length}</b>
                <span>Projects built, software and hardware</span>
              </div>
              <div className="stat">
                <b>6</b>
                <span>Leadership roles across UNILAG and Lagos</span>
              </div>
              <div className="stat">
                <b>2029</b>
                <span>Expected graduation, University of Lagos</span>
              </div>
            </div>
          </div>
        </section>

        <section id="cv" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cvbox grid-bg">
              <div className="cvpaper" aria-hidden="true">
                <Image src={asset("/img/cv-page1.webp")} alt="" width={560} height={793} sizes="250px" />
                <Image src={asset("/img/cv-page1.webp")} alt="" width={560} height={793} sizes="250px" />
              </div>
              <div>
                <div className="label mono">Curriculum vitae</div>
                <h2 style={{ fontSize: "var(--cv-h2, 52px)" }}>
                  The full record, <em>three pages.</em>
                </h2>
                <ul>
                  <li>Profile and education</li>
                  <li>Leadership and internships</li>
                  <li>Software and ML projects</li>
                  <li>Engineering projects</li>
                  <li>Skills and tools</li>
                  <li>Certificates and recognition</li>
                </ul>
                <div className="cta" style={{ marginTop: 0 }}>
                  <a className="btn btn-dark" href={asset(cvPath)} download="Goodness_Oni_Master_CV.pdf">
                    Download PDF <span className="arrow">↓</span>
                  </a>
                  <a className="btn btn-ghost" href={asset(cvPath)} target="_blank" rel="noopener noreferrer">
                    Preview online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
