import { Course, CourseSort } from "./types";

const courses: Course[] = [
  {
    title: "Machine Organization And Programming",
    descriptiveTitle: "Machine Organization And Programming",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 354",
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
    descriptiveTitle: "Programming III",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 400",
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
    descriptiveTitle: "Introduction To Computer Engineering",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 252",
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
    descriptiveTitle: "Introduction To Discrete Mathematics",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 240",
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
    title: "Programming II",
    descriptiveTitle:
      "Abstract Data Structures and Object-Oriented Programming in Java",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 300",
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
    descriptiveTitle: "Introduction To Cryptography",
    institute: "UW-Madison",
    display: "UW-Madison Computer Science 435",
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
    descriptiveTitle: "Linear Algebra",
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
    title: "Calculus IV",
    descriptiveTitle: "Multivariable Calculus",
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
    title: "Programming Abstractions",
    descriptiveTitle: "Abstract Data Structures in C++",
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
    descriptiveTitle: "Introduction to Scientific Computing",
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
    descriptiveTitle: "Client-Side Internet Technologies",
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
    descriptiveTitle: "AP Computer Science A",
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
