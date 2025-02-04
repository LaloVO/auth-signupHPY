import type { NextApiRequest, NextApiResponse } from "next"

export function applyMiddleware(request: Request, middleware: any) {
  return new Promise((resolve, reject) => {
    middleware(
      request as unknown as NextApiRequest,
      {
        end: (code: number) => {
          if (code) {
            reject(new Error(`Rate limit exceeded`))
          } else {
            resolve(null)
          }
        },
        setHeader: () => {},
      } as NextApiResponse,
      () => {
        resolve(null)
      },
    )
  })
}

