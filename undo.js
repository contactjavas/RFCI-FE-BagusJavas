(function () {
  const label = document.querySelector('.label');
  const field = document.querySelector('#text');
  const undoRedoButton = document.querySelector('.undo-redo');
  const reverseButton = document.querySelector('.reverse');

  let state = {
    count: 0,
    prev: '',
    current: '',
    next: ''
  }

  window.addEventListener('load', function () {
    label.innerHTML = field.value;
    state.current = field.value;
  });

  reverseButton.addEventListener('click', function () {
    const text = field.value.split("").reverse().join("");
    label.innerHTML = text;
  });

  field.addEventListener('change', function () {
    console.log('change event called');

    if (undoRedoButton.disabled) {
      undoRedoButton.innerHTML = 'Undo Change';
      undoRedoButton.disabled = false;
    }
    state.prev = state.current;
    state.current = this.value;
  });

  undoRedoButton.addEventListener('click', function () {
    if (!state.current) {
      alert('no changes found');
      return;
    }
  
    if (state.count % 2 === 0) {
      undoChange();
    } else {
      redoChange();
    }
  
    state.count++;
  });

  function undoChange() {
    console.log('doing undo');
    field.value = state.prev;
    undoRedoButton.innerHTML = 'Redo Change';
  }
  
  function redoChange() {
    console.log('doing redo');
    field.value = state.current;
    undoRedoButton.innerHTML = 'Undo Change';
  }
})();