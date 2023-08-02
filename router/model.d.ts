declare namespace IRouteType {
  interface IMeta {
    pageTitle: string
  }
  interface IRouer {
    path: string
    emement: React.ReactNode
    meta: IMeta
    chileren?: IRouer[]
  }
}
