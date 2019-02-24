// 1. Given an array of five integers in ascending order,
// write a function called “transform” that takes the array,
// multiplies each integer by 10, and produces a new array
// of strings in descending order.

let items = [1, 2, 3, 4, 5];

function transform(items) {
  // Items is sorted in ascending order, so use reverse() to get descending order
  return items.map(item => item * 10).reverse();

  //If items is not sorted
  //   return items.map(item => item * 10).sort((a, b) => b - a);
}

// Output
console.log(transform(items)); // ['50', '40', '30', '20', '10']

// 2. Given the following wheels and categories. Write a function named “wheelsWithCategories”
// that produces the result below.

const wheels = {
  wheels: [
    {
      wheelID: 1,
      wheelCategory: "OffRoad",
      wheelName: "OffRoad One"
    },
    {
      wheelID: 2,
      wheelCategory: "Performance",
      wheelName: "Performance two"
    }
  ]
};

const categories = {
  categories: [
    {
      name: "OffRoad",
      Description: "Off-Road"
    },
    {
      name: "Performance",
      Description: "Performance wheels"
    }
  ]
};

function wheelsWithCategories({ wheels }, { categories }) {
  const result = {
    wheelsWithCategories: []
  };

  result.wheelsWithCategories = wheels.map((wheel, idx) => {
    return { ...wheel, categoryInfo: categories[idx] };
  });

  return result;
}

console.log(wheelsWithCategories(wheels, categories));
// Output
// {
//     wheelsWithCategories: [
//       {
//         wheelID: 1,
//         wheelCategory: 'OffRoad',
//         wheelName: 'OffRoad One',
//         categoryInfo:
//         {
//             name: 'OffRoad',
//             Description: 'Off-Road'
//         }
//       },
//       {
//         wheelID: 2,
//         wheelCategory: 'Performance',
//         wheelName: 'Performance two',
//         categoryInfo:
//         {
//           name: 'Performance',
//           Description: 'Performance wheels'
//         }
//       }
//     ]
//   }
