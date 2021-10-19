export const sum = (a:number, b:number) => {
  return a + b
}

export const asyncSum = async (a:number, b:number) => {
  return new Promise((resolve) => {
    resolve(a + b)
  })
}