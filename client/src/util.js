export const localDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return (date = new Date(date).toLocaleDateString('en-US', options))
}
export const getToken = () => {
  const token = localStorage.getItem('token')
  return token === null ? '' : token
}
