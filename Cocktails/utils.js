const paginate = (data) => {
    const itemsPerPage = 6
    const numberOfPages = Math.ceil(data.length / itemsPerPage)
  
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return data.slice(start, start + itemsPerPage)
    })
  
    return newFollowers
  }
  
  export default paginate
