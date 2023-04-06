import { lazy, Suspense } from 'react'
import type { LazyExoticComponent, ComponentType } from 'react'
import { Ellipsis } from 'react-spinners-css'
import { Colors } from '../constants/pallete'

type LazyComponentType = LazyExoticComponent<ComponentType<any>>

const loader = (Component: LazyComponentType) => (props: any) =>
(
  <Suspense
    fallback={
      <Ellipsis
        color={Colors.BLACKISH}
        size={80}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      />
    }
  >
    <Component {...props} />
  </Suspense>
)

export const lazyWithRetry = (componentImport: any) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('page-has-been-force-refreshed') || 'false'
    )

    try {
      const component = await componentImport()
      window.localStorage.setItem('page-has-been-force-refreshed', 'false')

      return component
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming that the user is not on the latest version of the application.
        // Let's refresh the page immediately.
        window.localStorage.setItem('page-has-been-force-refreshed', 'true')
        return window.location.reload()
      }

      // The page has already been reloaded
      // Assuming that user is already using the latest version of the application.
      // Let's let the application crash and raise the error.
      throw error
    }
  })

export const lazyWithRetryAndLoader = (componentImport: any) =>
  loader(lazyWithRetry(componentImport))
