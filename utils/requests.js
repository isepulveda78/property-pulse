const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

//fetch all properties
async function fetchProperties(){
    //Handle the case where the domain is not available yet
    if(!apiDomain){
        return []
    }
    try {
      const res = await fetch(`${apiDomain}/properties`)
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json()
    } catch (error) {
      console.log('error: ', error)
      return []
    }
  }

//Fetch single property
async function fetchProperty(){
    //Handle the case where the domain is not available yet
    if(!apiDomain){
        return null
    }
    try {
      const res = await fetch(`${apiDomain}/properties/${id}`)
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json()
    } catch (error) {
      console.log('error: ', error)
      return null
    }
  }

export { fetchProperties, fetchProperty }