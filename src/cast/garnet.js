/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Garnet {
  constructor(color) {
    this.geometry = new BoxGeometry()
    this.material = new MeshBasicMaterial({ color })
    this.mesh = new Mesh(this.geometry, this.material)
  }
}

export default Garnet
