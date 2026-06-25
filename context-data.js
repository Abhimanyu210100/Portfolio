// Context Data for Abhimanyu's AI Assistant
// Update this file with your personal information

const ABHIMANYU_CONTEXT = {
    // Basic Information
    personal: {
        name: "Abhimanyu Swaroop",
        title: "Senior Data Scientist & AI Engineer",
        email: "abhiswaroop210100@gmail.com",
        linkedin: "https://www.linkedin.com/in/abhimanyuswaroop",
        location: "United States"
    },

    // Current Role
    currentRole: {
        position: "Senior Data Scientist",
        company: "CVS Health",
        duration: "2026 - Present",
        department: "Healthcare Analytics",
        focus: "Production multi-agent LLM systems, RAG, healthcare analytics, and large language models"
    },

    // Education
    education: [
        {
            degree: "Master's in Data Science",
            institution: "Columbia University",
            year: "2022",
            focus: "Machine Learning and Data Science"
        },
        {
            degree: "Bachelor's in Materials Engineering",
            institution: "IIT Madras",
            year: "2021",
            focus: "Metallurgical and Materials Engineering"
        }
    ],

    // Work Experience
    experience: [
        {
            role: "Senior Data Scientist",
            company: "CVS Health",
            duration: "2026 - Present",
            achievements: [
                "Architected and deployed a production multi-agent LLM system for medical policy retrieval, using an intent-classification agent (new vs. follow-up) and dynamic keyword generation to improve retrieval across two data sources",
                "Built a BM25-based reranking and summarization pipeline with document-diversity constraints, enabling more relevant responses in a system actively used by internal teams",
                "Scoped problem framing and defined methodology for an overpayment detection algorithm, driving $1.7M in incremental medical cost savings"
            ]
        },
        {
            role: "Data Scientist",
            company: "CVS Health",
            duration: "2023 - 2026",
            achievements: [
                "Developed and maintained overpayment detection algorithms end-to-end, partnering with business stakeholders to translate domain knowledge into models; cumulative impact of $25M+ over 2.5 years",
                "Reverse-engineered a competitor's claim processing logic using Decision Trees, Explainable Boosting Models, and XGBoost, producing an interpretable model that exposed the underlying decision rules",
                "Led an 8-month cross-functional discovery across 100+ overpayment reason codes; built the detection algorithm from scratch and displaced the existing methodology, generating $3M+ in year one and earning the Excellence Award"
            ]
        },
        {
            role: "Analyst",
            company: "DIA Ventures",
            duration: "2023",
            achievements: [
                "Built a two-stage model combining classification and regression to estimate expected credit recovery amounts",
                "Analyzed airline spend distribution and outlier trends for American Express business card holders to identify targets for marketing outreach and partnership opportunities"
            ]
        },
        {
            role: "Data Scientist (Capstone)",
            company: "Ralph Lauren",
            duration: "2022",
            achievements: [
                "Led data ingestion of 4M+ rows across 3 distributed sources (clickstream, product inventory, metadata) using Dataiku; engineered a session-level aggregation pipeline to extract search-to-purchase conversion signals",
                "Designed and compared two product recommendation frameworks (embedding similarity and binary classification), achieving over 2x improvement in top-3 precision and recall on Ralph Lauren's e-commerce search",
                "Proposed a towering architecture combining both methods, with fine-tuned BERT embeddings showing further uplift on the validation set"
            ]
        },
        {
            role: "Data Science Intern",
            company: "Novelis Inc.",
            duration: "2022",
            achievements: [
                "Deployed computer vision pipelines to track and measure product dimensions in real-time using live plant video streams",
                "Automated CI/CD on Databricks using GitHub Actions; saved 12–16 hours/week",
                "Cut Spark query runtimes by 84% through optimization and profiling"
            ]
        },
        {
            role: "Teaching Assistant",
            company: "Columbia University",
            duration: "2022",
            achievements: [
                "Led recitations and office hours for 120+ graduate students in Data Visualization",
                "Collaborated with faculty to refine curriculum for analytical communication and social science data interpretation"
            ]
        },
        {
            role: "Undergraduate Researcher",
            company: "IIT Madras",
            duration: "2020 - 2021",
            achievements: [
                "Simulated optical properties of nanoparticles using novel approximation algorithm; RMSE ranged from 0.01–0.06",
                "Published research in Materialia exploring plasmonic nanoparticle behavior in solar energy devices",
                "Mentored a six-member team on modeling techniques and scientific publishing"
            ]
        },
        {
            role: "Machine Learning Intern",
            company: "University of Michigan",
            duration: "2020",
            achievements: [
                "Achieved R² = 0.96 using convolutional neural networks (CNNs) for material property prediction from atomic structure features",
                "Executed 1800+ ab initio energy simulations across 10 alloy families to curate a robust training dataset"
            ]
        },
        {
            role: "Undergraduate Researcher",
            company: "IIT Madras",
            duration: "2019 - 2020",
            achievements: [
                "Trained a Random Forest Classifier with tuned hyperparameters to reach 86% accuracy on microscopy image-based predictions",
                "First-authored a peer-reviewed paper in Computational Materials Science on data-driven sintering behavior prediction"
            ]
        }
    ],

    // Technical Skills
    skills: {
        programming: ["Python", "SQL", "PySpark", "R", "C", "MATLAB"],
        machineLearning: ["Large Language Models", "Generative AI", "Multi-Agent Systems", "RAG", "LangChain", "Pydantic", "Scikit-learn", "XGBoost", "CatBoost", "TensorFlow", "NLTK", "NLP"],
        bigData: ["GCP", "Azure Databricks", "BigQuery", "Hive", "SparkSQL"],
        analytics: ["Dash", "D3", "Matplotlib", "Seaborn", "Plotly", "Numpy", "Pandas"],
        // healthcare: ["Claims Analysis", "Predictive Analytics"],
        tools: ["Git", "GitHub Actions (CI/CD)", "Jupyter", "Databricks", "Dataiku"]
    },

    // Key Projects
    projects: [
        {
            name: "Production Multi-Agent LLM System for Medical Policy Retrieval",
            description: "Architected and deployed a production multi-agent LLM system using an intent-classification agent (new vs. follow-up) and dynamic keyword generation, plus a BM25-based reranking and summarization pipeline with document-diversity constraints",
            impact: "Improved retrieval across two data sources; actively used by internal teams at CVS Health",
            technologies: ["Large Language Models", "Multi-Agent Systems", "RAG", "LangChain", "BM25", "GenAI", "NLP"]
        },
        {
            name: "Healthcare Overpayment Detection Algorithms",
            description: "Developed and maintained overpayment detection algorithms end-to-end, partnering with business stakeholders to translate domain knowledge into models",
            impact: "Cumulative impact of $25M+ over 2.5 years in medical cost savings",
            technologies: ["Python", "Machine Learning", "XGBoost", "Healthcare Analytics"]
        },
        {
            name: "Overpayment Detection Algorithm (0-1 Discovery)",
            description: "Led an 8-month cross-functional discovery across 100+ overpayment reason codes; built a detection algorithm from scratch that displaced the existing methodology",
            impact: "Generated $3M+ in year one and earned the CVS Health Excellence Award",
            technologies: ["Machine Learning", "Data Engineering", "Stakeholder Discovery", "Collaboration", "Consulting"]
        },
        {
            name: "Competitor Claim Processing Reverse-Engineering",
            description: "Reverse-engineered a competitor's claim processing logic using Decision Trees, Explainable Boosting Models, and XGBoost to produce an interpretable model exposing the underlying decision rules",
            impact: "Informed CVS's own claim processing strategy",
            technologies: ["Decision Trees", "Explainable Boosting Models", "XGBoost", "Interpretable ML"]
        },
        {
            name: "Ralph Lauren E-commerce Recommendation System (Capstone)",
            description: "Designed and compared two product recommendation frameworks (embedding similarity and binary classification) over 4M+ rows ingested via Dataiku, plus a towering architecture validated with fine-tuned BERT embeddings",
            impact: "Achieved over 2x improvement in top-3 precision and recall on Ralph Lauren's e-commerce search",
            technologies: ["Machine Learning", "Recommendation Systems", "BERT", "Embeddings", "Dataiku", "Content-Based Filtering"]
        },
        {
            name: "Credit Recovery ML Framework",
            description: "Engineered hybrid ML framework combining regression and classification",
            impact: "Improved credit recovery estimation",
            technologies: ["Machine Learning", "Regression", "Classification"]
        },
        {
            name: "Computer Vision Pipeline",
            description: "Deployed real-time computer vision for product dimension tracking in alumnium factory cameras",
            impact: "Automated quality control processes and reduced manual inspection time",
            technologies: ["Computer Vision", "Real-time Processing", "Python", "IoT", "Image", "Video Processing"]
        },
        {
            name: "Machine Learning Based Sintering Behavior Prediction",
            description: "Developed a novel method to apply machine learning to predict sintering behavior of powder samples",
            impact: "Published a research paper in the peer-reviewed journal - Computational Materials Science",
            technologies: ["Machine Learning", "Classification", "Python", "MATLAB"]
        },
        {
            name: "Intuit AI/ML Hackathon (NY Tech Week): Small Business Loan Portfolio Optimization",
            description: "Built a calibrated ML pipeline with survival modeling and recovery regression to predict default recovery, timing, and recovery amount per applicant, replacing a fixed approval threshold with a dynamic per-applicant funding decision framework",
            impact: "Placed 2nd in the competition",
            technologies: ["Machine Learning", "Survival Modeling", "Regression", "Risk Modeling", "Calibration", "Hackathon"]
        },
        {
            name: "Harvard Datathon @ LISH: Predicting Operational Status in Tanzania",
            description: "Built an ensemble of 10 independently tuned CatBoost classifiers with averaged probability outputs to predict the operational status of waterpoints in Tanzania; achieved a log loss of 0.364",
            impact: "Ranked 1st among all teams at the Harvard LISH Datathon",
            technologies: ["Ensemble Modeling", "CatBoost", "Machine Learning", "Boosting Algorithms", "Geospatial Data", "Classification", "Public Health", "Competition Winner", "Hackathon"]
        },
        {
            name: "IIT Madras: Biker Recommendation Hackathon 2020",
            description: "Create a machine learning based recommendation system to recommend bikers to races",
            impact: "Placed in the top 15% of the competition",
            technologies: ["CATBoost", "Machine Learning", "Boosting Algorithms", "Social Network Data", "Classification", "Hackathon"]
        }
    ],

    // Awards & Recognition
    awards: [
        {
            name: "Excellence Award",
            organization: "CVS Health",
            year: "2024",
            description: "Recognized for building an overpayment detection algorithm from scratch that displaced the existing methodology and drove $3M+ in first-year medical cost savings"
        },
        {
            name: "B.Krishnamurthy Award",
            organization: "IIT Madras",
            year: "2021",
            description: "Best Bachelors Thesis in Metallurgical and Materials Engineering"
        },
        {
            name: "Vijay Jagannathan Award",
            organization: "IIT Madras",
            year: "2021",
            description: "Award for the best academic performance in graduating batch for Metallurgical and Materials Engineering curriculum"
        }
    ],

    // Research Publications
    publications: [
        {
            title: "Machine learning based a priori prediction on powder samples of sintering-driven abnormal grain growth",
            journal: "Computational Materials Science",
            year: "2021",
            type: "First-authored Research Publication in peer-reviewed journal"
        },
        {
            title: "Modelling core-shell plasmonic nanoparticles as homogenous systems: An effective refractive index approach",
            journal: "Materialia",
            year: "2021",
            type: "First-authored Research Publication in peer-reviewed journal"
        }
    ],

    // Areas of Expertise
    expertise: [
        "Generative AI",
        "Large Language Models",
        "Multi-Agent Systems",
        "Retrieval-Augmented Generation (RAG)",
        "Machine Learning",
        "Healthcare Analytics",
        "Big Data Systems",
        "Predictive Analytics",
        "Risk Modeling",
        "Data Engineering",
        "Data Science",
        "Leadership"
    ],

    // Contact Preferences
    contact: {
        preferredMethod: "LinkedIn or email",
        availability: "Open to discussing data science, and AI opportunities across industries",
        interests: "Data science, AI, Machine Learning, GenAI, Consulting, Leadership, Finance, Hedge Funds, Quantitative Finance, new opportunities"
    }
};

// Export for use in other files
window.ABHIMANYU_CONTEXT = ABHIMANYU_CONTEXT; 