/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO CHANGE FUNCTION NAME

function range(...args) {
  // write your solution below
  const totalArgs = args.length;

  const final = [];

  // error checking
  if (totalArgs === 0) throw new Error("Please provide atleast one arg");

  if (totalArgs === 1 && args[0] === 0) return [];

  if (totalArgs === 1 && args[0] >= 0) {
    for (let i = 0; i < args[0]; i++) {
      final.push(i);
    }
  } else if (totalArgs === 1 && args[0] < 0) {
    for (let i = 0; i < args[0] * -1; i++) {
      i === 0 ? final.push(i) : final.push(i * -1);
    }
  } else if (totalArgs === 2) {
    for (let i = args[0]; i < args[1]; i++) {
      final.push(i);
    }
  } else {
    if (args[1] >= 0) {
      for (let i = args[0]; i < args[1]; i += args[2]) {
        final.push(i);
      }
    } else {
      for (let i = args[0]; i < args[1] * -1; i -= args[2]) {
        i === 0 ? final.push(i) : final.push(i * -1);
      }
    }
  }
  return final;
}

console.log(range(0, -4, -1));
