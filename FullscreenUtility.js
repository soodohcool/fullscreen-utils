// Singleton class for fullscreen utility
class FullscreenUtility {
  constructor() {
    if (!FullscreenUtility.instance) {
      this.init()
      FullscreenUtility.instance = this
    }

    return FullscreenUtility.instance
  }

  init() {
    this.prefixMethods = [
      { prefix: '', event: 'fullscreenchange' },
      { prefix: 'webkit', event: 'webkitfullscreenchange' },
      { prefix: 'moz', event: 'mozfullscreenchange' },
      { prefix: 'ms', event: 'MSFullscreenChange' }
    ]

    this.selectedPrefix = this.prefixMethods.find(({ prefix }) => (
      `${prefix}RequestFullscreen` in document.documentElement
    ))

    if (!this.selectedPrefix) {
      throw new Error('Fullscreen API is not supported in this browser.')
    }
  }

  isFullscreenEnabled() {
    return !!this.selectedPrefix
  }

  isFullscreen() {
    const propName = `${this.selectedPrefix.prefix}FullscreenElement`
    return !!document[propName]
  }

  requestFullscreen(element) {
    const methodName = `${this.selectedPrefix.prefix}RequestFullscreen`
    return element[methodName]()
  }

  exitFullscreen() {
    const methodName = `${this.selectedPrefix.prefix}ExitFullscreen`
    return document[methodName]()
  }

  toggleFullscreen(element) {
    return this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen(element)
  }
}
// Singleton instance 
const FullscreenUtils = new FullscreenUtility()

export { FullscreenUtility, FullscreenUtils }
