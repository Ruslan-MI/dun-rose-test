const FurnitureLegsQuantity = {
  DEFAULT: 4,
  SOFA: 6,
};

const SOFA_SEATS_QUANTITY = 2;
const CUPBOARD_DOORS_QUANTITY = 1;

const furnitureStorage = [];

class FurnitureAbstract {
  constructor() {
    this._legsQuantity = FurnitureLegsQuantity.DEFAULT;
  }

  getLegsQuantity() {
    return this._legsQuantity;
  }

  saveInstance(storage) {
    storage.push(this);
  }
}

class CushionedFurnitureAbstract extends FurnitureAbstract {
  constructor() {
    super();

    this._upholsteryMaterial = 'leather';
  }

  getUpholsteryMaterial() {
    return this._upholsteryMaterial;
  }
}

class Sofa extends CushionedFurnitureAbstract {
  constructor(seatsQuantity) {
    super();

    this._legsQuantity = FurnitureLegsQuantity.SOFA;
    this._seatsQuantity = seatsQuantity;
  }

  getSeatsQuantity() {
    return this._seatsQuantity;
  }
}

class StorageFurnitureAbstract extends FurnitureAbstract {
  constructor() {
    super();

    this._baseMaterial = 'wood';
  }

  getBaseMaterial() {
    return this._baseMaterial;
  }
}

class Сupboard extends StorageFurnitureAbstract {
  constructor(doorsQuantity) {
    super();

    this._doorsQuantity = doorsQuantity;
  }

  getDoorsQuantity() {
    return this._doorsQuantity;
  }
}

const sofa = new Sofa(SOFA_SEATS_QUANTITY);
sofa.saveInstance(furnitureStorage);

const cupboard = new Сupboard(CUPBOARD_DOORS_QUANTITY);
cupboard.saveInstance(furnitureStorage);

// eslint-disable-next-line
console.log(furnitureStorage);
