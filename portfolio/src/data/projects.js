export default ({ getAnchorTag }) => [
  {
    title: "A Visualization of Schelling's Model",
    subtitle: "Agent-Based Sociology Model of Segregation",
    href: "https://spencrr.github.io/schelling-model/",
    vid: () => require("@/assets/projects/schellings-model.mp4"),
    desc: `The Visualization of ${getAnchorTag(
      "Schelling's Model",
      "https://wikipedia.org/wiki/Agent-based_model#1970s_and_1980s:_the_first_models"
    )} was inspired by courses in Sociology and English. The main principle of the model is to show how residential segregation can arise from a small preference to be around members of the same group. In this visualization, each color represents a group. The preference is calculated as a frequency of surrounding pixels for each pixel.`,
  },
  {
    title: "Conway's Game of Life",
    subtitle: "Rule-Based Cellular Automaton",
    href:
      "https://github.com/spencrr/processing-projects/tree/master/Cellular%20Automata/GameOfLife",
    vid: () => require("@/assets/projects/game-of-life.mp4"),
    desc: `As a project for AP Computer Science, ${getAnchorTag(
      "Conway's Game of Life",
      "https://wikipedia.org/wiki/Conway%27s_Game_of_Life"
    )} was written using ${getAnchorTag(
      "Processing",
      "https://processing.org/"
    )}, a sketchbook for creating computational visual arts. Game of Life is a cellular automaton that uses basic rules to determine the state of each pixel iteratively.`,
  },
  {
    title: "Julia Sets",
    subtitle: "Visualization Formed by an Iterative Complex Function",
    href:
      "https://github.com/spencrr/processing-projects/tree/master/Math%20Visualizations/JuliaSetsMandelbrotSet",
    vid: () => require("@/assets/projects/julia-sets.mp4"),
    desc: `This project helps create a visualization for
            ${getAnchorTag(
              "Julia Sets",
              "https://wikipedia.org/wiki/Julia_set#Quadratic_polynomials"
            )} of quadratic polynomials, like the famous Mandelbrot Set fractal. The
            ${getAnchorTag(
              "Mandelbrot Set",
              "https://wikipedia.org/wiki/Mandelbrot_set"
            )} is related to the Julia Sets by way of an iterative function that successively squares an input. Julia Sets use a specific complex constant for each point, whereas the Mandlebrot Set uses the point on the complex plane itself. This project is able to visualize both types of fractals!`,
  },
  {
    title: "Fibonacci Spiral",
    subtitle: "A Logarithmic Self-Similar Spiral Commonly Found in Nature",
    href:
      "https://github.com/spencrr/processing-projects/tree/master/Math%20Visualizations/FibonacciSpiral",
    vid: () => require("@/assets/projects/fibonacci-spiral.mp4"),
    desc: "",
  },
];
