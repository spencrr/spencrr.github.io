import { Course, CourseSort } from "./types";

const courses: Course[] = [
  {
    title: "Foundation Models and the Future of Machine Learning",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 839",
    subject: "Computer Science",
    number: "839",
    description:
      "Large pretrained machine learning models, also known as foundation models, have taken the world by storm. Models like ChatGPT, Claude, and Stable Diffusion have astonishing abilities to answer questions, speak with users, and generate sophisticated art---all without any additional training. This course covers all aspects of these fascinating models. We will learn how such models are built, including data acquisition, selecting model architectures, and pretraining approaches. Next, a significant focus is how to use and deploy foundation models, including prompting strategies, providing in-context examples, fine-tuning, integrating into existing data science pipelines, and more. We discuss recent advances that improve foundation models, such as large-scale human feedback. Finally, we cover the potential societal impacts of these models. Familiarity with basic machine learning is assumed.",
    relevancy: {
      date: new Date("2023-09"),
      display: "Fall 2023",
    },
  },
  {
    title: "Cloud-Native Database Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 839",
    subject: "Computer Science",
    number: "839",
    description:
      "Modern applications are moving to the cloud for global accessibility, elasticity, high availability, and low cost. Databases are one of the foundational technologies for cloud applications. Compared to traditional on-premises databases, cloud-native databases have unique architectures (e.g., storage-disaggregation), embrace heterogeneous hardware technologies (e.g., GPU, CXL, SmartNIC), and face new application scenarios (e.g., serverless, autoscaling). This seminar course covers recent development in cloud-native databases from both industrial deployment and academic research.",
    relevancy: {
      date: new Date("2023-09"),
      display: "Fall 2023",
    },
  },
  {
    title: "Advanced Database Management Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 764",
    subject: "Computer Science",
    number: "764",
    description:
      "Implementation of database management systems, the impact of new technology on database management systems, back-end database computers, distributed database management systems, concurrency control, and query execution in both distributed and centralized systems, implementation of multiple user views, roll-back and recovery mechanisms, database translation.",
    relevancy: {
      date: new Date("2023-09"),
      display: "Fall 2023",
    },
  },
  {
    title: "Advanced Natural Language Processing",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 769",
    subject: "Computer Science",
    number: "769",
    description:
      "Develop algorithms and mathematical models for natural language processing tasks, including text categorization, information retrieval, speech recognition, machine translation, and information extraction. Focus is on the state-of-the-art computational techniques as they are applied to natural language tasks.",
    relevancy: {
      date: new Date("2023-01"),
      display: "Spring 2023",
    },
  },
  {
    title: "Distributed Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 739",
    subject: "Computer Science",
    number: "739",
    description:
      "Basic concepts; distributed programming; distributed file systems; atomic actions; fault tolerance, transactions, program and data replication, recovery; distributed machine architectures; security and authentication; load balancing and process migration; distributed debugging; distributed performance measurement; distributed simulation techniques; distributed applications; correctness considerations and proof systems.",
    relevancy: {
      date: new Date("2023-01"),
      display: "Spring 2023",
    },
  },
  {
    title: "Learning-Based Image Synthesis and Manipulation",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 839",
    subject: "Computer Science",
    number: "839",
    description:
      "This graduate course introduces students to machine learning based synthesis and manipulation of visual data (images and videos). Both classical (e.g., nearest neighbor, filtering) and modern deep learning based (e.g., ConvNets, GANs, Diffusion Models) algorithms will be presented for image representation, synthesis, and manipulation. It will be a mix of instructor led lectures and student led presentations. Students will learn to implement their own algorithms for image synthesis and manipulation, to understand and analyze state-of-the-art techniques, and to identify interesting open questions and future directions.",
    relevancy: {
      date: new Date("2022-09"),
      display: "Fall 2022",
    },
  },
  {
    title: "Advanced Deep Learning",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 762",
    subject: "Computer Science",
    number: "762",
    description:
      "Explore methods and applications of deep learning. Covers cutting-edge topics, including neural architecture design, robustness and reliability of deep learning, learning with less supervision, lifelong machine learning, deep generative modeling, theoretical understanding of deep learning, and interpretable deep learning.",
    relevancy: {
      date: new Date("2022-09"),
      display: "Fall 2022",
    },
  },
  {
    title: "Big Data Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 744",
    subject: "Computer Science",
    number: "744",
    description:
      "Issues in the design and implementation of big data processing systems, including: an overview of cluster architecture, key design goals (flexibility, performance and fault tolerance), popular execution frameworks, basic abstractions, and applications (e.g., batch analytics, stream processing, graph processing, and machine learning).",
    relevancy: {
      date: new Date("2022-09"),
      display: "Fall 2022",
    },
  },
  {
    title: "Machine Learning",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 760",
    subject: "Computer Science",
    number: "760",
    description:
      "Computational approaches to learning: including inductive inference, explanation-based learning, analogical learning, connectionism, and formal models. What it means to learn. Algorithms for learning. Comparison and evaluation of learning algorithms. Cognitive modeling and relevant psychological results.",
    relevancy: {
      date: new Date("2022-01"),
      display: "Spring 2022",
    },
  },
  {
    title: "Database Management Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 564",
    subject: "Computer Science",
    number: "564",
    description:
      "What a database management system is; different data models currently used to structure the logical view of the database: relational, hierarchical, and network. Hands-on experience with relational and network-based database systems. Implementation techniques for database systems. File organization, query processing, concurrency control, rollback and recovery, integrity and consistency, and view implementation.",
    relevancy: {
      date: new Date("2022-01"),
      display: "Spring 2022",
    },
  },
  {
    title: "Matrix Methods in Machine Learning",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 532",
    subject: "Computer Science",
    number: "532",
    description:
      "Linear algebraic foundations of machine learning featuring real-world applications of matrix methods from classification and clustering to denoising and data analysis. Mathematical topics include: linear equations, regression, regularization, the singular value decomposition, and iterative algorithms. Machine learning topics include: the lasso, support vector machines, kernel methods, clustering, dictionary learning, neural networks, and deep learning.",
    relevancy: {
      date: new Date("2022-01"),
      display: "Spring 2022",
    },
  },
  {
    title: "Computer Graphics",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 559",
    subject: "Computer Science",
    number: "559",
    description:
      "Survey of computer graphics. Image representation, formation, presentation, composition and manipulation. Modeling, transformation, and display of geometric objects in two and three dimensions. Representation of curves and surfaces. Rendering, animation, multi-media and visualization.",
    relevancy: {
      date: new Date("2021-09"),
      display: "Fall 2021",
    },
  },
  {
    title: "Introduction to Artificial Neural Networks",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 539",
    subject: "Computer Science",
    number: "539",
    description:
      "Introduction to principles of advanced programming languages and programming-language theory. Topics include: lambda-calculus, functional languages, polymorphic functions, type inference, structural induction, lazy evaluation, operational semantics, denotational semantics, and axiomatic semantics.",
    relevancy: {
      date: new Date("2021-09"),
      display: "Fall 2021",
    },
  },
  {
    title: "Data and Algorithms: Ethics and Policy",
    institute: "UW-Madison",
    display: "UW-Madison Library & Information Studies 461",
    subject: "Library & Information Studies",
    number: "461",
    description:
      "An introduction to ethical, legal and policy issues related to analytics, 'big data' and algorithms to support decision making. Gain familiarity with major debates and controversies in a variety of contexts. Critically analyze course materials and apply moral reasoning and legal concepts to assess case studies and critique arguments made by others.",
    relevancy: {
      date: new Date("2021-09"),
      display: "Fall 2021",
    },
  },
  {
    title: "Introduction to Data Modeling II",
    institute: "UW-Madison",
    display: "UW-Madison Statistics 340",
    subject: "Statistics",
    number: "340",
    description:
      "Teaches students to apply statistical methods to learn from data. Topics include one- and two-sample inference; an introduction to Bayesian inference and associated probability theory; linear and logistic regression models; the bootstrap; and cross-validation. Students use an integrated statistical computing environment to explore and analyze data, develop models, make inferences, and communicate results in a reproducible manner through a project-oriented approach to learning.",
    relevancy: {
      date: new Date("2021-09"),
      display: "Fall 2021",
    },
  },
  {
    title: "Introduction to Algorithms",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 577",
    subject: "Computer Science",
    number: "577",
    description:
      "Basic paradigms for the design and analysis of efficient algorithms: greed, divide-and-conquer, dynamic programming, reductions, and the use of randomness. Computational intractability including typical NP-complete problems and ways to deal with them.",
    relevancy: {
      date: new Date("2021-01"),
      display: "Spring 2021",
    },
  },
  {
    title: "Data Programming II",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 320",
    subject: "Computer Science",
    number: "320",
    description:
      "Intermediate approach to Data Science programming using Python. Experience with basic tabular analysis in Python is assumed. Learn to implement data structures (e.g., graphs) to efficiently represent datasets. Software-engineering tools such as version control and Python virtual environments will be introduced, with an emphasis on reproducibility of analysis. Tracing and A/B testing will be introduced as techniques for generating meaningful datasets. Introduces basic classification, clustering, optimization, and simulation techniques. Plotting and visual communication will be emphasized throughout the course. Recommended for Data Science majors and other majors.",
    relevancy: {
      date: new Date("2021-01"),
      display: "Spring 2021",
    },
  },
  {
    title: "Introduction to Data Modeling I",
    institute: "UW-Madison",
    display: "UW-Madison Statistics 240",
    subject: "Statistics",
    number: "240",
    description:
      "Introduces students to reproducible data management, modeling, and analysis through a practical, hands-on case studies approach. Topics include the use of an integrated statistical computing environment, data wrangling, the R programming language, data graphics and visualization, random variables and concepts of probability, data modeling, and report generation using R Markdown with applications to a wide variety of data to address open-ended questions.",
    relevancy: {
      date: new Date("2021-01"),
      display: "Spring 2021",
    },
  },
  {
    title: "Introduction to Probability and Mathematical Statistics I",
    institute: "UW-Madison",
    display: "UW-Madison Statistics 309",
    subject: "Statistics",
    number: "309",
    description:
      "Probability and combinatorial methods, discrete and continuous, univariate and multivariate distributions, expected values, moments, normal distribution and derived distributions, estimation.",
    relevancy: {
      date: new Date("2021-01"),
      display: "Spring 2021",
    },
  },
  {
    title: "Introduction to Bioinformatics",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 576",
    subject: "Computer Science",
    number: "576",
    description:
      "Algorithms for computational problems in molecular biology. The course will study algorithms for problems such as: genome sequencing and mapping, pairwise and multiple sequence alignment, modeling sequence classes and features, phylogenetic tree construction, and gene-expression data analysis.",
    relevancy: {
      date: new Date("2020-09"),
      display: "Fall 2020",
    },
  },
  {
    title: "Introduction to Artificial Intelligence",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 540",
    subject: "Computer Science",
    number: "540",
    description:
      "Principles of knowledge-based search techniques, automatic deduction, knowledge representation using predicate logic, machine learning, probabilistic reasoning. Applications in tasks such as problem solving, data mining, game playing, natural language understanding, computer vision, speech recognition, and robotics.",
    relevancy: {
      date: new Date("2020-09"),
      display: "Fall 2020",
    },
  },
  {
    title: "Introduction to Operating Systems",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 537",
    subject: "Computer Science",
    number: "537",
    description:
      "Input-output hardware, interrupt handling, properties of magnetic tapes, discs and drums, associative memories and virtual address translation techniques. Batch processing, time sharing and real-time systems, scheduling resource allocation, modular software systems, performance measurement and system evaluation.",
    relevancy: {
      date: new Date("2020-09"),
      display: "Fall 2020",
    },
  },
  {
    title: "Introduction to Programming Languages and Compilers",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 536",
    subject: "Computer Science",
    number: "536",
    description:
      "Introduction to the theory and practice of compiler design. Comparison of features of several programming languages and their implications for implementation techniques. Several programming projects required.",
    relevancy: {
      date: new Date("2020-09"),
      display: "Fall 2020",
    },
  },
  {
    title: "Machine Organization and Programming",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 354",
    subject: "Computer Science",
    number: "354",
    description:
      "An introduction to fundamental structures of computer systems and the C programming language with a focus on the low-level interrelationships and impacts on performance. Topics include the virtual address space and virtual memory, the heap and dynamic memory management, the memory hierarchy and caching, assembly language and the stack, communication and interrupts/signals, compiling and assemblers/linkers.",
    relevancy: {
      date: new Date("2020-06"),
      display: "Summer 2020",
    },
  },
  {
    title: "Programming III",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 400",
    subject: "Computer Science",
    number: "400",
    description:
      "The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software.",
    relevancy: {
      date: new Date("2020-01"),
      display: "Spring 2020",
    },
  },
  {
    title: "Introduction to Computer Engineering",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 252",
    subject: "Computer Science",
    number: "252",
    description:
      "Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming.",
    relevancy: {
      date: new Date("2020-01"),
      display: "Spring 2020",
    },
  },
  {
    title: "Introduction to Discrete Mathematics",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 240",
    subject: "Computer Science",
    number: "240",
    description:
      "Basic concepts of logic, sets, partial order and other relations, and functions. Basic concepts of mathematics (definitions, proofs, sets, functions, and relations) with a focus on discrete structures: integers, bits, strings, trees, and graphs. Propositional logic, Boolean algebra, and predicate logic. Mathematical induction and recursion. Invariants and algorithmic correctness. Recurrences and asymptotic growth analysis. Fundamentals of counting.",
    relevancy: {
      date: new Date("2020-01"),
      display: "Spring 2020",
    },
  },
  {
    title: "Abstract Data Structures and Object-Oriented Programming in Java",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 300",
    subject: "Computer Science",
    number: "300",
    description:
      "Introduces students to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types (List, Stack, Queue, PriorityQueue (Heap), Binary Search Tree); generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion.",
    relevancy: {
      date: new Date("2019-09"),
      display: "Fall 2019",
    },
  },
  {
    title: "Introduction to Cryptography",
    institute: "UW-Madison",
    display: "UW-Madison Computer Sciences 435",
    subject: "Computer Science",
    number: "435",
    description:
      "Cryptography is the art and science of transmitting digital information in a secure manner. Provides an introduction to its technical aspects.",
    relevancy: {
      date: new Date("2019-09"),
      display: "Fall 2019",
    },
  },
  {
    title: "Linear Algebra",
    institute: "Milwaukee School of Engineering",
    display: "MSOE Math 383",
    subject: "Math",
    number: "383",
    description:
      "Topics include the use of elementary row operations to solve systems of linear equations, linear dependence, linear transformations, matrix operations, inverse of a matrix, determinants, subspaces, spaces, column spaces, dimension and rank, eigenvalues and eigenvectors, diagonalization of matrices, similarity, inner product and orthogonality, orthogonal projections and Gram-Schmidt process.",
    relevancy: {
      date: new Date("2019-01"),
      display: "Winter 2019",
    },
  },
  {
    title: "Multivariable Calculus",
    institute: "Milwaukee School of Engineering",
    display: "MSOE Math 232",
    subject: "Math",
    number: "232",
    description:
      "This course is a continuation of MA 231 and an introduction to multiple integration and infinite series. Topics include double and triple integrals with applications to areas, volumes and moments, infinite series with tests for convergence, power series, Taylor and Maclaurin series, and operations with series.",
    relevancy: {
      date: new Date("2018-11"),
      display: "Fall 2018",
    },
  },
  {
    title: "Abstract Data Structures in C++",
    institute: "Stanford",
    display: "Stanford Computer Science 106B",
    subject: "Computer Science",
    number: "106B",
    description:
      "Abstraction and its relation to programming. Software engineering principles of data abstraction and modularity. Object-oriented programming, fundamental data structures (such as stacks, queues, sets) and data-directed design. Recursion and recursive data structures (linked lists, trees, graphs). Introduction to time and space complexity analysis. Uses the programming language C++ covering its basic facilities.",
    relevancy: {
      date: new Date("2018-08"),
      display: "Summer 2018",
    },
  },
  {
    title: "Introduction to Scientific Computing",
    institute: "Stanford",
    display: "Stanford Computational & Mathematical Engineering 108",
    subject: "Computer Science",
    number: "108",
    description:
      "Introduction to Scientific Computing Numerical computation for mathematical, computational, physical sciences and engineering: error analysis, floating-point arithmetic, nonlinear equations, numerical solution of systems of algebraic equations, banded matrices, least squares, unconstrained optimization, polynomial interpolation, numerical differentiation and integration, numerical solution of ordinary differential equations, truncation error, numerical stability for time dependent problems and stiffness. Implementation of numerical methods in MATLAB programming assignments.",
    relevancy: {
      date: new Date("2018-08"),
      display: "Summer 2018",
    },
  },
  {
    title: "Client-Side Internet Technologies",
    institute: "Stanford",
    display: "Stanford Computer Science 193C",
    subject: "Computer Science",
    number: "193C",
    description:
      "Client-side technologies used to create web sites such as Google maps or Gmail. Includes HTML5, CSS, JavaScript, the Document Object Model (DOM), and Ajax.",
    relevancy: {
      date: new Date("2018-07"),
      display: "Summer 2018",
    },
  },
  {
    title: "AP Computer Science A",
    institute: "Cedarburg High School",
    subject: "Computer Science",
    number: "100",
    description:
      "AP Computer Science A is an introductory college-level computer science course. Students cultivate their understanding of coding through analyzing, writing, and testing code as they explore concepts like modularity, variables, and control structures.",
    relevancy: {
      date: new Date("2017-09"),
      display: "Spring 2017",
    },
  },
];

const alphabeticalSort: CourseSort = {
  compareTo: (a, b) => {
    return a.title.localeCompare(b.title);
  },
  display: "Course Title",
};

const sorts: CourseSort[] = [
  {
    compareTo: (a, b) => {
      return b.relevancy.date.getTime() - a.relevancy.date.getTime();
    },
    display: "Relevancy",
  },
  {
    compareTo: (a, b) => {
      return a.number.localeCompare(b.number);
    },
    display: "Course Number",
  },
  alphabeticalSort,
  {
    compareTo: (a, b) => {
      return a.institute.localeCompare(b.institute);
    },
    display: "Institution",
  },
];

const complexSorts: CourseSort[] = sorts.map((sort) => {
  const compareTo = (a: Course, b: Course) =>
    sort.compareTo(a, b) || alphabeticalSort.compareTo(a, b);
  return { ...sort, compareTo };
});

export { complexSorts as sorts };
export default courses;
