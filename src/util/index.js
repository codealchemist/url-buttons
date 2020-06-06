export const noEvent = (event) => {
  console.log('NO EVENT', event)
  event.preventDefault()
  event.stopPropagation()
}
