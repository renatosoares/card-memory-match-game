class ListBuilder {
  constructor(list) {
    this.list = list || [];
  }

  createList(total) {
    const createListLoop = (keyPrefix) => {
      for (let i = 1; i <= total; i += 1) {
        this.list.push({
          id: i,
          key: `${keyPrefix}-${i}`,
          name: `Card ${i}`,
          isActive: false,
          hasMatch: false,
        });
      }
    };

    createListLoop(1);
    createListLoop(2);

    return this;
  }

  build() {
    return this.list;
  }
}

export default ListBuilder;
