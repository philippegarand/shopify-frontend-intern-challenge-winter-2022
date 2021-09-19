const API_KEY = process.env.REACT_APP_NASA_APOD_API_KEY

const API_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=True`

// Reference https://github.com/nasa/apod-api
/** Search parameters */
interface Params {
  /** A positive integer, no greater than 100. */
  count: number
  /** A string in YYYY-MM-DD format indicating the start of a date range. All images in the range from start_date to end_date will be returned in a JSON array. Cannot be used with date. */
  // start_date?: string
  /** A string in YYYY-MM-DD format indicating that end of a date range. If start_date is specified without an end_date then end_date defaults to the current date. */
  // end_date?: string
}

type Result = {
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

type ErrorResponse = {
  code: number
  msg: string
  service_version: string
}

type ApiResponse = Result[] | ErrorResponse

export type ImageDetails = {
  imageUrl: string
  title: string
  description: string
  date: string
  //author: string
}

const isError = (res: ApiResponse): res is ErrorResponse => {
  return (res as ErrorResponse).code !== undefined
}

export const getImages = async (params: Params): Promise<ImageDetails[]> => {
  let url = new URL(API_BASE_URL)

  url.searchParams.append('count', params.count.toString())

  const res = await fetch(url.toString())

  if (!res.ok) {
    throw res
  }

  let jsonRes = await res.json()
  jsonRes = jsonRes as ApiResponse

  if (isError(jsonRes)) {
    const error = jsonRes as ErrorResponse
    const errorString = `code=${error.code} msg=${error.msg} service_version=${error.service_version}`

    console.error(
      `API response succeeded, but there was an error: ${errorString}`
    )

    throw new Error(errorString)
  }

  return (jsonRes as Result[]).map(
    (x) =>
      ({
        imageUrl: x.thumbnail_url ?? x.url,
        //author: x.copyright,
        title: x.title,
        description: x.explanation,
        date: x.date,
      } as ImageDetails)
  )
}
