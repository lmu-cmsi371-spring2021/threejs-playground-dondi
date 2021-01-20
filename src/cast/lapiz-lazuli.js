/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CylinderGeometry, MeshBasicMaterial, Mesh, Group } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class LapizLazuli {
  constructor(color) {
    this.geometry = new CylinderGeometry(0.5, 0.5, 0.5, 32)
    this.material = new MeshBasicMaterial({ color })
    this.mesh = new Mesh(this.geometry, this.material)

    this.geometryTop = new CylinderGeometry(0.5, 0.5, 0.5, 32)
    this.materialTop = new MeshBasicMaterial({ color: 0xffffff })
    this.meshTop = new Mesh(this.geometryTop, this.materialTop)
    this.meshTop.position.y += 1

    this.group = new Group()
    this.group.add(this.mesh)
    this.group.add(this.meshTop)
  }
}

export default LapizLazuli
