const includesThisFileName = (str: string) =>
  !str.includes(__filename)

const sliceErrorStack = (err: Error) =>
  (err.stack || '')
    .split('\n')
    .filter(includesThisFileName)
    .join('\n')

export default (error: Error, message: string) => {
  const newError = new Error(message)
  // @ts-ignore
  newError.original = error
  newError.stack = `${sliceErrorStack(newError)}\n${error.stack}`
  return newError
}
