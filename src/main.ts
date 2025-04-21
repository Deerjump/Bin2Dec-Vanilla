import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <span id='errorMessage' hidden=true></span><br/>
      <label id="inputLabel" htmlFor="input">
        Binary:
      </label>
      <input
        id="input"
        type="text"
        placeholder='0'
      ></input>
      <br/>
      <label htmlFor='result'>Result:</label>
      <span id='result'>0</span>
  </div>
`;

const regex = /^[01]*$/;

function displayError(error: string) {
  const errorSpan = document.querySelector<HTMLElement>('#errorMessage')!;
  errorSpan.hidden = false;
  errorSpan.textContent = error;
}

function removeError() {
  const errorSpan = document.querySelector<HTMLElement>('#errorMessage')!;
  errorSpan.hidden = true;
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
    document.querySelector<HTMLElement>('#result')!.innerHTML = `${Number(
      `0b${element.value !== '' ? element.value : 0}`
    )}`;
  });
