import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class='error'>
        <span id='errorMessage'></span>
      </div>
      <div class='input'>
        <label id="inputLabel" htmlFor="input">
          Binary:
        </label>
        <input
          id="input"
          type="text"
        ></input>
      </div>
      <div class='result'>
        Result: <input id='result' disabled></span>
      </div>
`;

const regex = /^[01]*$/;

function displayError(error: string) {
  const errorContainer = document.querySelector<HTMLElement>('.error')!;
  const errorSpan = document.querySelector<HTMLElement>('#errorMessage')!;
  errorContainer.style.visibility = 'visible';
  errorSpan.textContent = error;
}

function removeError() {
  const errorContainer = document.querySelector<HTMLElement>('.error')!;
  const errorSpan = document.querySelector<HTMLElement>('#errorMessage')!;
  errorContainer.style.visibility = 'hidden';
  errorSpan.textContent = '';
}

document
  .querySelector<HTMLInputElement>('#input')
  ?.addEventListener('beforeinput', (event) => {
    const data = event.data;
    console.log(data);
    if (data != null && !regex.test(data)) {
      event.preventDefault();
      displayError(`You must only enter a 1 or a 0! You entered: "${data}"`);
      return;
    }
    removeError();
  });

document
  .querySelector<HTMLInputElement>('#input')
  ?.addEventListener('input', (event) => {
    const element = event.currentTarget as HTMLInputElement;
    document.querySelector<HTMLInputElement>('#result')!.value =
      (element.value === '' || element.value === undefined) ? '' : `${Number(`0b${element.value}`)}`;
  });
