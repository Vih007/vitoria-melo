"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  BookOpen,
  Heart,
  Menu,
  X,
  ArrowUpRight,
  ArrowUp,
  ChevronDown,
  Cloud,
  Sparkles,
  Trophy,
  Zap,
  Target,
  Star,
  Terminal,
  Gamepad2,
  Rocket,
  Hand,
  Mic,
  PawPrint,
  FlaskConical,
  ScanFace,
  AudioLines,
  QrCode,
  Sprout,
} from "lucide-react";

/ ═══════════════════════════ DADOS ═══════════════════════════ /;

interface Project {
  id: string;

  title: string;

  subtitle: string;

  category: "ia" | "backend" | "web";

  badge: string;

  badgeStyle: string;

  liveUrl: string | null;

  githubUrl: string;

  tech: string[];

  description: string;

  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: "libras-cv",

    title: "🤟 Reconhecimento de Libras em Tempo Real",

    subtitle: "Tecnologia assistiva e visão computacional",

    category: "ia",

    badge: "Pesquisa PIBIC-AF",

    badgeStyle: "bg-amber-200 text-amber-950",

    liveUrl: null,

    githubUrl: "https://github.com/Vih007",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "MediaPipe Holistic",
      "OpenCV",
      "NumPy",
    ],

    description:
      "Projeto de pesquisa científica focado na captura e processamento de expressões não-manuais e parâmetros gramaticais da Língua Brasileira de Sinais (Libras) para tradução em tempo real.",

    highlights: [
      "Extração de keypoints faciais e corporais sem necessidade de sensores físicos",

      "Pipeline de Deep Learning treinado para interpretação gramatical",

      "Foco em inclusão social e acessibilidade comunicativa",
    ],
  },

  {
    id: "budgeting-ai",

    title: "💰 Assistente Financeiro IA",

    subtitle: "Spring AI Budgeting & Audio Control",

    category: "ia",

    badge: "IA e voz",

    badgeStyle: "bg-lime-200 text-lime-950",

    liveUrl: "https://budgeting.railway.app",

    githubUrl: "https://github.com/Vih007",

    tech: [
      "Java 21",
      "Spring Boot 3.3.2",
      "Spring AI",
      "OpenAI Whisper",
      "MySQL",
      "Docker",
      "Tailwind CSS",
    ],

    description:
      "Assistente financeiro inteligente acionado por voz. O usuário dita o gasto em voz alta (ex: “Gastei 50 reais no mercado”), e a inteligência artificial transcreve via Whisper, interpreta a categoria e salva a transação automaticamente.",

    highlights: [
      "Transcrição e interpretação de voz em tempo real",

      "Arquitetura modular em camadas (Domain, Application, Infrastructure)",

      "Deploy contínuo e ativo na nuvem (Railway)",
    ],
  },

  {
    id: "rastrear-cuidar",

    title: "🐾 Rastrear para Cuidar: Gestão de Animais",

    subtitle: "Identidade digital e gestão pública animal",

    category: "backend",

    badge: "Governo e inclusão",

    badgeStyle: "bg-emerald-200 text-emerald-950",

    liveUrl: null,

    githubUrl: "https://github.com/Vih007",

    tech: [
      "Java 25 (LTS)",
      "Spring Boot 4.x",
      "React (Vite)",
      "PostgreSQL 17",
      "Docker",
      "OpenAPI/Swagger",
    ],

    description:
      "Plataforma de gestão pública voltada para o bem-estar animal no município de Salgueiro-PE. Utiliza a tecnologia de QR Codes para criar uma identidade digital para animais de rua ou comunitários.",

    highlights: [
      "Painel integrado para Gestores Públicos, ONGs e Cidadãos",

      "Canal direto para denúncias, histórico sanitário e adoção consciente",

      "Documentação completa com OpenAPI / Swagger",
    ],
  },

  {
    id: "qualidade-leite",

    title: "🐄 Controle de Qualidade do Leite",

    subtitle: "PIBIC Agropecuária IFPE Belo Jardim",

    category: "web",

    badge: "Extensão e agro",

    badgeStyle: "bg-sky-200 text-sky-950",

    liveUrl: null,

    githubUrl: "https://github.com/Vih007",

    tech: ["PHP 8", "JavaScript", "HTML5", "CSS3", "MySQL"],

    description:
      "Sistema web para gerenciar e avaliar a produção e qualidade do leite, saúde reprodutiva das vacas e desempenho do rebanho no IFPE Campus Belo Jardim.",

    highlights: [
      "Relatórios e alertas automáticos de anomalias na produção",

      "Controle de acesso por níveis de usuário (Alunos e Professores)",

      "Acompanhamento do histórico de vacinação e saúde do rebanho",
    ],
  },
];

