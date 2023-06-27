import { useState } from 'react';

function AppWorks() {
  const [page, setPage] = useState('home');

  function changePage(p) {
    setPage(p);
  }

  const data = [
    'home',
    'react',
    'vue'
  ]

  const buttonList = data.map((x) => (
    <button
      key={x}
      onClick={() => changePage(x)}
    >
      {x}
    </button>
  ));

  return (
    <div>
      <nav>
        {buttonList}
      </nav>
      <div>{page}</div>
    </div>
  )
}

export default AppWorks;
