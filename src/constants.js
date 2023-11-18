export const rocketsData = [
    {
      name: "Falcon 1",
      description: "Falcon 1 was SpaceX's first orbital rocket, designed for small satellite launches.",
      image: "/assets/rocket1.jpg",
    },
    {
      name: "Falcon 9",
      description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
      image: "/assets/rocket2.jpg",
    },
    {
      name: "Falcon Heavy",
      description: "Falcon Heavy is the most powerful operational rocket in the world, designed for heavy-lift capability.",
      image: "/assets/rocket3.jpg",
    },
  ];
  
  export const capsulesData = [
    // Existing capsules
    {
      capsule_id: "dragon1",
      capsule_serial: "C107",
      details: null,
      landings: 1,
      missions: [/* missions data */],
      original_launch: "2015-01-10T09:47:00.000Z",
      original_launch_unix: 1420883220,
      reuse_count: 0,
      status: "unknown",
      type: "Dragon 1.1"
    },
    {
      capsule_id: "dragon2",
      capsule_serial: "C108",
      details: "Details about Dragon 2",
      landings: 2,
      missions: [/* missions data */],
      original_launch: "2018-04-02T20:30:41.000Z",
      original_launch_unix: 1522702231,
      reuse_count: 1,
      status: "active",
      type: "Dragon 2"
    },
    // Additional capsules
    {
      capsule_id: "dragon3",
      capsule_serial: "C109",
      details: "Details about Dragon 3",
      landings: 3,
      missions: [/* missions data */],
      original_launch: "2020-09-10T11:11:00.000Z",
      original_launch_unix: 1599741660,
      reuse_count: 2,
      status: "retired",
      type: "Dragon 2.1"
    },
    {
      capsule_id: "dragon4",
      capsule_serial: "C110",
      details: "Details about Dragon 4",
      landings: 0,
      missions: [/* missions data */],
      original_launch: "2021-05-30T19:30:00.000Z",
      original_launch_unix: 1622392200,
      reuse_count: 0,
      status: "unknown",
      type: "Dragon 2"
    },
    {
      capsule_id: "dragon5",
      capsule_serial: "C111",
      details: "Details about Dragon 5",
      landings: 1,
      missions: [/* missions data */],
      original_launch: "2022-03-30T15:00:00.000Z",
      original_launch_unix: 1679818800,
      reuse_count: 1,
      status: "active",
      type: "Dragon 2.1"
    },
    // Add more capsule objects as needed
  ];
  
  
export const BASE_URL = 'https://api.spacexdata.com/v3';
export const GET_CAPSULES = BASE_URL+'/capsules?limit=25&offset=5'

// Debounce function to delay API calls
export function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}