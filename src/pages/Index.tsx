import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Download,
  Mail,
  ExternalLink,
  Github,
  Send,
  Briefcase,
  MapPin,
  Calendar,
  MailIcon,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
  portfolioData,
  skills,
  projects,
  workExperience,
} from "@/data/portfolio";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const skillCategories = [
  { title: "Frontend", data: skills.frontend, color: "primary" },
  { title: "Backend", data: skills.backend, color: "secondary" },
  { title: "Database", data: skills.database, color: "accent" },
  { title: "DevOps", data: skills.devops, color: "primary" },
  { title: "Tools", data: skills.tools, color: "secondary" },
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: portfolioData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: portfolioData.social.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: portfolioData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: MailIcon,
      url: portfolioData.social.email,
      label: "Email",
    },
  ];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: portfolioData.location },
    { icon: Mail, label: "Email", value: portfolioData.email },
  ];

  const handleProjectLink = (url: string, type: "live" | "github") => {
    if (!url || url === "#") {
      const isLive = type === "live";

      toast({
        title: isLive ? "Live Demo Unavailable 🚧" : "Repository Private 🔒",
        description: isLive
          ? "This project’s live demo is currently under development or restricted to clients."
          : "The GitHub repository for this project is private or not publicly available.",
        variant: "destructive",
        duration: 5000,
      });

      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        {/* 🏷️ Primary Meta Tags */}
        <title>{`${portfolioData.name} | ${portfolioData.title}`}</title>
        <meta
          name="description"
          content={`${portfolioData.description} Based in ${portfolioData.location}. ${portfolioData.name} is a ${portfolioData.title} specializing in modern full-stack development using React, Node.js, and Spring Boot.`}
        />
        <meta name="author" content={portfolioData.name} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Software Developer, Full Stack Developer, React Developer, Node.js, Spring Boot, Tailwind CSS, MongoDB, Portfolio, JavaScript, TypeScript, Mumbai"
        />

        {/* 🌐 Canonical URL */}
        <link rel="canonical" href="https://yourportfolio.com" />

        {/* 🧠 Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${portfolioData.name} | ${portfolioData.title}`}
        />
        <meta
          property="og:description"
          content={`${portfolioData.description} Based in ${portfolioData.location}.`}
        />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta
          property="og:image"
          content="https://yourportfolio.com/og-image.jpg"
        />
        <meta
          property="og:site_name"
          content={`${portfolioData.name} Portfolio`}
        />

        {/* 📱 Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#0ea5e9" />

        {/* 📦 Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* 🧱 Structured Data (JSON-LD for Google Rich Results) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: portfolioData.name,
            jobTitle: portfolioData.title,
            url: "https://yourportfolio.com",
            description: portfolioData.description,
            image: "https://yourportfolio.com/og-image.jpg",
            sameAs: [
              portfolioData.social.github,
              portfolioData.social.linkedin,
              `mailto:${portfolioData.email}`,
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressCountry: "India",
            },
            worksFor: [
              {
                "@type": "Organization",
                name: "NorthStar Technologies International Ltd.",
                roleName: "Full Stack Developer",
                sameAs: "https://technorthstar.com/",
              },
              {
                "@type": "Organization",
                name: "DevMynt",
                roleName: "Founder & Software Developer",
                url: "https://www.devmynt.in/",
              },
            ],
            memberOf: {
              "@type": "Organization",
              name: "DevMynt",
              url: "https://www.devmynt.in/",
            },
            knowsAbout: [
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Spring Boot",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
            ],
          })}
        </script>
      </Helmet>

      <div className="relative">
        <ParticlesBackground />

        {/* Home Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="container mx-auto px-3 sm:px-4 py-16 sm:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-2">
                  Hello, I am
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight">
                  <span className="gradient-text glow-cyan">
                    {portfolioData.name}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-foreground mb-2">
                  {portfolioData.title}
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-primary glow-cyan">
                  {portfolioData.role}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
              >
                {portfolioData.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow w-full sm:w-auto sm:min-w-[180px]"
                >
                  <a
                    href={portfolioData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                  >
                    <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:animate-bounce" />
                    Resume
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto sm:min-w-[180px]"
                >
                  <a href="#contact" aria-label="Contact Me">
                    <Mail className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:animate-bounce" />
                    Hire Me
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-12 sm:mt-20 flex justify-center gap-3 sm:gap-8 flex-wrap px-2"
              >
                {["React", "Node.js", "MongoDB", "Spring Boot"].map(
                  (tech, i) => (
                    <motion.div
                      key={tech}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="glass-card px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>

        {/* About Section */}
        <section id="about" className="relative min-h-screen py-12 sm:py-24">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <header className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text glow-purple">About Me</span>
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Get to know me better
                </p>
              </header>

              <article className="glass-card p-4 sm:p-8 md:p-12 mb-8 sm:mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 gradient-text">
                    {portfolioData.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    {portfolioData.description}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With expertise in both MERN stack and Spring Boot, I bring a
                    versatile approach to full-stack development. My journey in
                    software development has been driven by a passion for
                    building solutions that make a real impact.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I thrive in collaborative environments and am constantly
                    learning new technologies to stay at the forefront of web
                    development. Whether it's crafting intuitive user interfaces
                    or architecting robust backend systems, I'm committed to
                    delivering excellence in every project.
                  </p>
                </motion.div>
              </article>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="glass-card p-6 text-center group hover:border-primary/50 transition-all"
                  >
                    <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon
                        className="w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      {item.label}
                    </h4>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative min-h-screen py-12 sm:py-24">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <header className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text glow-purple">My Skills</span>
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Technologies I work with
                </p>
              </header>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                    className="glass-card p-4 sm:p-6 hover:border-primary/50 transition-all group"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                      {category.title}
                    </h3>

                    <div className="space-y-4">
                      {category.data.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                delay:
                                  categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                duration: 1,
                                ease: "easeOut",
                              }}
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                              style={{
                                boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-16 text-center glass-card p-8"
              >
                <p className="text-lg text-muted-foreground">
                  Always learning and exploring new technologies to stay ahead
                  in the ever-evolving world of software development.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative min-h-screen py-12 sm:py-24">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <header className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text glow-cyan">My Projects</span>
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Showcasing my latest work
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="glass-card p-4 sm:p-6 group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 gradient-text">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() =>
                          handleProjectLink(project.liveUrl, "live")
                        }
                        variant="default"
                        size="sm"
                        className="flex-1 group/btn"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                        Live Demo
                      </Button>

                      <Button
                        onClick={() =>
                          handleProjectLink(project.githubUrl, "github")
                        }
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                        GitHub
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="relative min-h-screen py-12 sm:py-24"
        >
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <header className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text glow-magenta">
                    Work Experience
                  </span>
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  My professional journey
                </p>
              </header>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                {workExperience.map((experience, index) => (
                  <motion.article
                    key={experience.company}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="relative mb-12 md:ml-16"
                  >
                    <div className="absolute -left-20 top-6 w-4 h-4 rounded-full bg-primary animate-pulse-glow hidden md:block" />

                    <div className="glass-card p-4 sm:p-8 hover:border-primary/50 transition-all">
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                          <h3 className="text-lg sm:text-2xl font-bold gradient-text">
                            {experience.role}
                          </h3>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            {experience.period}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" aria-hidden="true" />
                            <span className="font-medium">
                              {experience.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3" role="list">
                        {experience.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.2 + i * 0.1 + 0.3,
                              duration: 0.6,
                            }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-center glass-card p-8"
              >
                <p className="text-lg text-muted-foreground">
                  Open to new opportunities and exciting challenges. Let's build
                  something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative min-h-screen py-12 sm:py-24">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <header className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text glow-cyan">Get In Touch</span>
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Let's discuss your next project
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="glass-card p-4 sm:p-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        aria-required="true"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        aria-required="true"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                        aria-required="true"
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group animate-pulse-glow "
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>

                <motion.aside
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="glass-card p-4 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Email
                        </h4>
                        <a
                          href={`mailto:${portfolioData.email}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {portfolioData.email}
                        </a>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Phone
                        </h4>
                        <a
                          href={`tel:${portfolioData.phone}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {portfolioData.phone}
                        </a>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Location
                        </h4>
                        <p className="text-foreground">
                          {portfolioData.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-4 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                      Connect With Me
                    </h3>

                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all group animate-pulse-glow"
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </section>
      </div>
    </>
  );
};

export default Index;
