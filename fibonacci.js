function fb(n) {
    let a = 0, b = 1, c;
    for (let i = 0; a <= n; i++) {
      console.log(a);
      c = a + b;
      
      a = b;
      b = c;
    }
  }
  fb(10);