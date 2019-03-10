import { observable, computed } from 'mobx'
// import { get } from 'https'
class userMobx {
  name = 'lemon'
  @observable firstName = 'first'
  @observable lastName = 'last'
  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(name) {
    console.log('set fullname:', name)
    this.firstName = `changed ${name}`
  }
}
export default new userMobx()
