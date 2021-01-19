/**
 * The scene-manager module serves as an entry point to all scene-related activities, from initialization
 * to access to objects to anything else.
 *
 * The starter version of the scene manager is adapted from the introductory code provided by three.js.
 */
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

import Garnet from '../cast/garnet'

const DEFAULT_ROTATION_RATE = 0.01

const createDemoUniverse = ({ fieldOfView, width, height, nearPlane, farPlane }) => {
  const scene = new Scene()
  const camera = new PerspectiveCamera(fieldOfView, width / height, nearPlane, farPlane)

  const renderer = new WebGLRenderer()
  renderer.setSize(width, height)

  const garnet = new Garnet(0x00ff00)
  scene.add(garnet.mesh)

  // Turning is a universe-specific behavior: you can decide what these can be.
  let turning = true
  const turn = () => {
    turning = true
  }

  const stop = () => {
    turning = false
  }

  const animate = () => {
    window.requestAnimationFrame(animate)

    if (turning) {
      garnet.mesh.rotation.x += DEFAULT_ROTATION_RATE
      garnet.mesh.rotation.y += DEFAULT_ROTATION_RATE
    }

    renderer.render(scene, camera)
  }

  return {
    camera,
    renderer,
    animate,
    turn,
    stop,
    cast: {
      garnet
    }
  }
}

export { createDemoUniverse }