import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="flex flex-row items-center justify-between">
        <div class="p-3 basis-1/12 bg-amber-500 m-2">01</div>
        <div class="basis-1/6 bg-amber-500 m-2 text-center">02</div>
        <div class="basis-1/6 bg-amber-500 m-2">03</div>

      </div>
      <div class="grid justify-items-start ">
        <div class="basis-1/3 bg-amber-500">01</div>
        <div class="basis-1/3 bg-amber-500">02</div>
        <div class="basis-1/3 bg-amber-500">03</div>
        <div class="basis-1/3 bg-amber-500">04</div>
        <div class="basis-1/3 bg-amber-500">05</div>
        <div class="basis-1/3 bg-amber-500">06</div>
      </div>
      <div class="grid justify-items-center ">
        <div class="basis-1/3 bg-amber-500">01</div>
        <div class="basis-1/3 bg-amber-500">02</div>
        <div class="basis-1/3 bg-amber-500">03</div>
        <div class="basis-1/3 bg-amber-500">04</div>
        <div class="basis-1/3 bg-amber-500">05</div>
        <div class="basis-1/3 bg-amber-500">06</div>
      </div>
      <div class="grid justify-items-end ">
      <div class="basis-1/3 bg-amber-500">01</div>
        <div class="basis-1/3 bg-amber-500">02</div>
        <div class="basis-1/3 bg-amber-500">03</div>
        <div class="basis-1/3 bg-amber-500">04</div>
        <div class="basis-1/3 bg-amber-500">05</div>
        <div class="basis-1/3 bg-amber-500">06</div>
      </div>
    </div>

  );
}

export default App;