/* ── Stack: ícones (devicon / simple-icons). Se algum não carregar, vira um monograma. ── */

interface Tech {
  name: string;

  icon?: string;

  mono?: string; // monograma de reserva

  cloud?: boolean;
}

const dv = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`;

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

// Faixa 1 → anda para a ESQUERDA: Frontend + Backend

const stackRowOne: Tech[] = [
  { name: "TypeScript", icon: dv("typescript/typescript-original") },

  { name: "JavaScript", icon: dv("javascript/javascript-original") },

  { name: "HTML5", icon: dv("html5/html5-original") },

  { name: "CSS3", icon: dv("css3/css3-original") },

  { name: "React", icon: dv("react/react-original") },

  { name: "Next.js", icon: dv("nextjs/nextjs-original") },

  { name: "Tailwind CSS", icon: dv("tailwindcss/tailwindcss-original") },

  { name: "Sass/SCSS", icon: dv("sass/sass-original") },

  { name: "React Router", icon: si("reactrouter") },

  { name: "Vite", icon: dv("vitejs/vitejs-original") },

  { name: "npm", icon: si("npm") },

  { name: "Yarn", icon: dv("yarn/yarn-original") },

  { name: "C#", icon: dv("csharp/csharp-original") },

  { name: "Java", icon: dv("java/java-original") },

  { name: "PHP", icon: dv("php/php-original") },

  { name: "C", icon: dv("c/c-original") },

  { name: ".NET", icon: dv("dotnetcore/dotnetcore-original") },

  { name: "EF Core", mono: "EF" },

  { name: "Spring Boot", icon: dv("spring/spring-original") },

  { name: "Maven", icon: dv("maven/maven-original") },

  { name: "PostgreSQL", icon: dv("postgresql/postgresql-original") },

  { name: "MySQL", icon: dv("mysql/mysql-original") },

  { name: "Prisma", icon: dv("prisma/prisma-original") },

  { name: "pgAdmin", mono: "pg" },
];

// Faixa 2 → anda para a DIREITA: Dados/IA + DevOps/Ferramentas

const stackRowTwo: Tech[] = [
  { name: "Python", icon: dv("python/python-original") },

  { name: "Anaconda", icon: dv("anaconda/anaconda-original") },

  { name: "Google Colab", icon: si("googlecolab") },

  { name: "Jupyter", icon: dv("jupyter/jupyter-original") },

  { name: "Pandas", icon: dv("pandas/pandas-original") },

  { name: "NumPy", icon: dv("numpy/numpy-original") },

  { name: "Matplotlib", icon: dv("matplotlib/matplotlib-original") },

  { name: "Seaborn", mono: "Sb" },

  { name: "Scikit-Learn", icon: dv("scikitlearn/scikitlearn-original") },

  { name: "TensorFlow", icon: dv("tensorflow/tensorflow-original") },

  { name: "Keras", icon: dv("keras/keras-original") },

  { name: "MediaPipe", mono: "MP" },

  { name: "Git", icon: dv("git/git-original") },

  { name: "GitHub", icon: dv("github/github-original") },

  { name: "Docker", icon: dv("docker/docker-original") },

  { name: "Docker Compose", icon: dv("docker/docker-original") },

  { name: "Vitest", icon: si("vitest") },

  { name: "PyTest", icon: dv("pytest/pytest-original") },

  { name: "Postman", icon: dv("postman/postman-original") },

  { name: "VS Code", icon: dv("vscode/vscode-original") },

  { name: "Eclipse", icon: dv("eclipse/eclipse-original") },

  { name: "Azure", icon: dv("azure/azure-original") },

  { name: "Cloud Services", cloud: true },
];

/* ── Stack completa, organizada do jeito que você descreveu ── */

const stackGroups = [
  {
    title: "Frontend e desenvolvimento web",

    accent: "bg-amber-100 text-amber-950",

    blocks: [
      {
        label: "Linguagens e marcação",
        items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
      },

      { label: "Frameworks e bibliotecas", items: ["React", "Next.js"] },

      { label: "Estilização e UI", items: ["Tailwind CSS", "Sass/SCSS"] },

      { label: "Roteamento e ferramentas", items: ["React Router", "Vite"] },

      { label: "Gerenciadores de pacotes", items: ["npm", "yarn"] },
    ],
  },

  {
    title: "Backend e arquitetura de sistemas",

    accent: "bg-emerald-100 text-emerald-950",

    blocks: [
      { label: "Linguagens", items: ["C#", "Java", "PHP", "C"] },

      {
        label: "Ecossistema .NET",
        items: [".NET Framework", "Entity Framework Core"],
      },

      { label: "Ecossistema Java", items: ["Spring Boot", "Maven"] },

      {
        label: "Banco de dados e ORM",
        items: ["PostgreSQL", "MySQL", "Prisma ORM"],
      },

      { label: "Ferramentas de banco", items: ["pgAdmin"] },
    ],
  },

  {
    title: "Ciência de dados, IA e machine learning",

    accent: "bg-lime-100 text-lime-950",

    blocks: [
      {
        label: "Ambientes e execução",
        items: ["Python", "Anaconda", "Google Colab", "Jupyter Notebook"],
      },

      { label: "Manipulação e análise", items: ["Pandas", "NumPy"] },

      { label: "Visualização", items: ["Matplotlib", "Seaborn"] },

      {
        label: "Machine learning e visão computacional",
        items: ["Scikit-Learn", "TensorFlow", "Keras", "MediaPipe"],
      },
    ],
  },

  {
    title: "DevOps, testes e ferramentas de apoio",

    accent: "bg-sky-100 text-sky-950",

    blocks: [
      { label: "Controle de versão", items: ["Git", "GitHub"] },

      { label: "Containerização", items: ["Docker", "Docker Compose"] },

      {
        label: "Testes automatizados",
        items: ["Vitest (Frontend)", "PyTest (Python)"],
      },

      {
        label: "Testes de API e desenvolvimento",
        items: ["Postman", "Visual Studio Code", "Eclipse"],
      },

      {
        label: "Cloud computing",
        items: ["Microsoft Azure", "Cloud Services (deploy e hospedagem)"],
      },
    ],
  },
];

const navItems = [
  { id: "sobre", label: "Perfil" },

  { id: "projetos", label: "Missões" },

  { id: "stack", label: "Habilidades" },

  { id: "trajetoria", label: "Conquistas" },
];

const heroWords = [
  "experiências digitais",
  "sistemas full-stack",
  "IA com propósito",
  "tecnologia acessível",
];

/ Quadradinho branco com o logo da tecnologia e o nome embaixo. /;

function TechTile({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mr-5 flex w-24 shrink-0 flex-col items-center gap-3">
      <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white shadow-[0_10px_28px_-10px_rgba(16,32,26,0.35)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
        {tech.cloud ? (
          <Cloud size={38} className="text-sky-500" strokeWidth={1.8} />
        ) : tech.icon && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element

          <img
            src={tech.icon}
            alt={tech.name}
            width={44}
            height={44}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-11 w-11 object-contain"
          />
        ) : (
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-amber-200 to-lime-200 font-display text-lg font-bold text-ink">
            {tech.mono ?? tech.name.slice(0, 2)}
          </span>
        )}
      </div>

      <span className="text-center text-xs font-medium leading-tight text-stone-500">
        {tech.name}
      </span>
    </div>
  );
}

/ Linha que desliza sem parar. `reverse` inverte o sentido. /;

function Marquee({
  items,

  reverse = false,

  duration = 70,
}: {
  items: Tech[];

  reverse?: boolean;

  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden py-3">
      <div
        className={`marquee-track ${reverse ? "marquee-right" : ""}`}
        style={{ ["--dur" as any]: `${duration}s` }}
      >
        {loop.map((t, i) => (
          <TechTile key={`${t.name}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}

