function distridute(nums, queues, n, digit) {
  for (const i = 0; i < n; ++i) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    }
  }
}
function collect(queues, nums) {
  const i = 0;
  for (const digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  for (const i = 0; i < arr.length; ++i) {
    putstr(arr[i] + '');
  }
}

// 메인 프로그램

const queues = [];
for (const i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}

const nums = [];
for (const i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log(dispArray(nums));
dispArray(nums);
distridute(nums, queues, 10, 1);
collect(queues, nums);
distridute(nums, queues, 10, 10);
collect(queues, nums);
dispArray(nums);
console.log(dispArray(nums));
