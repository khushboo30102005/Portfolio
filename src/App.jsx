import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Database, BrainCircuit, Terminal, ExternalLink, MapPin, Sparkles } from 'lucide-react'

const skills = [
  { title: 'Frontend', icon: Code2, items: ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
  { title: 'Data & Infrastructure', icon: Database, items: ['MongoDB', 'Redis', 'Git & GitHub', 'Cloud Storage'] },
  { title: 'AI / ML', icon: BrainCircuit, items: ['Python', 'LangChain', 'LangGraph', 'RAG fundamentals'] },
]
const projects = [
  { number: '01', name: 'Smart File Management System', type: 'Full-stack application', description: 'A secure file workspace focused on thoughtful access control, sharing, storage management and time-aware workspaces.', stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis'], highlight: 'Security-first file management', link: 'https://backend-with-node-js-five.vercel.app/', label: 'View repository' },
  { number: '02', name: 'Aven — AI Assistant', type: 'AI / LLM application', description: 'An experimental assistant exploring tool use, conversational workflows and practical AI features with a Python-based stack.', stack: ['Python', 'LangChain', 'LangGraph', 'Hugging Face'], highlight: 'Tool-using conversational assistant', link: 'https://github.com/khushboo30102005', label: 'Explore GitHub' },
  { number: '03', name: 'Rock One Solutions Website', type: 'Web development', description: 'Contributing to a business website and content workflow, with attention to responsive presentation and clear service communication.', stack: ['JavaScript', 'React', 'Web UI', 'SEO content'], highlight: 'Real-world team collaboration', link: 'https://rockonesolutions.com/', label: 'View repository' },
]
const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } } }
function SectionHeading({ eyebrow, title, note }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><div className="heading-row"><h2>{title}</h2>{note && <p>{note}</p>}</div></div> }
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar"><a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">K<span>.</span></span><span>KHUSHBOO <i>SAINI</i></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fade}>
          <div className="availability"><span className="pulse-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
          <p className="hero-intro">Hello, I'm Khushboo <span className="wave">✳</span></p>
          <h1>I build things<br/>for the <span className="gradient-text">web</span><span className="hero-period">.</span></h1>
          <p className="hero-description">A developer who enjoys turning ideas into useful digital experiences — from full-stack web applications to experiments with AI.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16}/></a></div>
          <div className="hero-socials"><a href="https://github.com/khushboo30102005" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="www.linkedin.com/in/khushboo-saini-819241389/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><span className="social-separator"/> <span><MapPin size={15}/> India</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
          <div className="art-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="art-core"><span className="core-k">K<span>.</span></span><span className="core-caption">BUILD · LEARN · CREATE</span></div>
          <div className="floating-card card-code"><div className="card-dots"><i/><i/><i/></div><code><b>const</b> mindset = <em>"keep building"</em>;</code><span className="code-cursor"/></div>
          <div className="floating-card card-stack"><span className="stack-label">CURRENT FOCUS</span><strong>Full-stack + AI</strong><span className="stack-mini">Curiosity-led development</span></div>
          <div className="art-index">PORTFOLIO / 2026</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section className="section-wrap about-section" id="about"><SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Curious by nature.
       Developer by choice." note="I care about the details, the logic behind the interface, and the people who use what I build."/>
        <div className="about-grid"><motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}><p>I'm pursuing an <strong>MCA</strong> after completing a <strong>BSc in Mathematics</strong>. My path into software development is driven by curiosity and a desire to solve real problems with technology.</p><p>I enjoy working across the stack — shaping clean interfaces, designing backend logic, and understanding how systems fit together. I'm also exploring how AI can make software more useful and capable.</p><p>For me, every project is a chance to learn something deeply, make better engineering decisions, and build with purpose.</p><a className="text-link" href="#contact">A little more about my journey <ArrowUpRight size={16}/></a></motion.div>
          <div className="about-facts"><div className="fact-card"><span className="fact-number">01</span><strong>Build with intent</strong><p>Useful features over unnecessary complexity.</p></div><div className="fact-card"><span className="fact-number">02</span><strong>Learn by doing</strong><p>Hands-on projects, iteration and curiosity.</p></div><div className="fact-card"><span className="fact-number">03</span><strong>Think end-to-end</strong><p>From user experience to backend reliability.</p></div></div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills"><SectionHeading eyebrow="02 / MY TOOLKIT" title="Tools I like to build with." note="A growing toolkit shaped by projects, practice and a lot of curiosity."/>
        <div className="skills-grid">{skills.map((group, i) => <motion.div className="skill-card" key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * .08 }}><div className="skill-card-top"><span className="skill-icon"><group.icon size={20}/></span><span className="skill-count">0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div>
        <div className="learning-strip"><Sparkles size={18}/><span><strong>Always learning:</strong> TypeScript, system design, data structures & algorithms, and practical AI engineering.</span></div>
      </section>

      <section className="section-wrap projects-section" id="projects"><SectionHeading eyebrow="03 / SELECTED WORK" title="Things I've been building." note="A few projects that reflect what I'm learning and the kind of problems I enjoy solving."/>
        <div className="projects-list">{projects.map((project, i) => <motion.article className="project-row" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-meta"><span>{project.type}</span><span className="meta-dot"/><span>{project.highlight}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={project.label}><ArrowUpRight size={22}/></a></motion.article>)}</div>
        <div className="all-work"><span>More experiments, code and progress</span><a className="text-link" href="https://github.com/khushboo30102005" target="_blank" rel="noreferrer">Explore GitHub <ExternalLink size={15}/></a></div>
      </section>

      <section className="section-wrap experience-section" id="experience"><SectionHeading eyebrow="04 / EXPERIENCE & EDUCATION" title="Learning in the real world." note="Building my foundation through education, hands-on work and collaboration."/>
        <div className="timeline"><div className="timeline-item"><div className="timeline-marker"/><div className="timeline-date">SEP 2026 — PRESENT</div><div className="timeline-content"><span className="timeline-type">PROFESSIONAL EXPERIENCE</span><h3>AI Engineer Intern <span>@ Rock One Solutions</span></h3><p>Contributing to website development and digital content initiatives while growing my understanding of professional software delivery and team collaboration.</p><div className="project-tags"><span>Web Development</span><span>Team Collaboration</span><span>Content</span></div></div></div><div className="timeline-item"><div className="timeline-marker muted"/><div className="timeline-date">2025 — PRESENT</div><div className="timeline-content"><span className="timeline-type">POSTGRADUATE EDUCATION</span><h3>Master of Computer Applications <span>(MCA)</span></h3><p>Building a stronger foundation in computer applications, software development and applied computing.</p></div></div><div className="timeline-item"><div className="timeline-marker muted"/><div className="timeline-date">COMPLETED</div><div className="timeline-content"><span className="timeline-type">UNDERGRADUATE EDUCATION</span><h3>Bachelor of Science <span>— Mathematics</span></h3><p>Developed analytical thinking, structured problem-solving and a strong quantitative foundation.</p></div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><span className="eyebrow">05 / HAVE A PROJECT IN MIND?</span><h2>Let's make something<br/><span className="gradient-text">meaningful.</span></h2><p>I'm always happy to connect, exchange ideas, and explore opportunities to build and learn together.</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:khushboo30102005@gmail.com">Say hello <Mail size={17}/></a><a href="https://github.com/khushboo30102005" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/khushboo-saini-819241389/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span>KHUSHBOO <i>SAINI</i></span></a><span>Designed & built with curiosity <span className="footer-heart">✳</span></span><span>© {new Date().getFullYear()} Khushboo Saini</span></footer>
  </div>
}
export default App
