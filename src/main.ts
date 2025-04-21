import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <label id="inputLabel" htmlFor="input">
        Binary:
      </label>
      <input
        id="input"
        type="text"
        placeholder='0'
        maxLength=8
      ></input>
      <br/>
      <label htmlFor='result'>Result:</label>
      <span id='result'>0</span>
  </div>
`;

const regex = /^[01]*$/;

document.querySelector<HTMLInputElement>('#input')?.addEventListener('beforeinput', (event) => {
    const data = event.data;
    console.log(data);
    const currentTarget = event.currentTarget as HTMLInputElement;
    if (
      data != null &&
      (!regex.test(data) ||
        currentTarget.value.length === currentTarget.maxLength)
    ) {
      event.preventDefault();
      return;
    }
  });

document.querySelector<HTMLInputElement>('#input')?.addEventListener('input', (event) => {
    const element = event.currentTarget as HTMLInputElement;
    document.querySelector<HTMLElement>('#result')!.innerHTML = `${Number(
      `0b${element.value ?? 0}`
    )}`;
  });
