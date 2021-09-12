const API_BASE_URL = 'https://images-api.nasa.gov/search?media_type=image'

// Reference https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
/** Optionals search parameter */
interface params {
  /** Free text search terms to compare to all indexed metadata. */
  q?: string
  /** Terms to search for in “Keywords” fields. Separate multiple values with commas. */
  keywords?: string
}

type details = {
  center: string
  date_created: string
  description: string
  keywords: string[]
  media_type: 'image' | 'video'
  nasa_id: string
  title: string
}

type itemLink = {
  href: string
  rel: string
  render: string
}

type resultLink = {
  href: string
  prompt: string
  rel: string
}

type data = {
  data: details[]
  href: string
  links: itemLink[]
}

type validResponse = {
  collection: {
    href: string
    items: data[]
    links: resultLink[]
    metadata: { total_hits: number }
    version: string
  }
}

export type imagesResponse = {
  link: string
  title: string
  description: string
  date: string
}

type errorResponse = {
  reason: string
}

const isError = (res: any): res is errorResponse =>
  (res as errorResponse).reason !== undefined

export const getImages = async (params: params): Promise<imagesResponse[]> => {
  let url = new URL(API_BASE_URL)

  if (params.q) {
    url.searchParams.append('q', params.q)
  }

  if (params.keywords) {
    url.searchParams.append('keywords', params.keywords)
  }

  // do not need api key??
  //queryUrl += `&api_key=${API_KEY}`
  //url.searchParams.append('api_key', API_KEY)

  const res = await fetch(url.toString())

  if (res.ok) {
    const fetchRes = (await res.json()) as validResponse | errorResponse

    if (isError(fetchRes)) {
      console.log(
        'API response succeed, but there is an error: ' +
          (fetchRes as errorResponse).reason
      )
    }

    return (fetchRes as validResponse).collection.items.map(
      (x) =>
        <imagesResponse>{
          link: x.links[0].href,
          title: x.data[0].title,
          date: x.data[0].date_created,
          description: x.data[0].description,
        }
    )
  } else {
    throw res
  }
}
