import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Сматрфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ]
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ]
    this._devices = [
      { id: 1, name: 'Sumsung Galaxy A20', price: 25000, rating: 5, img: 'https://addrom.com/wp-content/uploads/2019/03/samsung-galaxy-a20-a205-400x300.jpg' },
      { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/4_zu_3_Teaser_Apple_iPhone_12_Pro.jpg' },
      { id: 3, name: 'Lenovo K12 pro', price: 25000, rating: 5, img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/LenovoK12Pro.jpg' },
      { id: 4, name: 'Asus ROG Phone 3', price: 25000, rating: 5, img: 'https://static.toiimg.com/thumb/msid-76198225,width-400,resizemode-4/76198225.jpg' },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}