function ProjectIllustration({ projectId }: { projectId: string }) {
  if (projectId === "libras-cv") {
    return (
      <div className="project-art project-art-libras">
        <div className="art-scan-ring" />
        <div className="art-hand-wrap">
          <Hand className="art-main-icon" strokeWidth={1.35} />
          <span className="hand-point point-one" />
          <span className="hand-point point-two" />
          <span className="hand-point point-three" />
          <span className="hand-point point-four" />
          <span className="hand-point point-five" />
        </div>
        <div className="art-face-track">
          <ScanFace size={20} /> FACIAL KEYPOINTS
        </div>
        <div className="art-side-note">01 / GESTURE RECOGNITION</div>
        <div className="art-signal signal-a" />
        <div className="art-signal signal-b" />
      </div>
    );
  }
  if (projectId === "budgeting-ai") {
    return (
      <div className="project-art project-art-audio">
        <div className="audio-halo" />
        <div className="audio-mic">
          <Mic size={54} strokeWidth={1.4} />
        </div>
        <div className="audio-wave" aria-hidden="true">
          {Array.from({ length: 25 }, (_, i) => (
            <i
              key={i}
              style={
                { "--bar": `${18 + ((i * 17) % 52)}px` } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className="audio-transcript">
          <AudioLines size={15} /> “Gastei 50 reais...”
        </div>
        <div className="audio-chip">
          IA <span>→</span> TRANSAÇÃO
        </div>
      </div>
    );
  }
  if (projectId === "rastrear-cuidar") {
    return (
      <div className="project-art project-art-pets">
        <div className="pet-orbit pet-orbit-one" />
        <div className="pet-orbit pet-orbit-two" />
        <PawPrint className="pet-paw" strokeWidth={1.35} />
        <div className="pet-qr">
          <QrCode size={35} strokeWidth={1.5} />
        </div>
        <div className="pet-tag">
          <span>IDENTIDADE DIGITAL</span>
          <strong>PET • 0001</strong>
        </div>
        <div className="pet-leaf">
          <Sprout size={22} />
        </div>
      </div>
    );
  }
  return (
    <div className="project-art project-art-milk">
      <div className="milk-orbit" />
      <div className="milk-flask">
        <FlaskConical size={64} strokeWidth={1.25} />
      </div>
      <div className="milk-drop drop-one" />
      <div className="milk-drop drop-two" />
      <div className="milk-data">
        <span>QUALIDADE DO LEITE</span>
        <strong>
          <i /> ANÁLISE DE DADOS
        </strong>
        <div className="milk-meter">
          <i />
        </div>
      </div>
      <div className="milk-cow">🐄</div>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-tag">
      <span className="tag-spark">✦</span>
      {children}
    </span>
  );
}

export default function PortfolioApp() {
  const [activeProject, setActiveProject] = useState(projectsData[0].id);

  const [profileTab, setProfileTab] = useState<
    "trajetoria" | "foco" | "metodo"
  >("trajetoria");

  const [wordIndex, setWordIndex] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [siteTheme, setSiteTheme] = useState<
    "green" | "light" | "pink" | "purple"
  >("green");
  const cycleTheme = () =>
    setSiteTheme(
      (current) =>
        (
          ({
            green: "light",
            light: "pink",
            pink: "purple",
            purple: "green",
          }) as const
        )[current],
    );

  const [copied, setCopied] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [heroScroll, setHeroScroll] = useState(0);

  const emailAddress = "melovitoria763@gmail.com";

  const selectedProject =
    projectsData.find((p) => p.id === activeProject) ?? projectsData[0];

  const projectIndex =
    projectsData.findIndex((p) => p.id === selectedProject.id) + 1;

  useEffect(() => {
    const timer = window.setInterval(
      () => setWordIndex((i) => (i + 1) % heroWords.length),
      2600,
    );

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 700);
      setHeroScroll(Math.min(window.scrollY / (window.innerHeight * 0.72), 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);

      setCopied(true);

      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  return (
    <main
      className="rpg-site min-h-screen overflow-hidden"
      data-theme={siteTheme}
    >
      <div className="scanlines" aria-hidden="true" />

      <div className="scroll-meter" aria-hidden="true" />

      <header className="site-nav">
        <a href="#inicio" className="brand-mark" aria-label="Voltar ao início">
          <span className="brand-symbol">V.</span>
        </a>

        <nav className={`${menuOpen ? "nav-links nav-open" : "nav-links"}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mini-card-stack"
          type="button"
          onClick={cycleTheme}
          aria-label={`Tema atual: ${{ green: "verde original", light: "claro", pink: "rosa", purple: "roxo" }[siteTheme]}. Clique para mudar o tema`}
          title="Mudar paleta de cores"
        >
          <span className="theme-card theme-card-back" aria-hidden="true" />
          <span className="theme-card theme-card-middle" aria-hidden="true" />
          <span className="theme-card theme-card-front" aria-hidden="true">
            <span className="theme-card-mark">V.</span>
          </span>
        </button>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero-shell">
        <div className="hero-grid" />

        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="hero-inner">
          <div
            className="hero-copy"
            style={{
              filter: `blur(${heroScroll * 5}px)`,
              opacity: 1 - heroScroll * 0.58,
              transform: `translateY(${-heroScroll * 22}px)`,
            }}
          >
            <div className="eyebrow">
              <span className="online-dot" /> DISPONÍVEL PARA CRIAR{" "}
              <span className="eyebrow-divider">/</span> IFPE · ENGENHARIA DE
              SOFTWARE
            </div>

            <div className="hero-accent-line" aria-hidden="true" />

            <h1 className="hero-title">
              <span>VITÓRIA</span>
              <span className="neon-word">
                MELO<span className="title-star">✳</span>
              </span>
            </h1>

            <p className="hero-subtitle">
              Desenvolvedora que transforma ideias em{" "}
              <span key={wordIndex} className="changing-word">
                {heroWords[wordIndex]}
              </span>
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="pixel-button primary-button">
                <Code2 size={18} /> EXPLORAR PROJETOS <ArrowUpRight size={17} />
              </a>

              <a href="#sobre" className="pixel-button ghost-button">
                SOBRE MIM <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Vih007"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GITHUB
              </a>

              <a
                href="https://www.linkedin.com/in/vitória-melo-7babb5214"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LINKEDIN
              </a>

              <button onClick={copyEmail}>
                <Mail size={17} />
                {copied ? "E-MAIL COPIADO!" : "E-MAIL"}
              </button>
            </div>
          </div>

          <aside
            className="player-panel"
            style={{
              filter: `blur(${heroScroll * 5}px)`,
              opacity: 1 - heroScroll * 0.58,
              transform: `translateY(${-heroScroll * 22}px)`,
            }}
          >
            <div className="panel-corner corner-tl" />
            <div className="panel-corner corner-tr" />
            <div className="panel-corner corner-bl" />
            <div className="panel-corner corner-br" />

            <div className="player-topline">
              <span>DEVELOPER PROFILE</span>
              <span className="live-label">
                <i /> ONLINE
              </span>
            </div>

            <div className="player-main">
              <div className="avatar-frame">
                <div className="avatar-halo" />
                <Image
                  src="/avatar.png"
                  alt="Foto de Vitória Melo"
                  fill
                  priority
                  sizes="(max-width: 640px) 105px, 138px"
                  className="avatar-photo"
                />

                <span className="avatar-level">DEV / 01</span>
              </div>

              <div className="player-info">
                <span className="micro-label">DEVELOPER</span>
                <span className="player-class">
                  CLASS: FULL-STACK DEVELOPER
                </span>
              </div>
            </div>

            <div className="xp-heading">
              <span>ÁREAS DE ATUAÇÃO</span>
              <strong>
                <span>FULL-STACK</span>
                <span>IA</span>
                <span>PESQUISA</span>
              </strong>
            </div>

            <div className="xp-track">
              <span />
            </div>

            <div className="player-stats">
              <div>
                <span>04</span>
                <small>PROJETOS</small>
              </div>
              <div>
                <span>02</span>
                <small>PESQUISAS</small>
              </div>
              <div>
                <span>∞</span>
                <small>IDEIAS</small>
              </div>
            </div>

            <div className="panel-quote">
              “THINK. CODE. CREATE.” <Sparkles size={14} />
            </div>
          </aside>

          <div
            className="hero-sticker sticker-one"
            style={{
              opacity: 1 - heroScroll * 0.58,
              filter: `blur(${heroScroll * 4}px)`,
            }}
            aria-hidden="true"
          >
            &lt;/&gt;
            <small>
              CODE
              <br />
              WITH PURPOSE
            </small>
          </div>

          <div
            className="hero-sticker sticker-two"
            style={{
              opacity: 1 - heroScroll * 0.58,
              filter: `blur(${heroScroll * 4}px)`,
            }}
          >
            <Zap size={24} />
          </div>

          <button
            className="scroll-cue"
            type="button"
            onClick={() =>
              document
                .getElementById("sobre")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Rolar para a próxima seção"
          >
            <span>EXPLORE</span>
            <ChevronDown size={21} />
          </button>
        </div>
      </section>

      <section id="sobre" className="section-wrap profile-section">
        <div className="section-heading profile-section-heading">
          <SectionTag>01 / SOBRE MIM</SectionTag>
          <span className="heading-aside">
            POR TRÁS DO CÓDIGO <span>↘</span>
          </span>
        </div>

        <div className="profile-layout">
          <div className="profile-intro">
            <div className="profile-copy">
              <p className="profile-lead">
                Sou estudante de{" "}
                <strong>
                  Engenharia de Software no IFPE — Campus Belo Jardim
                </strong>{" "}
                e bolsista PIBIC-AF. Gosto de transformar perguntas em projetos
                e tecnologia em experiências que fazem sentido para as pessoas.
              </p>

              <p>
                Transito entre{" "}
                <strong>
                  desenvolvimento full-stack, inteligência artificial e visão
                  computacional
                </strong>
                . Meu processo começa entendendo o problema, passa pela
                experimentação e ganha forma em soluções úteis, acessíveis e bem
                construídas.
              </p>
            </div>

            <div className="profile-principle">
              <span>✳</span> CURIOSIDADE <i /> CONSTRUÇÃO <i /> IMPACTO
            </div>
          </div>

          <div
            className="profile-explorer"
            aria-label="Explorador visual interativo sobre minha trajetória"
          >
            <div className="dossier-top">
              <span>
                <i className="dossier-live-dot" /> UM POUCO SOBRE MEU UNIVERSO
              </span>
              <span>01 — 03</span>
            </div>

            <div className="dossier-art">
              <div className="dossier-grid-glow" />
              <div className="dossier-ring ring-a" />
              <div className="dossier-ring ring-b" />
              <div className="dossier-orbit orbit-c" />
              <div className="dossier-code-mark">
                <Code2 size={52} strokeWidth={1.25} />
                <span>IDEAS → BUILD</span>
              </div>
              <span className="dossier-side-note">SOFTWARE / AI / DESIGN</span>
              <span className="dossier-sticker">✦</span>
              <span className="dossier-coordinate">−07.18 / −35.09</span>
            </div>

            <div
              className="dossier-tabs"
              role="tablist"
              aria-label="Detalhes do perfil"
            >
              <button
                type="button"
                role="tab"
                aria-selected={profileTab === "trajetoria"}
                className={profileTab === "trajetoria" ? "active" : ""}
                onClick={() => setProfileTab("trajetoria")}
              >
                TRAJETÓRIA <span>01</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={profileTab === "foco"}
                className={profileTab === "foco" ? "active" : ""}
                onClick={() => setProfileTab("foco")}
              >
                FOCO <span>02</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={profileTab === "metodo"}
                className={profileTab === "metodo" ? "active" : ""}
                onClick={() => setProfileTab("metodo")}
              >
                MÉTODO <span>03</span>
              </button>
            </div>

            <div
              className="dossier-tab-content"
              role="tabpanel"
              key={profileTab}
            >
              {profileTab === "trajetoria" && (
                <>
                  <small>01 / ONDE TUDO ACONTECE</small>
                  <h3>Aprender, pesquisar e construir.</h3>
                  <p>
                    Engenharia de Software no IFPE — Campus Belo Jardim ·
                    Bolsista PIBIC-AF.
                  </p>
                </>
              )}
              {profileTab === "foco" && (
                <>
                  <small>02 / CAMPOS DE EXPLORAÇÃO</small>
                  <h3>Do produto à inteligência.</h3>
                  <p>
                    Desenvolvimento full-stack, inteligência artificial e visão
                    computacional.
                  </p>
                </>
              )}
              {profileTab === "metodo" && (
                <>
                  <small>03 / COMO EU PENSO</small>
                  <h3>Entender antes de implementar.</h3>
                  <p>
                    Investigar o problema, testar caminhos e transformar ideias
                    em soluções úteis.
                  </p>
                </>
              )}
            </div>

            <div className="dossier-bottom">
              <span>
                <i className="online-dot" /> SEMPRE APRENDENDO, SEMPRE
                CONSTRUINDO
              </span>
              <span>EXPLORE ↗</span>
            </div>
          </div>
        </div>

        <div className="trait-strip">
          <span>✳ PROBLEM SOLVING</span>
          <span>✳ CREATIVE THINKING</span>
          <span>✳ ACCESSIBILITY</span>
          <span>✳ CONTINUOUS LEARNING</span>
        </div>
      </section>

      <section id="projetos" className="section-wrap missions-section">
        <div className="section-heading">
          <SectionTag>02 / PROJETOS</SectionTag>
          <span className="heading-aside">
            O QUE ESTOU CONSTRUINDO <span>↘</span>
          </span>
        </div>

        <div className="missions-title-row">
          <div>
            <p>
              Projetos reais, desafios técnicos e soluções construídas com
              código.
            </p>
          </div>
        </div>

        <div className="project-explorer">
          <span className="explorer-pulse" />
          <span>EXPLORAR PROJETOS</span>
          <span className="explorer-hint">
            SELECIONE UMA MISSÃO PARA DESCOBRIR
          </span>
        </div>

        <div className="quest-interface">
          <div className="quest-list">
            <div className="quest-list-head">
              <span>
                <Target size={15} /> PROJETOS
              </span>
              <span>{projectsData.length.toString().padStart(2, "0")}</span>
            </div>

            {projectsData.map((project) => {
              const index =
                projectsData.findIndex((p) => p.id === project.id) + 1;

              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`quest-item ${selectedProject.id === project.id ? "quest-selected" : ""}`}
                >
                  <span className={`quest-index quest-index-${project.id}`}>
                    0{index}
                  </span>
                  <span className="quest-item-copy">
                    <strong>{project.title.replace(/^[^ ]+ /, "")}</strong>
                    <small>{project.subtitle}</small>
                  </span>
                  <ArrowUpRight size={17} className="quest-arrow" />
                </button>
              );
            })}

            <div className="quest-list-foot">
              <span>SELECIONE UM PROJETO PARA VER DETALHES</span>
              <span>✦</span>
            </div>
          </div>

          <article className="quest-detail" key={selectedProject.id}>
            <div className="detail-topline">
              <span>
                MISSION 0{projectIndex} /{" "}
                {selectedProject.category.toUpperCase()}
              </span>
              <span className="mission-status">
                <i /> COMPLETED / IN PROGRESS
              </span>
            </div>

            <div
              className={`detail-visual detail-visual-${selectedProject.id}`}
            >
              <div className="visual-grid" />
              <span className="visual-index">0{projectIndex}</span>
              <ProjectIllustration projectId={selectedProject.id} />
              <span className="visual-caption">
                SELECTED PROJECT / VITÓRIA MELO
              </span>
            </div>

            <div className="detail-content">
              <div className="detail-badge">{selectedProject.badge}</div>

              <h3>{selectedProject.title.replace(/^[^ ]+ /, "")}</h3>

              <p className="detail-subtitle">{selectedProject.subtitle}</p>

              <p className="detail-description">
                {selectedProject.description}
              </p>

              <div className="detail-highlights">
                <span className="micro-label">DESTAQUES TÉCNICOS</span>
                {selectedProject.highlights.map((point, i) => (
                  <div key={point}>
                    <span>✦</span>
                    {point}
                  </div>
                ))}
              </div>

              <div className="tech-tags">
                {selectedProject.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="detail-actions">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> SOURCE CODE <ArrowUpRight size={15} />
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="live-project"
                  >
                    <ExternalLink size={17} /> LIVE DEMO{" "}
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>

        <div className="mission-footer">
          <span>SEMPRE EXISTE ALGO NOVO PARA CONSTRUIR.</span>
          <span>
            SEMPRE CONSTRUINDO <span className="neon-punctuation">✳</span>
          </span>
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="section-wrap missions-section">
          <div className="section-heading">
            <SectionTag>03 / TECNOLOGIAS</SectionTag>
            <span className="heading-aside">
              MY TOOLKIT <span>↘</span>
            </span>
          </div>

          <div className="missions-title-row">
            <div>
              <p>Tecnologias que uso para transformar ideias em soluções.</p>
            </div>
            <span className="inventory-count">23+ / ITEMS</span>
          </div>
        </div>

        <div className="stack-frame">
          <div className="stack-frame-label">
            <span>
              <Gamepad2 size={15} /> STACK DE TECNOLOGIAS
            </span>
            <span>HOVER TO PAUSE</span>
          </div>

          <Marquee items={stackRowOne} duration={82} />

          <Marquee items={stackRowTwo} reverse duration={88} />

          <div className="stack-frame-bottom">
            <span>FRONT-END / BACK-END / DATABASES</span>
            <span>AI / DATA / DEVOPS</span>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="section-wrap missions-section">
        <div className="section-heading">
          <SectionTag>04 / TRAJETÓRIA</SectionTag>
          <span className="heading-aside">
            FORMAÇÃO & EXPERIÊNCIA <span>↘</span>
          </span>
        </div>

        <div className="missions-title-row">
          <div>
            <p>Minha jornada de aprendizado, pesquisa e desenvolvimento.</p>
          </div>
          <div className="trophy-mark">
            <Trophy size={36} />
            <span>
              CONQUISTAS
              <br />
              ACADÊMICAS
            </span>
          </div>
        </div>

        <div className="achievement-grid">
          <div className="education-timeline">
            <div className="timeline-title">
              <BookOpen size={18} /> FORMAÇÃO ACADÊMICA / TRAJETÓRIA
            </div>

            <div className="timeline-entry">
              <span className="timeline-dot" />{" "}
              <div>
                <small>2023 — 2027 / PREVISÃO</small>
                <h3>Engenharia de Software</h3>
                <p>IFPE — Campus Belo Jardim</p>
                <span className="timeline-note">Graduação em andamento</span>
              </div>
            </div>

            <div className="timeline-entry">
              <span className="timeline-dot" />{" "}
              <div>
                <small>ATIVIDADE DE PESQUISA</small>
                <h3>Iniciação científica — PIBIC-AF</h3>
                <p>
                  Pesquisa em tecnologia assistiva e reconhecimento de Libras.
                </p>
                <span className="timeline-note">
                  Pesquisa e desenvolvimento
                </span>
              </div>
            </div>

            <div className="timeline-entry">
              <span className="timeline-dot" />{" "}
              <div>
                <small>PROJETOS DE EXTENSÃO</small>
                <h3>Iniciação à Programação com Python</h3>
                <p>
                  Atuação na condução de aulas e atividades práticas de lógica
                  de programação.
                </p>
                <span className="timeline-note">Extensão e Impacto Social</span>
                <h3>
                  GirliES: Introdução à Engenharia de Software para Meninas
                </h3>
                <p>
                  Iniciativa voltada a incentivar a representatividade feminina
                  e introduzir conceitos de tecnologia e engenharia de software
                  para garotas.
                </p>
                <span className="timeline-note">
                  Extensão e Inclusão Tecnológica
                </span>
              </div>
            </div>

            <div className="timeline-entry">
              <span className="timeline-dot" />{" "}
              <div>
                <small>PARTICIPAÇÃO EM EVENTOS E CONGRESSOS</small>
                <h3>
                  XXI Congresso de Iniciação Científica e Tecnológica (XXI
                  CONIC)
                </h3>
                <p>
                  Apresentação do relatório final e pôster científico intitulado
                  "Treinar Redes Neurais para Reconhecimento de Padrões da
                  Libras", na sessão temática Computação 1.
                </p>
                <span className="timeline-note">Divulgação Científica</span>
                <h3>Semana Nacional de Ciência e Tecnologia (SNCT 2026)</h3>
                <p>
                  Condução da oficina prático-profissional "Minha Marca na Tech:
                  Criando Meu Primeiro Portfólio".
                </p>
                <span className="timeline-note">
                  Comunidade e Compartilhamento de Conhecimento
                </span>
              </div>
            </div>
          </div>

          <div className="achievement-list">
            <div className="timeline-title">
              <Trophy size={18} /> UNLOCKED BADGES
            </div>

            <div className="badge-row">
              <span className="badge-icon">
                <Star size={18} />
              </span>
              <div>
                <strong>Curiosity seeker</strong>
                <small>Aprendizado contínuo em novas tecnologias</small>
              </div>
              <span className="badge-check">✓</span>
            </div>

            <div className="badge-row">
              <span className="badge-icon purple">
                <Heart size={18} />
              </span>
              <div>
                <strong>Tech for good</strong>
                <small>Projetos com foco em inclusão e impacto social</small>
              </div>
              <span className="badge-check">✓</span>
            </div>

            <div className="badge-row">
              <span className="badge-icon">
                <Rocket size={18} />
              </span>
              <div>
                <strong>Builder mode</strong>
                <small>Da ideia à implementação de soluções</small>
              </div>
              <span className="badge-check">✓</span>
            </div>

            <div className="badge-row">
              <span className="badge-icon purple">
                <Zap size={18} />
              </span>
              <div>
                <strong>Never stop leveling</strong>
                <small>Explorando full-stack, IA e visão computacional</small>
              </div>
              <span className="badge-check">✓</span>
            </div>
          </div>
        </div>

        <div className="final-boss">
          <span className="boss-icon">☠</span>
          <div>
            <small>DESAFIO ATUAL</small>
            <h3>Transformar conhecimento em impacto.</h3>
            <p>O próximo nível começa quando a gente decide construir.</p>
          </div>
          <span className="boss-level">EM EVOLUÇÃO</span>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="section-wrap">
          <div className="section-wrap missions-section">
            <div className="section-heading">
              <SectionTag>05 / CONTATO</SectionTag>
              <span className="heading-aside">
                LET'S CONNECT <span>↘</span>
              </span>
            </div>

            <div className="contact-content">
              <div>
                <h2>
                  Vamos criar algo
                  <br />
                  <em>incrível juntos.</em>
                </h2>
                <p>
                  Tem uma ideia, oportunidade ou projeto interessante? Meu
                  próximo projeto pode começar com uma boa conversa.
                </p>
              </div>
              <div className="contact-actions">
                <a href={`mailto:${emailAddress}`} className="contact-mail">
                  <Mail size={19} /> {emailAddress} <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://github.com/Vih007"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} /> GITHUB <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vitória-melo-7babb5214"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LINKEDIN <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <footer className="site-footer">
            <span>© 2026 VITÓRIA MELO / DESENVOLVIDO COM CURIOSIDADE</span>
            <a href="#inicio">BACK TO TOP ↑</a>
            <span>
              MADE WITH <span className="neon-punctuation">♥</span> & LOTS OF
              COFFEE
            </span>
          </footer>
        </div>
      </section>

      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
        >
          <ArrowUp />
        </button>
      )}
    </main>
  );
}
