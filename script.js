const usersData = [
  {
    id: 0,
    username: "Wade Wilson",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "California",
    country: "USA",
    techStak: ["PHP", "android", "IOS", "Flutter", "Swift", "Kotlin", "Java"],
    description:
      "Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
  },
  {
    id: 1,
    username: "Alex Morgan",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "London",
    country: "UK",
    techStak: [
      "UI",
      "UX",
      "Photoshop",
      "AfterEffect",
      "Premier Pro",
      "Adobe Illutrator",
    ],
    description:
      "Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
  },

  {
    id: 2,
    username: "Jonathan Jones",
    image:
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Berlin",
    country: "Germany",
    techStak: [
      "Node.JS",
      "MongoDB",
      "React.JS",
      "HTML",
      "CSS",
      "JS",
      "Express",
      "Redux",
      "Firebase",
      "Next.JS",
      "Angular.JS",
    ],
    description:
      "Jonathan is very good web developer who can create any web application with high effeciency",
  },
];

var clutter = "";
usersData.forEach(function (elem) {
  clutter += `<div
  class="h-4/5 w-96 bg-white rounded flex flex-col items-center justify-center gap-7">
  <div class="flex justify-end h-3 w-full">
    <i class="ri-more-2-fill text-3xl text-gray-500"></i>
  </div>
  <div class="bg-[url(${elem.image})] h-52 w-52 rounded-full bg-cover"></div>
  <div class="text flex flex-col items-center mb-4">
    <h1 class="text-2xl font-bold">${elem.username}</h1>
    <h4 class="text-l text-gray-500">${elem.city},${elem.country}</h4>
  </div>
  <div class="btns flex items-center justify-center gap-3">
    <button class="px-3 py-1 rounded-2xl border-2 border-gray-400">
      ${elem.techStak[0]}
    </button>
    <button class="px-3 py-1 rounded-2xl border-2 border-gray-400">
      ${elem.techStak[1]}
    </button>
    <button class="px-3 py-1 rounded-2xl border-2 border-gray-400">
      ${elem.techStak[2]}
    </button>
    <button class="px-3 py-1 rounded-2xl border-2 bg-red-700 text-white">
      +${elem.techStak.length - 3}
    </button>
  </div>
  <p class="text-center px-1">${elem.description}
  </p>
  <button
    class="h-[80px] w-full text-black font-bold hover:bg-red-700 hover:text-white"
  >
    VIEW PROFILE
  </button>
</div>`;
});

document.querySelector("#main").innerHTML = clutter;
