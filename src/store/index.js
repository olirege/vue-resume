import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      viewContent: null,
      isTransitioning: false,
      currentLANG: null,
      text: null,
      FR: {
        about: {
          t: "À propos",
          p: [
            "Je suis un technologue passionné par la création de machines fonctionnelles.",
            "Je suis un joueur d'équipe et je suis toujours prêt à aider mes collègues.",
            "Je suis un travailleur acharné et toujours prêt à apprendre de nouvelles choses.",
            "Je suis un penseur créatif et déterminer à résoudre les problèmes.",
            "J'apprends vite et je suis toujours prêt à apprendre de nouvelles choses.",
          ],
        },
        homeTitle: "Techonologue en Génie Industriel",
        workTitle: "Experience Récente",
        work: {
          first: {
            title: {
              t: "Les Fermes Lufa",
              d: "2020 - Aujourd'hui",
            },
            paragraph: [
              {
                t: "Rechercher et proposer des solutions pour mettre en place un processus de détection et de reconnaissance des produits en caisses entrant dans l'entrepôt sur un tapis roulant. J'ai conçu le système et programmé le back-end en python et Ladder Logic.",
                c: null,
              },
              {
                t: "Offert une solution alternative pour identifier les pucerons sur les laitues en utilisant une caméra et un réseau de neurones. Ensuite, une carte thermique est générée pour identifier l'emplacement des pucerons.",
                c: "aphids_1.jpg",
              },
            ],
          },
        },
        projectTitle: "Projets",
        projects: {
          first: {
            title: {
              t: "Plateforme d'annotation",
              d: "Fev 2022 - Aujourd'hui",
            },
            paragraph: [
              {
                t: "Conception de l'architecture logicielle d'une plate-forme qui sera utilisée pour annoter des images pour un processus de vision par ordinateur. J'ai utilisé Vue.js, Pixi.js, Django, Postgresl, Yolov5 et Docker.",
                c: "annotater.mp4",
              },
            ],
          },
          second: {
            title: {
              t: "Systeme Progiciel de gestion intégré(ERP)",
              d: "Juillet 2021 - Sept 2021",
            },
            paragraph: [
              {
                t: "Conception de l'architecture logicielle d'un système ERP. J'ai utilisé principalement PYQT5, Postgresl et Docker. J'ai recherché et implémenté un moyen de générer des rapports en utilisant les données de la base de données.",
                c: null,
              },
            ],
          },
        },
        educationTitle: "Éducation",
        education: {
          first: {
            title: {
              t: "Collège Ahuntsic, Montréal",
              d: "2019 - 2022",
            },
            paragraph: [
              {
                t: "Technique de génie industriel",
                r: "https://docs.google.com/document/d/1hgL2fEgec8U02FBgWpMVoTZw_bIjlmMatgZ4EU5FMrE/edit?usp=sharing",
              },
            ],
          },
          second: {
            title: {
              t: "SSGI Six Sigma Global Institue, Boston",
              d: "2021",
            },
            paragraph: [
              {
                t: "Spécialiste certifié en amélioration des processus",
                r: "https://images.credential.net/embed/19lhjt5s.png",
              },
              {
                t: "Certification en analyse de données",
                r: "https://images.credential.net/embed/p1ort8yv.png",
              },
              {
                t: "Certificat de gestion de projet",
                r: "https://images.credential.net/embed/ixj2589z.png",
              },
              {
                t: "Certification de leadership SSGI",
                r: "https://images.credential.net/embed/2ihfqutw.png",
              },
              {
                t: "Certification Scrum Master",
                r: "https://images.credential.net/embed/z85dr57r.png",
              },
              {
                t: "Certification ceinture noire Lean Six Sigma",
                r: "https://images.credential.net/embed/bi8rfyri.png",
              },
            ],
          },
          third: {
            title: {
              t: "Udemy",
              d: "2022 - Aujourd'hui",
            },
            paragraph: [
              {
                t: "Architecture logicielle et technologie des systèmes à grande échelle",
                r: "https://www.udemy.com/certificate/UC-bc2ae181-ce2f-4eb8-a93b-6800a69440d4/",
              },
              {
                t: "Programmation C++ ",
                r: "https://www.udemy.com/certificate/UC-6f6ecfcf-9e14-47a0-ae32-19c62aff8056/",
              },
              {
                t: "Programmation C ",
                r: "https://www.udemy.com/certificate/UC-7787d1f9-6e88-4dea-8139-b531a7c8dcfa/",
              },
              {
                t: "Programmation JavaScript",
                r: "https://www.udemy.com/certificate/UC-b991b1a3-716c-45be-9079-bf0d6fee11ca/",
              },
              {
                t: "Vue.js avec Router & Vuex",
                r: "https://www.udemy.com/certificate/UC-879d74a8-9f00-445a-ab81-dc040305a4d4/",
              },
              {
                t: "Mathematique pour Machine Learning",
                r: "https://www.udemy.com/certificate/UC-ba21534d-2cc1-4938-9feb-048d76862ab6/",
              },
              {
                t: "CSS(Flexbox, Grid,Sass)",
                r: "https://www.udemy.com/certificate/UC-e030321e-b5b2-48b2-a4c2-da86d3027a88/",
              },
              {
                t: "Python, Django et API Rest ",
                r: "https://www.udemy.com/certificate/UC-b0df8b74-583b-440f-afcf-7fd574911d57/",
              },
              {
                t: "Docker & Kubernetes + Swarm",
                r: "https://www.udemy.com/certificate/UC-a4a521b1-534a-45be-978f-438383ad0631/",
              },
              {
                t: "Sites Web réactifs avec HTML5",
                r: "https://www.udemy.com/certificate/UC-d37bb23a-c45f-4689-b624-ed04441967df/",
              },
              {
                t: "Animations Javascript avec GSAP",
                r: "https://www.udemy.com/certificate/UC-2dfa6c76-d4cf-4d0f-bcec-b187b92b0609/",
              },
            ],
          },
        },
      },
      ENG: {
        about: { t: "About", p: [
        "I am a technologist with a passion for creating beautiful and functional machines.",
        "I am a fast learner and I am always looking for new challenges.",
        "I am a team player and I am always ready to help my colleagues.",
        "I am a hard worker and I am always ready to learn new things.",
        "I am a problem solver and I am always ready to find solutions.",
        "I am a creative thinker and I am always ready to find new ways to solve problems.",
        ] },
        homeTitle: "Industrial Engineering Technologist",
        workTitle: " Recent Experience",
        work: {
          first: {
            title: {
              t: "Lufa Farms",
              d: "2020 - Present",
            },
            paragraph: [
              {
                t: "Research and purpose solutions to implement a process to detect and recognize products in crates coming into the warehouse on a conveyor belt. I designed the system, and programmed the back-end in python and Ladder Logic.",
                c: null,
              },
              {
                t: "Offered an alternative solution to identify Aphids on lettuces by using a camera and a neural network.Then, a heat map is generated to identify the location of the aphids.",
                c: "aphids_1.jpg",
              },
            ],
          },
        },
        projectTitle: "Projects",
        projects: {
          first: {
            title: {
              t: "Annotation Platform for Computer Vision Process",
              d: "Feb 2022 - Present",
            },
            paragraph: [
              {
                t: "Designed the software architecture for a platform that will be used to annotate images for a computer vision process. I used Vue.js, Pixi.js, Django, Postgresl, Yolov5 and Docker.",
                c: "annotater.mp4",
              },
            ],
          },
          second: {
            title: {
              t: "Enterprise Resource planning(ERP) System",
              d: "July 2021 - Sept 2021",
            },
            paragraph: [
              {
                t: "Designed the software architecture for an ERP system. I used mainly PYQT5, Postgresl and Docker. I researched and implemented a way to generate reports using the data from the database.",
                c: null,
              },
            ],
          },
        },
        educationTitle: "Education",
        education: {
          first: {
            title: {
              t: "Ahuntsic College, Montreal",
              d: "2019 - 2022",
            },
            paragraph: [
              {
                t: "Industrial Engineering Technology",
                r: "https://docs.google.com/document/d/1hgL2fEgec8U02FBgWpMVoTZw_bIjlmMatgZ4EU5FMrE/edit?usp=sharing",
              },
            ],
          },
          second: {
            title: {
              t: "SSGI Six Sigma Global Institue, Boston",
              d: "2021",
            },
            paragraph: [
              {
                t: "Certified Process Improvement Specialist",
                r: "https://images.credential.net/embed/19lhjt5s.png",
              },
              {
                t: "Data Analytic Certification",
                r: "https://images.credential.net/embed/p1ort8yv.png",
              },
              {
                t: "Project Management Certification",
                r: "https://images.credential.net/embed/ixj2589z.png",
              },
              {
                t: "SSGI Leadership Certification",
                r: "https://images.credential.net/embed/2ihfqutw.png",
              },
              {
                t: "Scrum Master Certification",
                r: "https://images.credential.net/embed/z85dr57r.png",
              },
              {
                t: "Lean Six Sigma Black Belt Certification",
                r: "https://images.credential.net/embed/bi8rfyri.png",
              },
            ],
          },
          third: {
            title: {
              t: "Udemy",
              d: "2022 - Present",
            },
            paragraph: [
              {
                t: "Software Architecture & Technology of Large-Scale Systems",
                r: "https://www.udemy.com/certificate/UC-bc2ae181-ce2f-4eb8-a93b-6800a69440d4/",
              },
              {
                t: "C++ Programming",
                r: "https://www.udemy.com/certificate/UC-6f6ecfcf-9e14-47a0-ae32-19c62aff8056/",
              },
              {
                t: "C Programming",
                r: "https://www.udemy.com/certificate/UC-7787d1f9-6e88-4dea-8139-b531a7c8dcfa/",
              },
              {
                t: "JavaScript Programming",
                r: "https://www.udemy.com/certificate/UC-b991b1a3-716c-45be-9079-bf0d6fee11ca/",
              },
              {
                t: "Vue.js with Router & Vuex",
                r: "https://www.udemy.com/certificate/UC-879d74a8-9f00-445a-ab81-dc040305a4d4/",
              },
              {
                t: "Mathematics for Machine Learning",
                r: "https://www.udemy.com/certificate/UC-ba21534d-2cc1-4938-9feb-048d76862ab6/",
              },
              {
                t: "CSS(Flexbox, Grid,Sass)",
                r: "https://www.udemy.com/certificate/UC-e030321e-b5b2-48b2-a4c2-da86d3027a88/",
              },
              {
                t: "Python with Django and Rest API",
                r: "https://www.udemy.com/certificate/UC-b0df8b74-583b-440f-afcf-7fd574911d57/",
              },
              {
                t: "Docker & Kubernetes + Swarm",
                r: "https://www.udemy.com/certificate/UC-a4a521b1-534a-45be-978f-438383ad0631/",
              },
              {
                t: "Responsive Websites with HTML5",
                r: "https://www.udemy.com/certificate/UC-d37bb23a-c45f-4689-b624-ed04441967df/",
              },
              {
                t: "Javascript Animations with GSAP",
                r: "https://www.udemy.com/certificate/UC-2dfa6c76-d4cf-4d0f-bcec-b187b92b0609/",
              },
            ],
          },
        },
      },
    };
  },
  mutations: {
    setCurrentLANG(state, payload) {
      state.currentLANG = payload;
    },
    setText(state, payload) {
      state.text = payload;
    },
    setIsTransitioning(state, payload) {
      state.isTransitioning = payload;
    },
    setViewContent(state, payload) {
      state.viewContent = payload;
    },
  },
  getters: {
    getIsTransitioning(state) {
      return state.isTransitioning;
    },
    getFRText(state) {
      return state.FR;
    },
    getENGText(state) {
      return state.ENG;
    },
    getText(state) {
      return state.text;
    },
    getCurrentLANG(state) {
      return state.currentLANG;
    },
    getViewContent(state) {
      return state.viewContent;
    },
  },
  actions: {
    setLANG(context, payload) {
      if (payload === "en") {
        context.commit("setCurrentLANG", payload);
        context.commit("setText", context.getters.getENGText);
      } else if (payload === "fr") {
        context.commit("setCurrentLANG", payload);
        context.commit("setText", context.getters.getFRText);
      }
    },
  },
});
export default store;
