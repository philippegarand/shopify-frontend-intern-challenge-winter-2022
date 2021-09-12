const API_KEY = 'CFaf3GKMjpgUbEWU4X2NgaBBJOBJrnbOzwi1nm1i' // put in env variable

const API_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=True`

// Reference https://github.com/nasa/apod-api
/** Optionals search parameter */
interface params {
  /** A string in YYYY-MM-DD format indicating the date of the APOD image (example: 2014-11-03). Defaults to today's date. Must be after 1995-06-16, the first day an APOD picture was posted. There are no images for tomorrow available through this API. */
  date?: string
  /** A positive integer, no greater than 100. */
  count: number
  /** A string in YYYY-MM-DD format indicating the start of a date range. All images in the range from start_date to end_date will be returned in a JSON array. Cannot be used with date. */
  start_date?: string
  /** A string in YYYY-MM-DD format indicating that end of a date range. If start_date is specified without an end_date then end_date defaults to the current date. */
  end_date?: string
}

type result = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: 'image' | 'video'
  service_version: string
  title: string
  url: string
  thumbnail_url?: string
}

type errorResponse = {
  code: number
  msg: string
  service_version: string
}

export type imagesResponse = {
  link: string
  title: string
  description: string
  date: string
  author: string
}

const isError = (res: any): res is errorResponse =>
  (res as errorResponse).code !== undefined

export const getImages = async (params: params): Promise<imagesResponse[]> => {
  let url = new URL(API_BASE_URL)

  url.searchParams.append('count', params.count.toString())

  const res = await fetch(url.toString())

  if (res.ok) {
    const jsonRes = (await res.json()) as result[] | errorResponse

    if (isError(jsonRes)) {
      const error = jsonRes as errorResponse

      console.log(
        `API response succeed, but there is an error: code=${error.code} msg=${error.msg} service_version=${error.service_version}`
      )
    }

    return (jsonRes as result[]).map(
      (x) =>
        ({
          link: x.thumbnail_url ? x.thumbnail_url : x.url,
          author: x.copyright,
          title: x.title,
          description: x.explanation,
          date: x.date,
        } as imagesResponse)
    )
  } else {
    throw res
  }
}
