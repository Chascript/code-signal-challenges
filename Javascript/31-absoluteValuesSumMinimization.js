function absoluteValuesSumMinimization(a) {
  const abs = a.map(x=>{
      const y = a.reduce((a,b)=>{
          return Math.abs(b-x) + a
      },0)
      return y
  })
  return a[abs.indexOf(Math.min(...abs))]
}
