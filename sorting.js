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
    let count = 0;

    const elms = {
      process: document.querySelector('#process'),
      result: document.querySelector('#result'),
      total: document.querySelector('#total')
    };

    elms.process.innerHTML = '';

    function swap() {
      let repeat = false;

      const cloned = numbers.slice();

      for (let i = 0; i < numbers.length; i++) {
        // If not the last number & current number is bigger than next number.
        if (i < numbers.length - 1 && numbers[i] > numbers[i + 1]) {
          elms.process.innerHTML = elms.process.innerHTML + '<strong>' + numbers[i] + ' is in the wrong position, let\'s swap ' + numbers[i] + ' with ' + numbers[i + 1] + '</strong><br>';

          numbers[i] = cloned[i + 1];
          numbers[i + 1] = cloned[i];
          count++;
          
          repeat = true;
          break;
        } else {
          elms.process.innerHTML = elms.process.innerHTML + numbers[i] + ' already in correct position, no need to swap<br>';
        }
      }

      if (repeat) swap();
    }

    swap();

    elms.result.innerHTML = 'sorted result: ' + numbers.toString();
    elms.total.innerHTML = 'needed swaps: ' + count;
  }

  function playModernSwaps(numbers) {
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