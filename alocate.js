const projects = [
  { name: "Project A", budget: 5000, priority: 1 },
  { name: "Project B", budget: 3000, priority: 2 },
  { name: "Project C", budget: 2000, priority: 3 },
];

const totalBudget = 8000;

function allocateBudgets(projects, totalBudget) {
  projects.sort((a, b) => a.priority - b.priority);

  const allocation = projects.map((project) => {
    if (totalBudget >= project.budget) {
      totalBudget -= project.budget;
      return { name: project.name, allocated: project.budget };
    } else {
      const allocated = totalBudget;
      return { name: project.name, allocated };
    }
  });

  return allocation;
}
const result = allocateBudgets(projects, totalBudget);
console.log(result);

module.exports = allocateBudgets;