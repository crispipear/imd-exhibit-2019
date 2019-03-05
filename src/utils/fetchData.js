import * as contentful from 'contentful';

var client = contentful.createClient({
  space: 'y8itg9n71h1r',
  accessToken: '8be336497be9ea1542bc33c39e576e94e2c050bb2b0e735e8cbb3f05f7d74ae0'
})

export const fetchData = type => {
  return client.getEntries({content_type: type})
    .then(entries => {
      let result = []
      entries.items.forEach(entry => {
        if(entry.fields) {
          result.push(entry.fields)
        }
      })
      return result
    })
}

export const fetchAssets = () => {
  return client.getAssets()
      .then(entries => {
          let result = []
          entries.items.forEach(entry => {
          if(entry.fields) {
              result.push(entry.fields)
          }
          })
          return result
      })
}