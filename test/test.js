function t() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let d = 10;
      resolve(d);
    }, 1000);
  }).then((a) => a + 10);
}

// t().then((a) => console.log(a));

async function a() {
  const d = await t();

  console.log(d);
}

a();
