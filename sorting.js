(function () {
  window.addEventListener('load', function () {
    let numbers = document.querySelector('#numbers').value;
    numbers = numbers.split(',');
    numbers = numbers.map(x => parseInt(x, 10));

    playSwaps(numbers);
  });

  document.querySelector('#numbers').addEventListener('change', function (e) {
    let numbers = this.value.split(',');
    numbers = numbers.map(x => parseInt(x, 10));
  
    playSwaps(numbers);
  });

  function playSwaps(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    let count = 0;
    let i = numbers.length;
    let p;

    const elms = {
      process: document.querySelector('#process'),
      result: document.querySelector('#result'),
      total: document.querySelector('#total')
    };

    elms.process.innerHTML = '';

    while (i--) {
      if (numbers[i] === sorted[i]) {
        elms.process.innerHTML = elms.process.innerHTML + numbers[i] + ' already in correct position, no need to swap<br>';
        continue;
      }

      p = numbers.indexOf(sorted[i]);
      [numbers[i], numbers[p]] = [numbers[p], numbers[i]];
      elms.process.innerHTML = elms.process.innerHTML + numbers[i] + ' is in the wrong position, let\'s swap ' + numbers[i] + ' with ' + numbers[p] + '<br>';
      count++;
    }

    elms.result.innerHTML = 'sorted result: ' + numbers.toString();
    elms.total.innerHTML = 'needed swaps: ' + count;

    return count;
  }
})();